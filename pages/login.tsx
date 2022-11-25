import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Login: React.FC = () => {
  return (
    <Box>
      <Head>
        <title>ログイン</title>
      </Head>
      <Header isSearch={false} />
      <Container w="full">
        <FormControl as="form" w="70%" mt={5} m="35px auto" onSubmit={(e) => e.preventDefault()}>
          <Heading textAlign="center" color="teal">ログイン</Heading>
          <Stack gap={3} mt={2} alignItems="center" justifyContent="center">
            <Input type="email" placeholder="sample@email.com" />
            <Input type="password" placeholder="*******" />
            <Button type="submit" colorScheme="green" w="40">
              ログイン
            </Button>
          </Stack>
        </FormControl>
      </Container>
    </Box>
  );
};

export default Login;
