import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './Providers'
import Characters from './components/Characters'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Characters />
      </div>
    </ApolloProvider>
  )
}

export default App
