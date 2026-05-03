import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './app'

// ── GitHub Pages SPA redirect handler ──────────────────────────────────────
// El 404.html encoda la ruta en un query param (?/...).
// Aquí la decodificamos y hacemos replaceState para que React Router la vea.
;(function () {
  const redirect = sessionStorage.redirect
  delete sessionStorage.redirect
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect)
  }

  // También procesamos el formato ?/ruta codificado por el 404.html
  const search = location.search
  if (search.startsWith('?/')) {
    const path = '/' + search.slice(2).replace(/~and~/g, '&')
    history.replaceState(null, null, path + location.hash)
  }
})()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/pruebas">
      <App />
    </BrowserRouter>
  </StrictMode>
)
