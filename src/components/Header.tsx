import { Flex, Text } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { BurgerMenu } from "./BurgerMenu";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        S-Shop
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>

      <Flex align="center" ml="auto" mr="2">
        <BurgerMenu />
      </Flex>
    </Flex>
  );
}
