import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, Button } from '@chakra-ui/react'
import DrawerRock from './DrawerRock'
import { ChevronDownIcon } from '@chakra-ui/icons'

const MenuWap = ({ title, items }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
        {title}
      </MenuButton>
      <MenuList>
        <MenuGroup title='Profile'>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title='Help'>
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
        <MenuGroup title='Access'>
          <MenuItem><DrawerRock action="register" /></MenuItem>
          <MenuItem><DrawerRock action="login" /></MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}



export default MenuWap