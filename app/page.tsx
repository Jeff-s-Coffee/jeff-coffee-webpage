import { SiteFooter, SiteHeader } from "./site-components";

const RobotIllustration = () => (
  <div
    className="robot-stage"
    aria-label="Ilustração abstrata de um braço robótico servindo café"
  >
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
    <main className="home-page">
      <SiteHeader />
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Um novo ritual está sendo criado</p>
          <h1>O futuro do café, servido com <em>precisão.</em></h1>
          <p className="hero-text">
            Uma cafeteria autônoma que une café, robótica e inteligência para transformar cada pedido em uma experiência memorável.
          </p>
          <p className="microcopy">Em desenvolvimento • Brasil</p>
        </div>
        <RobotIllustration />
      </section>
      <SiteFooter />
    </main>
  );
}
