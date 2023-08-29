import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ContextProvider from './context/ContextProvider.tsx';
import { ConfigProvider, theme } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}>
        <App />
      </ConfigProvider>
    </ContextProvider>
  </React.StrictMode>,
)
