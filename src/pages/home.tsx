import {
  Flex,
  Breadcrumb,
  Box,
  Text,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebars/Sidebar";
import { Searchbox } from "../components/Searchbox";
import { Pagination } from "../components/Pagination";
import { TableboxHome } from "../components/Tables/TableboxHome";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Flex align="flex-start" w="100%" p="8" direction="column">
          <Flex w="100%" justify="space-between">
            <Breadcrumb pt="4" separator={<ChevronRightIcon color="#D6D6D6" />}>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Searchbox />
          </Flex>

          <Box p="8" mt="8" w="100%" bg="gray.800" borderRadius={8}>
            <TableboxHome />
            <Pagination />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
