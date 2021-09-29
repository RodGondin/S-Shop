import {
  Flex,
  Breadcrumb,
  Box,
  Button,
  Text,
  FormControl,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebars/Sidebar";
import { Input } from "../components/Form/Input";
import { Pagination } from "../components/Pagination";
import { TableboxCesta } from "../components/Tables/TableboxCesta";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Cesta() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Flex align="flex-start" w="100%" p="8" direction="column">
          <Breadcrumb pt="4" separator={<ChevronRightIcon color="#D6D6D6" />}>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Cesta</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <FormControl mt="6">
            <Input
              name="name"
              type="text"
              label="Insira seu nome"
              bgColor="gray.800"
              placeholder="Nome"
            />
          </FormControl>

          <Box p="8" mt="8" w="100%" bg="gray.800" borderRadius={8}>
            <TableboxCesta />
            <Pagination />
          </Box>

          <Flex direction="column" pt="8" alignSelf="flex-end">
            <Text fontSize="xl" alignSelf="flex-end">
              Total R$9,00
            </Text>

            <Button mt="4" size="lg" maxW={230} colorScheme="pink">
              Finalizar Compra
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
