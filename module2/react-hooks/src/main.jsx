import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './App.jsx'

// How the virtual DOM is created. Grabs root element from index html
// Displays home component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
