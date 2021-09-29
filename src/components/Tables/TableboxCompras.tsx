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

export function TableboxCompras() {
  return (
    <Table colorScheme="whiteAlpha" size="lg">
      <TableCaption>Produtos Seventh</TableCaption>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Quantidade</Th>
          <Th>Total</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Pedro</Td>
          <Td>(3) Camisas</Td>
          <Td>R$100,00</Td>
        </Tr>
        <Tr>
          <Td>Caio</Td>
          <Td>(3) Tênis</Td>
          <Td>R$100,00</Td>
        </Tr>
        <Tr>
          <Td>Maria</Td>
          <Td>(3) Raquetes</Td>
          <Td>R$100,00</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
