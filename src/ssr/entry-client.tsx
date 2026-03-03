import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import { ThemeProvider } from "../context/ThemeContext"
import App from "../App"
import "../style.css"

hydrateRoot(
  document.getElementById("app")!,
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
