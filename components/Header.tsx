import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Heading, HStack, Input, InputGroup, InputLeftElement, Spacer, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Header() {
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
        <Link href="/" passHref>
          <Text textAlign="center" color="white">
            Markdown Blog
          </Text>
        </Link>
      </Heading>
      <Spacer flex={3} />
      <InputGroup flex={4}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="search" placeholder="検索" bg="white" />
      </InputGroup>
      <Box flex={2} textAlign="center">
        <Button colorScheme="green">新規登録・ログイン</Button>
      </Box>
    </HStack>
  </Container>
  )
}
