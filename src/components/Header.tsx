import React from 'react'
import Link from 'next/link'
//@ts-ignore
import { Box, Flex, LogoIcon, User } from 'herm'
import { Me } from '@/pages'

interface HeaderProps {
  me: Me
}

const Header: React.FC<HeaderProps> = ({ me }) => {
  return (
    <Box backgroundColor="#fafafb" paddingLeft="50px" paddingRight="50px">
      <Flex alignItems="center" justifyContent="space-between" height="50px">
        <LogoIcon></LogoIcon>
        <User username={me} sub="Scheduled for 16th December at 09:30 AM">
          <Flex alignItems="center">
            <Box>
              <img
                style={{ width: '30px', display: 'block', borderRadius: '50%' }}
                src={me.picture}
                alt={me.name}
              />
            </Box>
            <Box marginLeft="12px">
              <span style={{ fontWeight: 'bold' }}>{me.nickname}</span>
            </Box>
            <Box marginLeft="12px">
              <Link href="/api/logout">
                <a>Logout</a>
              </Link>
            </Box>
          </Flex>
        </User>
      </Flex>
    </Box>
  )
}
export default Header
