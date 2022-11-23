import { Box, Container } from "@chakra-ui/react";
import axios from "axios";
import type {
  GetServerSidePropsContext,
} from "next";
import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import { PostProps } from "../../models/typePost";

type PropsData = {
  data: PostProps;
};

const GetArticle: React.FC<PropsData> = ({ data }) => {
  console.log(data.title);
  console.log(data.content);

  return (
    <Box>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Header />
      <Container as="main" h="100vh">
        {data.content}
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
  const hogePath = "/api/post/" + post_id;
  const res = await axios.get(process.env.host + hogePath);
  const objectData: PropsData = { data: res.data };

  return {
    props: objectData,
  };
};
