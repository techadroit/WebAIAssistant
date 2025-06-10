import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Chat from './feature/chat/Chat'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>,
)
