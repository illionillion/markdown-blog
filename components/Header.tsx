import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

type HeaderProps = {
  isSearch?: boolean;
};

const Header: React.FC<HeaderProps> = ({ isSearch = true }) => {
  return (
    <Container
      as="header"
      w="full"
      h="14"
      maxW="none"
      p={0}
      bgColor="gray.500"
      position="sticky"
      zIndex={1}
      top={0}
    >
      <HStack w="full" h="full">
        <Heading as="h1" size="md" cursor="pointer" flex={2}>
          <Link href="/" _hover={{ textDecoration: "none" }}>
            <Text textAlign="center" color="white">
              Markdown Blog
            </Text>
          </Link>
        </Heading>
        <Spacer flex={3} />
        {isSearch ? (
          <InputGroup flex={4}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input type="search" placeholder="検索" bg="white" />
          </InputGroup>
        ) : (
          <Spacer flex={4} />
        )}
        <Box flex={2} textAlign="center">
          {true ? (
            <Popover>
              <PopoverTrigger>
                <Button colorScheme="green">新規登録・ログイン</Button>
              </PopoverTrigger>
              <PopoverContent w="52">
                {/* <PopoverArrow /> */}
                <PopoverCloseButton />
                {/* <PopoverHeader>メニュー</PopoverHeader> */}
                <PopoverBody>
                  <Stack>
                    <Link href="/signup" color="teal.500">
                      新規作成
                    </Link>
                    <Link href="/login" color="teal.500">
                      ログイン
                    </Link>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Button colorScheme="green">{'[ユーザー名]'}</Button>
              </PopoverTrigger>
              <PopoverContent w="52">
                {/* <PopoverArrow /> */}
                <PopoverCloseButton />
                {/* <PopoverHeader>メニュー</PopoverHeader> */}
                <PopoverBody>
                  <Stack>
                    <Link href="/" color="teal.500">
                      プロフィール
                    </Link>
                    <Link href="/" color="teal.500">
                      投稿一覧
                    </Link>
                    <Link href="/post" color="teal.500">
                      投稿
                    </Link>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </Box>
      </HStack>
    </Container>
  );
};

export default Header;
