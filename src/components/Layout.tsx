import React from 'react'
//@ts-ignore
import { Box, Flex } from 'herm'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'

const Layout: React.FC = ({ children }) => {
  return (
    <Box>
      <Header></Header>
      <Flex>
        <Sidebar></Sidebar>
        <Main>{children}</Main>
      </Flex>
    </Box>
  )
}
export default Layout
