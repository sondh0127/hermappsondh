import React from 'react'
//@ts-ignore
import { Box, Nav, NavItem, ScheduleIcon, FeedsIcon, ProfileIcon } from 'herm'

const Sidebar: React.FC = () => {
  return (
    <Box
      backgroundColor="#fafafb"
      height="100vh"
      width="270px"
      paddingTop="40px"
      paddingLeft="30px"
      paddingRight="30px"
    >
      <Nav>
        <NavItem Icon={FeedsIcon}>Feeds</NavItem>
        <NavItem Icon={ScheduleIcon}>Schedule</NavItem>
        <NavItem Icon={ProfileIcon}>Account</NavItem>
      </Nav>
    </Box>
  )
}
export default Sidebar
