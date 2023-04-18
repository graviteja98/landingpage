import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Themecontext } from './contexts/Themecontext';
const root = ReactDOM.createRoot(document.getElementById('root'))

const getTheme = (a)=>{
  if(a)
return a
else
return "light"
}

const theme = createTheme({
  palette:{
    mode : "light",
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
    <Themecontext.Provider value={getTheme}>
    <ThemeProvider theme={theme}>
      <CssBaseline>
    <App />
    </CssBaseline>
    </ThemeProvider>
    </Themecontext.Provider>
  </React.StrictMode>,
)
