import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { ApolloProvider } from '@apollo/client'
import client from './Providers'
import Characters from './components/Characters'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Characters />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
