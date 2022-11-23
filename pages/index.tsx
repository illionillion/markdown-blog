import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import { PostList } from "../models/typePost";
import Header from "../components/Header";

type PropsData = {
  data: PostList;
};

const Home: React.FC<PropsData> = ({ data }) => {
  return (
    <Box>
      <Head>
        <title>Markdown Blog</title>
        <meta name="description" content="マークダウン専用ブログ" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <Container as="main" h="100vh">
        {data.map((val, index) => {
          return (
            <Stack key={index}>
              <Box bg="green.50" m={2}>
                <Heading>
                  <Link href={`getarticle/${val.id}`}>{val.data.title}</Link>
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

export default Home;

export const getStaticProps: GetStaticProps<PropsData> = async () => {
  const hogePath = "/api/post";
  const res = await axios.get(process.env.host + hogePath);
  console.log(res.data);

  const objectData: PropsData = {
    data: res.data,
  };

  return {
    props: objectData,
  };
};
