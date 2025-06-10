import React, {StrictMode} from 'react'
import './style.css'
import {createRoot} from "react-dom/client";
import App from "./app.tsx";

createRoot(document.getElementById('app')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)