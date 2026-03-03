export function YouTubeLink() {
    return (
        <a
            href="https://www.youtube.com/@vysokiy_church"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-red-500/50"
            title="YouTube"
        >
            <svg
                className="w-8 h-8 text-white group-hover:text-red-500 transition-colors drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M19.615 3.184c-3.104-.245-9.263-.250-12.39 0-3.327.26-3.782 2.253-3.834 5.92-.016 1.056-.016 3.12 0 4.177.052 3.66 0.504 5.658 3.834 5.92 3.127.245 9.286.25 12.39 0 3.327-.26 3.782-2.253 3.834-5.92 0.016-1.056 0.016-3.12 0-4.177-0.052-3.66-0.504-5.658-3.834-5.92zM9 15.562V8.438l6.438 3.562L9 15.562z" />
            </svg>
        </a>
    );
}
