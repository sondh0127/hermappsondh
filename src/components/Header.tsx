import React from 'react'
//@ts-ignore
import { Box, Flex, LogoIcon, User } from 'herm'

const Header: React.FC = () => {
  return (
    <Box backgroundColor="#fafafb" paddingLeft="50px" paddingRight="50px">
      <Flex alignItems="center" justifyContent="space-between" height="50px">
        <LogoIcon></LogoIcon>
        <User username="Christian Nwamba" sub="Scheduled for 16th December at 09:30 AM">
          <Flex alignItems="center">
            <Box>
              <User.Avatar></User.Avatar>
            </Box>
            <Box marginLeft="12px">
              <User.Username></User.Username>
            </Box>
          </Flex>
        </User>
      </Flex>
    </Box>
  )
}
export default Header
