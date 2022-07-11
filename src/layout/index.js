import {
  Button,
  Navbar,
  NavbarGroup,
  H3,
  Icon,
  Menu,
  MenuItem,
} from '@blueprintjs/core'
import { Popover2 } from '@blueprintjs/popover2'

export default function Layout({ children }) {
  const childMenu = (
    <Menu>
      <MenuItem icon="envelope" text="ryanjoker87@gmail.com" />
      <MenuItem icon="log-out" text="logout" />
    </Menu>
  )

  return (
    <div>
      <Navbar>
        <NavbarGroup align="right">
          <H3 style={{ marginRight: '10px' }}>
            <Icon icon="document" size={25} />
            NOTES
          </H3>
          <Popover2 placement="bottom-end" content={childMenu}>
            <Button icon="user" minimal text="Ryan Pace" />
          </Popover2>
        </NavbarGroup>
      </Navbar>
      {children}
    </div>
  )
}
