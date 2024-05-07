"use client"
import React from 'react'
import { ThirdwebProvider } from '@thirdweb-dev/react'

const activeChain="sepolia"
const ThirdWebProvider = ({children}) => {
  return (
  <ThirdwebProvider
  clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}>
    {children}
  </ThirdwebProvider>
  )
}

export default ThirdWebProvider