import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { SearchIcon } from "@chakra-ui/icons";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Markdown Blog</title>
        <meta name="description" content="マークダウン専用ブログ" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Container as="header" w="full" h="14" maxW="none" p={0} bgColor="gray.500" position="sticky" top={0}>
        <HStack w="full" h="full">
          <Heading as="h1" size="md" cursor="pointer" flex={2}>
            <Link href="/" passHref>
              <Text textAlign="center" color="white">Markdown Blog</Text>
            </Link>
          </Heading>
          <Spacer flex={3} />
          <InputGroup flex={4}>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="search" placeholder="検索"  bg="white"/>
          </InputGroup>
          <Box flex={2} textAlign="center">
            <Button colorScheme="green" >
              新規登録・ログイン
            </Button>
          </Box>
        </HStack>
      </Container>
      <Container as="main" h="100vh">
        
      </Container>
      <Container as="footer">
        my twitter
      </Container>
    </Box>
  );
};

export default Home;
