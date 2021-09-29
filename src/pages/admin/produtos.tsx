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
  HStack,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SidebarAdmin } from "../../components/Sidebars/SidebarAdmin";
import { Input } from "../../components/Form/Input";
import { Pagination } from "../../components/Pagination";
import { TableboxProdutos } from "../../components/Tables/TableboxProdutos";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { RiAddLine } from "react-icons/ri";

export default function Produtos() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarAdmin />

        <Flex align="flex-start" w="100%" p="8" direction="column">
          <Breadcrumb pt="4" separator={<ChevronRightIcon color="#D6D6D6" />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Admin</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Produtos</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <FormControl mt="6">
            <HStack spacing="6">
              <Input
                name="name"
                type="text"
                label="Produto"
                bgColor="gray.800"
                placeholder="Nome"
              />
              <Input
                name="description"
                type="text"
                label="Descrição"
                bgColor="gray.800"
                placeholder="Descrição"
              />
              <Input
                name="price"
                type="text"
                label="Preço"
                bgColor="gray.800"
                placeholder="R$1,00"
              />
              <Box pt="8">
                <IconButton
                  aria-label="Adicionar produto"
                  colorScheme="pink"
                  icon={<RiAddLine />}
                  fontSize="20"
                  type="submit"
                />
              </Box>
            </HStack>
          </FormControl>

          <Box p="8" mt="8" w="100%" bg="gray.800" borderRadius={8}>
            <TableboxProdutos />
            <Pagination />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
