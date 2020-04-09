import React from 'react'
//@ts-ignore
import { Box, Flex } from 'herm'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import { Me } from '@/pages'

interface LayoutProps {
  me: Me
}

const Layout: React.FC<LayoutProps> = ({ children, me }) => {
  return (
    <Box>
      <Header me={me}></Header>
      <Flex>
        <Sidebar></Sidebar>
        <Main>{children}</Main>
      </Flex>
    </Box>
  )
}
export default Layout
