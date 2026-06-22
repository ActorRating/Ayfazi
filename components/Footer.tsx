export function Footer() {
  return (
    <footer className="safe-px border-t border-white/5 py-8 text-center">
      <a
        href="mailto:info@ayfazi.com"
        className="text-sm text-slate-400 transition-colors hover:text-white"
      >
        info@ayfazi.com
      </a>
      <p className="mt-3 text-xs text-slate-600">
        © 2026.{" "}
        <a
          href="https://www.ayfazi.com"
          className="transition-colors hover:text-slate-400"
        >
          www.ayfazi.com
        </a>
      </p>
    </footer>
  );
}
