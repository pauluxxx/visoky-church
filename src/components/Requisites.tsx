export function Requisites() {
  return (
    <section aria-labelledby="requisites-heading">
      <h2 id="requisites-heading" className="section-label">Реквізити</h2>
      <div className="space-y-6 text-sm sm:text-base tracking-tight leading-relaxed">
        <div>
          <p className="opacity-40 uppercase text-[10px] font-bold tracking-widest mb-1">Отримувач</p>
          <p className="font-medium">Релігійна громада ЄХБ сел. Високий</p>
        </div>

        <div className="pt-2">
          <p className="opacity-40 uppercase text-[10px] font-bold tracking-widest mb-1">Номер картки</p>
          <p className="font-mono text-base tracking-widest select-all">4874 1000 2536 9789</p>
          <p className="text-[10px] opacity-40 mt-1 uppercase tracking-wider">АТ "Універсал Банк" (monobank)</p>
        </div>

        <div className="pt-8 flex justify-center lg:justify-start">
          <a
            href="https://send.monobank.ua/jar/7q67EYX3pH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-[#5a161d] dark:bg-zinc-100 text-white dark:text-black text-[11px] font-bold uppercase tracking-[0.4em] transition-all hover:scale-[1.02] active:scale-95 shadow-2xl hover:bg-black dark:hover:bg-white border border-transparent text-center"
          >
            Підтримати служіння
          </a>
        </div>
      </div>
    </section>
  )
}
