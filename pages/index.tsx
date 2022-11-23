import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import { PostList } from "../models/typePost";
import Header from "../components/Header";
import { useEffect, useState } from "react";

type PropsData = {
  data: PostList;
};

const Home: React.FC<PropsData> = ({ data }) => {
  // dataが文字化けしている
  console.log("data");
  console.log(data);
  // console.log(text);

  const [posts, setPosts] = useState<PostList>([]);

  const getdata = async () => {
    const req = await fetch("/api/post");
    // console.log(await req.json());
    // fetchData = await req.json()
    setPosts(await req.json());
    console.log("cilent");
  };

  useEffect(() => {
    getdata();
    console.log(posts);
  }, []);

  return (
    <Box>
      <Head>
        <title>Markdown Blog</title>
        <meta name="description" content="マークダウン専用ブログ" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <Container as="main" h="100vh">
        {posts.map((val, index) => {
          return (
            <Stack key={index}>
              <Box bg="green.50" m={2}>
                <Heading>
                  <Link href={`get-article/${val.id}`}>{val.data.title}</Link>
                </Heading>
                <Text>
                  投稿日{" "}
                  {new Date(val.data.postdate.seconds * 1000).toLocaleString()}
                </Text>
              </Box>
            </Stack>
          );
        })}
      </Container>
      <Container as="footer">my twitter</Container>
    </Box>
  );
};

export const getStaticProps: GetStaticProps<PropsData> = async () => {
  const hogePath = "/api/post";
  axios.create({
    responseType: "arraybuffer",
    responseEncoding: "binary",
  });
  const res = await axios.get(process.env.host + hogePath);
  console.log("server");
  console.log(JSON.parse(JSON.stringify(res.data)));

  const objectData: PropsData = {
    data: res.data,
  };

  return {
    props: objectData,
  };
};

export default Home;