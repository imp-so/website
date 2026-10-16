import { Corners, ImpMark } from "./components/ImpMark.tsx";
import {
  access,
  accessEmail,
  accessMailto,
  codeFile,
  codeText,
  contactEmail,
  durable,
  hero,
  lifecycleTitle,
  phases,
  sdlcTitle,
  site,
  stages,
} from "./content.ts";

function Eyebrow({ children, heading }: { children: string; heading?: boolean }) {
  const Tag = heading ? "h2" : "span";
  return (
    <>
      <Tag className="eyebrow">{children}</Tag>
      <div className="rule" />
    </>
  );
}

export default function App() {
  return (
    <>
      <nav className="nav site-nav">
        <a href="/" className="nav-brand brand">
          <span className="brand-mark">
            <ImpMark size={26} />
          </span>
          {site.name}
        </a>
        <a href="#lifecycle">Lifecycle</a>
        <a href="#sdlc">SDLC</a>
        <a href="#durable">Workflows</a>
        <a href="#access" className="btn btn-primary on-accent">
          Get early access
        </a>
      </nav>

      <main className="wrap">
        <section className="hero">
          <div className="hero-fig">
            <ImpMark size={96} />
            <span className="hero-fig-caption">Fig. 1 · one imp</span>
          </div>
          <h1 className="display">
            <span>{hero.title}</span>
            <span className="accent">{hero.accent}</span>
          </h1>
          <p className="lede">{hero.lede}</p>
          <div className="actions">
            <a href="#access" className="btn btn-primary blueprint on-accent">
              <Corners />
              Get early access
            </a>
            <a href="#durable" className="btn btn-ghost">
              Read the workflow
            </a>
          </div>
        </section>

        <section id="lifecycle" className="section">
          <div className="blueprint">
            <Corners />
            <div className="sheet-head">
              <h2 className="sheet-title">{lifecycleTitle}</h2>
              <span className="sheet-meta">IMP-01</span>
              <span className="sheet-meta">Sheet 01 of 03</span>
            </div>
            <div className="grid-4 grid-4-tight">
              {phases.map((p) => (
                <div key={p.num} className="phase">
                  <span className="phase-num">{p.num}</span>
                  <h3 className="phase-name">{p.name}</h3>
                  <p className="muted phase-body">{p.body}</p>
                  <span className="tag tag-outline phase-tag">{p.keeps}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sdlc" className="section">
          <Eyebrow heading>{`02 · ${sdlcTitle}`}</Eyebrow>
          <div className="grid-4 grid-4-gap">
            {stages.map((s) => (
              <div key={s.name} className="blueprint stage">
                <Corners />
                <h3 className="stage-name">{s.name}</h3>
                <p className="muted">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="durable" className="durable">
          <div>
            <Eyebrow>03 · Durable by default</Eyebrow>
            <h2 className="heading">{durable.title}</h2>
            <p className="muted durable-body">{durable.body}</p>
          </div>
          <figure className="blueprint code-figure">
            <Corners />
            <div className="code-head">
              <span>{codeFile}</span>
              <span className="tag tag-accent">Early prototype</span>
            </div>
            <pre className="code">{codeText}</pre>
          </figure>
        </section>

        <section id="access" className="section access">
          <Eyebrow>04 · Early access</Eyebrow>
          <h2 className="heading">{access.title}</h2>
          <p className="muted access-body">{access.body}</p>
          <div className="actions access-actions">
            <a href={accessMailto} className="btn btn-primary blueprint on-accent">
              <Corners />
              Request access
            </a>
            <a href={accessMailto}>{accessEmail}</a>
          </div>
        </section>

        <footer className="footer">
          <span>
            {site.name} · {site.tagline.toLowerCase()}
          </span>
          <span>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a> · © 2026
          </span>
        </footer>
      </main>
    </>
  );
}
