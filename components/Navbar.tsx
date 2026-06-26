const links = [
  { href: "#ay-takvimi", label: "Ay Takvimi", short: "Takvim" },
  { href: "#yorumlar", label: "Yorumlar", short: "Yorum" },
  { href: "#gunun-sakasi", label: "Günün Şakası", short: "Şaka" },
  { href: "#burclar", label: "Burçlar", short: "Burçlar" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a14]/95 backdrop-blur-md">
      <nav className="safe-px mx-auto flex w-full max-w-5xl min-w-0 flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3.5">
        <a
          href="#"
          className="shrink-0 text-center text-xl font-semibold tracking-tight text-white sm:text-left sm:text-2xl"
        >
          AYFAZI
        </a>

        <ul className="flex w-full min-w-0 items-center justify-center gap-1 sm:w-auto sm:justify-end">
          {links.map((link) => (
            <li key={link.href} className="min-w-0 flex-1 sm:flex-none">
              <a
                href={link.href}
                className="block rounded-full px-2 py-2 text-center text-xs text-slate-400 transition-colors hover:bg-white/5 hover:text-white sm:px-3 sm:text-sm"
              >
                <span className="sm:hidden">{link.short}</span>
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
