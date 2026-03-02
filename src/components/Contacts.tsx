
export function Contacts() {
  return (
    <section aria-labelledby="contacts-heading">
      <h2 id="contacts-heading" className="section-label">Контакти</h2>
      <div className="space-y-6 text-sm sm:text-base tracking-tight leading-relaxed">
        <div>
          <p className="opacity-40 uppercase text-[10px] font-bold tracking-widest mb-1">Адреса</p>
          <p>вул. Кооперативна 58a, сел. Високий</p>
          <p>Харківська обл., Харківський р-н</p>
        </div>

        <div>
          <p className="opacity-40 uppercase text-[10px] font-bold tracking-widest mb-1">Телефон</p>
          <a href="tel:+380635898044" className="underline underline-offset-4 decoration-black/10 dark:decoration-white/10 hover:decoration-black dark:hover:decoration-white transition-colors">
            +38 (063) 589-80-44
          </a>
        </div>

        <div>
          <p className="opacity-40 uppercase text-[10px] font-bold tracking-widest mb-1">Email</p>
          <a href="mailto:pauluxxx746@gmail.com" className="underline underline-offset-4 decoration-black/10 dark:decoration-white/10 hover:decoration-black dark:hover:decoration-white transition-colors">
            pauluxxx746@gmail.com
          </a>
        </div>

        <div>
          <p className="opacity-40 uppercase text-[10px] font-bold tracking-widest mb-1">YouTube</p>
          <a
            href="https://www.youtube.com/@vysokiy_church"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 underline underline-offset-4 decoration-black/10 dark:decoration-white/10 hover:decoration-red-500 transition-all hover:text-red-500"
          >
            <svg
              className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:text-red-500 transition-all"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.104-.245-9.263-.250-12.39 0-3.327.26-3.782 2.253-3.834 5.92-.016 1.056-.016 3.12 0 4.177.052 3.66 0.504 5.658 3.834 5.92 3.127.245 9.286.25 12.39 0 3.327-.26 3.782-2.253 3.834-5.92 0.016-1.056 0.016-3.12 0-4.177-0.052-3.66-0.504-5.658-3.834-5.92zM9 15.562V8.438l6.438 3.562L9 15.562z" />
            </svg>
            <span>@vysokiy_church</span>
          </a>
        </div>
      </div>
    </section>
  )
}
