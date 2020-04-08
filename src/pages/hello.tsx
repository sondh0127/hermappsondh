import React from 'react'

interface HelloWorldProps {}

const HelloWorld: React.FC<HelloWorldProps> = () => {
  console.log('Mounted')
  return <h1>HelloWorld</h1>
}

export default HelloWorld
