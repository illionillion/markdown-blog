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
import { FormEvent, useEffect, useState } from "react";
import Header from "../components/Header";
import InputPassword from "../components/InputPassword";

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    console.log("user-email", userEmail);
    console.log("user-password", userPassword);
  }, [userEmail, userPassword]);

  const onSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Box>
      <Head>
        <title>ログイン</title>
      </Head>
      <Header isSearch={false} />
      <Container w="full">
        <FormControl
          as="form"
          w="70%"
          mt={5}
          m="35px auto"
          onSubmit={onSubmit}
          autoComplete="on"
        >
          <Heading textAlign="center" color="teal">
            ログイン
          </Heading>
          <Stack gap={3} mt={2} alignItems="center" justifyContent="center">
            <Input
              type="email"
              id="user-email"
              name="user-email"
              autoComplete="email"
              placeholder="sample@email.com"
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <InputPassword
              placeholder="password"
              autoComplete="current-password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
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
