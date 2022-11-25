import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { PostList } from "../models/typePost";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getPosts } from "./api/post";

type PropsData = {
  data: PostList;
};

const Home: React.FC<PropsData> = ({ data }) => {
  // dataが文字化けしている
  // console.log("data");
  // console.log(data);
  // console.log(text);

  return (
    <Box>
      <Head>
        <title>Markdown Blog</title>
        <meta name="description" content="マークダウン専用ブログ" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <Container as="main">
        {data.map((val, index) => {
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
  const data: PostList = JSON.parse(JSON.stringify(await getPosts()));
  // console.log("server");
  // console.log(data);

  const objectData: PropsData = {
    data: data,
  };

  return {
    props: objectData,
  };
};

export default Home;
