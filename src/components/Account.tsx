import React from 'react'
import { useAccountQuery } from '@/generated/graphql'

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  const { loading, error, data } = useAccountQuery()

  if (error) {
    console.log(error)
    return <div>Error</div>
  }
  if (loading) return <div>Loading</div>

  if (data && data.account.length < 1)
    return <div>Your query was successful but no account was found.</div>
  return <div>{data && data.account.map((account) => <div>{account.account_name}</div>)}</div>
}

export default Account
