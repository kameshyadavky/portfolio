import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' // this will be used for all components, treat is as app theme

// add dom to root element
ReactDOM.createRoot(document.getElementById('root')!).render(
    // React.StrictMode is a tool for highlighting potential problems in app
    // https://react.dev/reference/react/StrictMode
    <React.StrictMode>
        {/* Your components will go here */}
        <App />
    </React.StrictMode>,
)
