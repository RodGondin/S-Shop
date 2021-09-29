import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from "@chakra-ui/react";

export function TableboxProdutos() {
  return (
    <Table colorScheme="whiteAlpha" size="lg">
      <TableCaption>Produtos Seventh</TableCaption>
      <Thead>
        <Tr>
          <Th>Produto</Th>
          <Th>Descrição</Th>
          <Th>Preço</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Tênis</Td>
          <Td>Usado para correr</Td>
          <Td isNumeric w="10">
            R$23,00
          </Td>
          <Td w="10">
            <Button colorScheme="pink">X</Button>
          </Td>
        </Tr>
        <Tr>
          <Td>Camisa</Td>
          <Td>Usado para esportes</Td>
          <Td isNumeric w="10">
            R$23,00
          </Td>
          <Td w="10">
            <Button colorScheme="pink">X</Button>
          </Td>
        </Tr>
        <Tr>
          <Td>Raquete</Td>
          <Td>Usado para Beach Tênis</Td>
          <Td isNumeric w="10">
            R$23,00
          </Td>
          <Td w="10">
            <Button colorScheme="pink">X</Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
