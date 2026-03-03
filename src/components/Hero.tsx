import { ThemeToggle } from "./ThemeToggle"
import { YouTubeLink } from "./YouTubeLink"

export function Hero() {
  return (
    <div className="hero-section relative h-[85vh] min-h-[600px] flex flex-col">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('/hero-bg.png')` }}
      >
        <div className="hero-overlay"></div>
      </div>

      <header className="relative z-10 w-full px-6 py-6 flex justify-between items-center text-white">
        <div className="text-xl font-light tracking-widest cursor-default">ЦЕРКВА ЄХБ</div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <YouTubeLink />
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-white text-center px-4">
        <p className="hero-welcome mb-2">Вітаємо в</p>
        <h1 className="hero-title">церкві єхб</h1>
        <p className="mt-8 text-sm uppercase tracking-[0.3em] font-light opacity-60">сел. Високий</p>
      </div>
    </div>
  )
}
