import { HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Input,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
} from "@chakra-ui/react";
import Link from "next/link";

export function BurgerMenu() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        colorScheme="gray.700"
      />
      <MenuList>
        <Link href="/home">
          <MenuItem icon={<RepeatIcon />} command="⌘T" color="gray.700">
            Ir para Usuário
          </MenuItem>
        </Link>
        <Link href="/admin/produtos">
          <MenuItem icon={<RepeatIcon />} command="⌘N" color="gray.700">
            Ir para Admin
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
