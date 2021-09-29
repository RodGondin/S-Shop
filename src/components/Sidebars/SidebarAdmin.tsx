import { Box, Stack, Text, Link as ChakraLink, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";
import Link from "next/link";

export function SidebarAdmin() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            Etapas
          </Text>
          <Stack spacing="10" mt="8" align="stretch">
            <Link href="/admin/produtos">
              <ChakraLink display="flex" align="center">
                <Icon as={RiDashboardLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Produtos
                </Text>
              </ChakraLink>
            </Link>
            <Link href="/admin/compras">
              <ChakraLink display="flex" align="center">
                <Icon as={RiContactsLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Compras
                </Text>
              </ChakraLink>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
