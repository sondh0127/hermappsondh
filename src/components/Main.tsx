import React from 'react'
//@ts-ignore
import { Box } from 'herm'
const Main: React.FC = ({ children }) => {
  return (
    <Box paddingLeft="40px" paddingTop="40px">
      {children}
    </Box>
  )
}
export default Main
