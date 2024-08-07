import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import './styles.css';

import Characters from './components/Characters'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



