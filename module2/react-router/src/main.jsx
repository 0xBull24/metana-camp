import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

/* 
  HashRouter - Routes will start behind a # where the url cannot be sent to a server
  unstable_HistoryRouter - gives route history abilities but not stable and not recommended 
  MemoryRouter - used for testing as routing still occurs but does not change the url
  Static - used for Server side rendering and ensures a url loads
  NativeRouter - use for react native (mobile dev)
 */


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
