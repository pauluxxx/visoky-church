import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="cursor-pointer relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10 text-white group overflow-hidden"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            <div className="relative w-5 h-5 transition-transform duration-500 transform group-hover:scale-110">
                {/* Sun Icon */}
                <svg
                    className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                    />
                </svg>

                {/* Moon Icon */}
                <svg
                    className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            </div>

            {/* Background Pulse Effect */}
            <div className="absolute inset-0 bg-white/0 group-active:bg-white/10 transition-colors duration-300"></div>
        </button>
    );
}
