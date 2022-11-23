import {
  Box,
  Button,
  Container,
  FormLabel,
  HStack,
  Input,
  Link,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
// import SimpleMdeReact from "react-simplemde-editor";
import Header from "../components/Header";

const Post: React.FC = () => {
  const [title, setTitle] = useState("");
  const [keywords, setKeywords] = useState("");
  const [content, setContent] = useState("");

  useEffect(()=>{
    console.log(title, keywords, content);
    
  },[title, keywords, content])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
        title: title,
        keywords: keywords,
        content: content,
        userId: 0
    }

    const req = await fetch('/api/post/create', {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data)
    })

    console.log(req.status);
    console.log(await req.json());
    if (req.status === 200) {
        window.location.reload()
    }
  }

  return (
    <Box>
      <Head>
        <title>投稿フォーム</title>
      </Head>
      <Header />
      <Container as="main" w="full" maxW="full" h="100vh">
        <form onSubmit={onSubmit}>
          <Stack margin={5} gap={2}>
            <Input
              type="text"
              w="full"
              size="lg"
              placeholder="タイトルを入力"
              onChange={e => setTitle(e.target.value)}
              required
              />
            <Input
              type="text"
              w="full"
              size="lg"
              placeholder="カンマ区切りでキーワードを入力"
              onChange={e => setKeywords(e.target.value)}
              required
              />
            <Textarea
              placeholder="マークダウンを記入"
              size="lg"
              minHeight="56"
              onChange={e => setContent(e.target.value)}
              required
            ></Textarea>
            <HStack
              textAlign="center"
              alignItems="center"
              justifyContent="center"
            >
              {/* <Link href="/" colorScheme="red">キャンセル</Link> */}
              <Button type="button" colorScheme="red">
                キャンセル
              </Button>
              <Button type="submit" colorScheme="blue">
                投稿
              </Button>
            </HStack>
          </Stack>
        </form>
      </Container>
    </Box>
  );
};

export default Post;
