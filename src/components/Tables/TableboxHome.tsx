import {
  Input,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  HStack,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

export function TableboxHome() {
  return (
    <Table colorScheme="whiteAlpha" size="lg">
      <TableCaption>Produtos Seventh</TableCaption>
      <Thead>
        <Tr>
          <Th>Produto</Th>
          <Th>Descrição</Th>
          <Th>Quantidade</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Tênis</Td>
          <Td>Usado para correr</Td>
          <Td>(3) disponiveis</Td>
          <Td w="6">
            <Button
              type="submit"
              colorScheme="pink"
              size="md"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Adicionar
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>Camisa</Td>
          <Td>Usado para esportes</Td>
          <Td>(2) disponiveis</Td>
          <Td w="6">
            <Button
              type="submit"
              colorScheme="pink"
              size="md"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Adicionar
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>Raquete</Td>
          <Td>Usado para Beach Tênis</Td>
          <Td>(4) disponiveis</Td>
          <Td w="6">
            <Button
              type="submit"
              colorScheme="pink"
              size="md"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Adicionar
            </Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
