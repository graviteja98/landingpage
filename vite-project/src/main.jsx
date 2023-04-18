import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'


const root = ReactDOM.createRoot(document.getElementById('root'))

const theme = createTheme({
  palette:{
    primary : {
      main : "#FF6D60",
    },
    secondary : {
      main : "#F7D060"
    }

  }
})
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
