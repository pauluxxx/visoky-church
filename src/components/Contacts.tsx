
export function Contacts() {
  return (
    <section aria-labelledby="contacts-heading">
      <h2 id="contacts-heading" className="section-label">Контакти</h2>
      <div className="space-y-6 text-sm sm:text-base tracking-tight leading-relaxed">
        <div>
          <p className="opacity-40 uppercase text-[10px] font-bold tracking-widest mb-1">Адреса</p>
          <a
            href="https://maps.app.goo.gl/DKS1UFibDTFWyRyK6"
            target="_blank"
            rel="noopener noreferrer"
            className="block underline underline-offset-4 decoration-black/10 dark:decoration-white/10 hover:decoration-black dark:hover:decoration-white transition-colors"
          >
            <p>вул. Кооперативна 58a, сел. Високий</p>
            <p>Харківська обл., Харківський р-н</p>
          </a>
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
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span>@vysokiy_church</span>
          </a>
        </div>
      </div>
    </section>
  )
}
