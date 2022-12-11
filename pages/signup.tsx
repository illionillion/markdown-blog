import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import Header from "../components/Header";
import InputPassword from "../components/InputPassword";
import { User } from "../models/typeUser";

const Signup: React.FC = () => {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    console.log("user-name", userName);
    console.log("user-email", userEmail);
    console.log("user-password", userPassword);
  }, [userName, userEmail, userPassword]);

  const onSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data: User = {
      id:'',
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    const req = await fetch("api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const msg = await req.json();
    if (req.status === 200) {
      // ログイン画面へ遷移
      router.push("/login");
    } else if (req.status === 500) {
      console.log(msg.code);
      setErrorMessage(msg.code);
    }
  };

  return (
    <Box>
      <Head>
        <title>新規登録</title>
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
            新規登録
          </Heading>
          <Stack gap={3} mt={2} alignItems="center" justifyContent="center">
            <Input
              type="name"
              name="user-name"
              id="user-name"
              placeholder="your name"
              autoComplete="username"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <Input
              type="email"
              name="user-email"
              id="user-email"
              placeholder="sample@email.com"
              autoComplete="email"
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <InputPassword
              placeholder="password"
              onChange={(e) => setUserPassword(e.target.value)}
              autoComplete="new-password"
            />
            <Button type="submit" colorScheme="green" w="40">
              登録する
            </Button>
            {errorMessage ? <Alert status="error">{errorMessage}</Alert> : ""}
          </Stack>
        </FormControl>
      </Container>
    </Box>
  );
};

export default Signup;
