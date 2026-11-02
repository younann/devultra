import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import '@fontsource-variable/heebo'
import '@fontsource/ibm-plex-sans-arabic/400.css'
import '@fontsource/ibm-plex-sans-arabic/500.css'
import '@fontsource/ibm-plex-sans-arabic/600.css'
import '@fontsource/ibm-plex-sans-arabic/700.css'
import App from './App.jsx'
import { langFromPath, pageFromPath } from './seo'
import './index.css'

const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App initialLang={langFromPath(window.location.pathname)} page={pageFromPath(window.location.pathname)} />
  </React.StrictMode>
)

// Prerendered pages hydrate, dev renders fresh
if (root.firstElementChild) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)
