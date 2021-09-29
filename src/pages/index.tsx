import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import Link from "next/link";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Input name="name" type="text" label="Insira seu nome" />
        <Stack spacing="5" mt="8">
          <Link href="/home">
            <Button type="submit" colorScheme="blue" size="lg">
              Usuário
            </Button>
          </Link>
          <Link href="/produtos">
            <Button type="submit" colorScheme="pink" size="lg">
              Admin
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
}
