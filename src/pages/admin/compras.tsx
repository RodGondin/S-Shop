import {
  Flex,
  Breadcrumb,
  Box,
  Text,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SidebarAdmin } from "../../components/Sidebars/SidebarAdmin";
import { Pagination } from "../../components/Pagination";
import { TableboxCompras } from "../../components/Tables/TableboxCompras";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Compras() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarAdmin />

        <Flex align="flex-start" w="100%" p="8" direction="column">
          <Flex w="100%" justify="space-between">
            <Breadcrumb pt="4" separator={<ChevronRightIcon color="#D6D6D6" />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Admin</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Compras</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>

          <Box p="8" mt="8" w="100%" bg="gray.800" borderRadius={8}>
            <TableboxCompras />
            <Pagination />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
