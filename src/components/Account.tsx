import React from 'react'
import { useMyQueryQuery } from '@/generated/graphql'

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  const { loading, error, data } = useMyQueryQuery()

  if (error) {
    console.log(error)
    return <div>Error</div>
  }
  if (loading) return <div>Loading</div>

  if (data && data.users.length < 1)
    return <div>Your query was successful but no account was found.</div>
  return <div>{data && data.users.map((user) => <div key={user.id}>{user.auth0_id}</div>)}</div>
}

export default Account
