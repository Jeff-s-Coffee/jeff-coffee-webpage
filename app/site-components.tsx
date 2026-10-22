import Link from "next/link";

export const Bean = () => (
  <svg aria-hidden="true" viewBox="0 0 32 32" width="32" height="32">
    <path d="M25.8 5.9C20.6.7 11.1 2.6 6.1 7.6S-.1 22.1 5 27.2c5.1 5.1 14.6 3.3 19.6-1.8s6.3-14.3 1.2-19.5Z" />
    <path d="M23.9 4.4c-2.1 6.9-6.8 7.1-10.8 11.1S8.7 24.3 5.8 27.8" />
  </svg>
);

const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="15" height="15">
    <path d="M4 12 12 4M5 4h7v7" />
  </svg>
);

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Jeff's Coffee — início">
      <span className="brand-mark"><Bean /></span>
      <span>Jeff&apos;s Coffee</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Brand />
      <nav aria-label="Navegação principal">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok</a>
        <Link className="nav-cta" href="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Brand />
        <div className="footer-links" aria-label="Redes sociais e contato">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram <ArrowUpRight />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
            TikTok <ArrowUpRight />
          </a>
          <Link href="/contato">Contato</Link>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Jeff&apos;s Coffee</p>
      </div>
    </footer>
  );
}
