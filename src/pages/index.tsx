import Link from 'next/link'
import styled from 'styled-components'
import Layout from '@/components/Layout'

const Title = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Nunito', sans-serif;
`

const Index = () => {
  return (
    <Layout>
      <Title>My page Master</Title>
    </Layout>
  )
}

export default Index
