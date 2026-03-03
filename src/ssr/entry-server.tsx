import { renderToString } from "react-dom/server"
import { ThemeProvider } from "../context/ThemeContext"
import App from "../App"

export function render() {
  return renderToString(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}
