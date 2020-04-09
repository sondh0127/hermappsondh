import Link from 'next/link'
import styled from 'styled-components'
import Layout from '@/components/Layout'
import { NextPage } from 'next'
// @ts-ignore
import { Text } from 'herm'
import fetch from 'node-fetch'
import Account from '@/components/Account'

const Title = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Nunito', sans-serif;
`
export interface Me {
  name: string
  nickname: string
  picture: string
  updated_at: string
  sub: string
}

interface IndexProps {
  me?: Me
}

const Index: NextPage<IndexProps> = ({ me }) => {
  if (me) {
    return (
      <Layout me={me}>
        <Text fontSize="32px">Hello, {me.name}</Text>
        <Account />
      </Layout>
    )
  }
  return null
}

Index.getInitialProps = async function (context) {
  const res = await fetch(`${process.env.BASE_URL}/api/me`, {
    headers: {
      cookie: context.req?.headers.cookie || '',
    },
  })
  const me = await res.json()
  if (me.error) {
    console.log(me)
    context.res?.writeHead(302, {
      Location: '/api/login',
    })
    context.res?.end()
    return {}
  }
  return { me }
}

export default Index
