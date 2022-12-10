import { Box, Center, Container, Link } from "@chakra-ui/react";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import { PostProps } from "../../models/typePost";
// import {marked} from 'marked'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getOnePost } from "../api/post/[post_id]";

type PropsData = {
  data: PostProps;
  content: any;
};

const GetArticle: React.FC<PropsData> = ({ data, content }) => {
  // console.log(data.title);
  // console.log(data.content);

  return (
    <Box>
      <Head>
        <title>{data.title}</title>
        <meta name="keywords" content={data.keywords} />
      </Head>
      <Header />
      <Container as="main" h="100vh">
        <ReactMarkdown remarkPlugins={[remarkGfm]} >{content}</ReactMarkdown>
        <Center>
          <Link href="/" color="teal">戻る</Link>
        </Center>
      </Container>
    </Box>
  );
};

export default GetArticle;

export const getServerSideProps = async ({
  params,
  query,
}: GetServerSidePropsContext) => {
  const post_id = query.post_id;
  
  const data :PostProps = JSON.parse(JSON.stringify(await getOnePost(post_id)))
  // const objectData: PropsData = { data: res.data , content: marked(res.data.content)};
  const objectData: PropsData = { data: data, content: data.content };
  // console.log("取得");
  // console.log(res.data);
  

  return {
    props: objectData,
  };
};
