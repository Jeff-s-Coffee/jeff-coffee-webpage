const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

const Bean = () => (
  <svg aria-hidden="true" viewBox="0 0 32 32" width="32" height="32">
    <path d="M25.8 5.9C20.6.7 11.1 2.6 6.1 7.6S-.1 22.1 5 27.2c5.1 5.1 14.6 3.3 19.6-1.8s6.3-14.3 1.2-19.5Z" />
    <path d="M23.9 4.4c-2.1 6.9-6.8 7.1-10.8 11.1S8.7 24.3 5.8 27.8" />
  </svg>
);

const RobotIllustration = () => (
  <div className="robot-stage" aria-label="Ilustração abstrata de um braço robótico servindo café">
    <span className="orbit orbit-one" />
    <span className="orbit orbit-two" />
    <svg className="robot" viewBox="0 0 520 520" role="img">
      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2eadc" />
          <stop offset="1" stopColor="#b8ab98" />
        </linearGradient>
      </defs>
      <path className="steam steam-a" d="M369 181c-22-25 22-38 1-64" />
      <path className="steam steam-b" d="M407 176c-17-19 17-34 2-52" />
      <rect className="base" x="74" y="405" width="158" height="24" rx="12" />
      <rect className="base-stem" x="126" y="343" width="54" height="68" rx="18" />
      <circle className="joint" cx="153" cy="331" r="40" />
      <path className="arm-segment" d="M176 310 260 230c15-14 39-13 52 3l9 11-43 38-16-13-64 68Z" />
      <circle className="joint small" cx="302" cy="255" r="30" />
      <path className="arm-segment thin" d="m315 236 75-64 34 38-81 70Z" />
      <circle className="joint tiny" cx="411" cy="191" r="23" />
      <path className="gripper" d="m422 201 19 44m-26-40-5 43m31-3 22 5m-53-2-19 8" />
      <path className="cup" d="M350 282h91l-9 90c-2 18-17 32-35 32h-2c-18 0-33-14-35-32Z" />
      <path className="cup-handle" d="M438 302h17c29 0 29 45 0 45h-18" />
      <path className="coffee" d="M356 294h79" />
      <ellipse className="shadow" cx="374" cy="435" rx="118" ry="14" />
    </svg>
    <div className="status-pill"><span /> Sistema em desenvolvimento</div>
  </div>
);

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#inicio" aria-label="Jeff's Coffee — início">
          <span className="brand-mark"><Bean /></span>
          <span>Jeff&apos;s Coffee</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#conceito">O conceito</a>
          <a href="#experiencia">A experiência</a>
          <a className="nav-cta" href="#acompanhe">Acompanhe</a>
        </nav>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Um novo ritual está sendo criado</p>
          <h1>O futuro do café, servido com <em>precisão.</em></h1>
          <p className="hero-text">
            Uma cafeteria autônoma que une café, robótica e inteligência para transformar cada pedido em uma experiência memorável.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#conceito">Conheça a visão <Arrow /></a>
            <a className="button secondary" href="#acompanhe">Acompanhe o projeto</a>
          </div>
          <p className="microcopy">Em desenvolvimento • Brasil</p>
        </div>
        <RobotIllustration />
      </section>

      <section className="manifesto" id="conceito">
        <div className="shell manifesto-grid">
          <p className="section-label">01 — O conceito</p>
          <div>
            <h2>Menos espera.<br />Mais experiência.</h2>
            <p>
              A Jeff&apos;s Coffee nasce de uma pergunta simples: e se tecnologia e café pudessem compartilhar o mesmo balcão? Estamos construindo uma operação em que cada movimento é pensado para ser preciso, consistente e surpreendente.
            </p>
          </div>
        </div>
      </section>

      <section className="experience shell" id="experiencia">
        <div className="section-heading">
          <p className="section-label">02 — A experiência</p>
          <h2>Simples do início ao último gole.</h2>
        </div>
        <div className="steps">
          <article>
            <span className="step-number">01</span>
            <div className="step-icon tap-icon"><i /><i /><i /></div>
            <h3>Escolha</h3>
            <p>Faça seu pedido de forma intuitiva e acompanhe cada etapa.</p>
          </article>
          <article>
            <span className="step-number">02</span>
            <div className="step-icon motion-icon"><i /><i /></div>
            <h3>Observe</h3>
            <p>Veja a robótica transformar ingredientes em um café feito para você.</p>
          </article>
          <article>
            <span className="step-number">03</span>
            <div className="step-icon cup-icon"><i /></div>
            <h3>Aproveite</h3>
            <p>Receba sua bebida com consistência, cuidado e um toque de futuro.</p>
          </article>
        </div>
      </section>

      <section className="closing" id="acompanhe">
        <div className="shell closing-inner">
          <div>
            <p className="section-label light">03 — Próximos passos</p>
            <h2>Estamos preparando<br />algo <em>especial.</em></h2>
          </div>
          <div className="closing-copy">
            <p>
              A Jeff&apos;s Coffee ainda está na bancada: projetando, testando e aprendendo. Este é só o começo.
            </p>
            <a href="mailto:hello@jeffscoffee.com" className="text-link">Fale com o projeto <Arrow /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-mark"><Bean /></span>
            <span>Jeff&apos;s Coffee</span>
          </a>
          <p>Café. Robótica. Possibilidades.</p>
          <p>© {new Date().getFullYear()} Jeff&apos;s Coffee</p>
        </div>
      </footer>
    </main>
  );
}
