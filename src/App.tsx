import { Hero, Contacts, Schedule, Requisites, Info, Footer } from "./components"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Hero />
        <main className="flex-1 w-full box-border">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="content-grid">
              <Contacts />
              <Schedule />
              <Requisites />
            </div>
            <Info />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
