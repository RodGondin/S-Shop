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

export function TableboxCesta() {
  return (
    <Table colorScheme="whiteAlpha" size="lg">
      <TableCaption>Produtos Seventh</TableCaption>
      <Thead>
        <Tr>
          <Th>Qtd</Th>
          <Th>Produto</Th>
          <Th>Descrição</Th>
          <Th>Valor</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>3</Td>
          <Td>Tênis</Td>
          <Td>Usado para correr</Td>
          <Td isNumeric w="8">
            R$23,00
          </Td>
          <Td w="8">
            <Button colorScheme="pink">X</Button>
          </Td>
        </Tr>
        <Tr>
          <Td>3</Td>
          <Td>Camisa</Td>
          <Td>Usado para esportes</Td>
          <Td isNumeric w="8">
            R$23,00
          </Td>
          <Td w="8">
            <Button colorScheme="pink">X</Button>
          </Td>
        </Tr>
        <Tr>
          <Td>3</Td>
          <Td>Raquete</Td>
          <Td>Usado para Beach Tênis</Td>
          <Td isNumeric w="8">
            R$23,00
          </Td>
          <Td w="8">
            <Button colorScheme="pink">X</Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
