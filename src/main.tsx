// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createClient, Provider, cacheExchange, fetchExchange, debugExchange } from 'urql';

const client = createClient({
  exchanges: [debugExchange, cacheExchange, fetchExchange],
  url: import.meta.env.VITE_API_URL || 'http://localhost:4000/graphql',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
)