import { Corners, ImpMark } from "./components/ImpMark.tsx";
import {
  accessEmail,
  accessMailto,
  codeFile,
  codeText,
  contactEmail,
  phases,
  stages,
} from "./content.ts";

function Eyebrow({ children }: { children: string }) {
  return (
    <>
      <span className="eyebrow">{children}</span>
      <div className="rule" />
    </>
  );
}

export default function App() {
  return (
    <>
      <nav className="nav site-nav">
        <span className="nav-brand brand">
          <span className="brand-mark">
            <ImpMark size={26} />
          </span>
          imp.so
        </span>
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
            <span>Put our imps to work.</span>
            <span className="accent">Ephemeral agents. Durable workflows.</span>
          </h1>
          <p className="lede">
            imp is an ephemeral agent framework for the software lifecycle. Each task summons a
            short-lived agent, an imp, inside a durable workflow. The imp does one job and exits.
            The workflow remembers everything, survives crashes and retries, and hands off to the
            next imp.
          </p>
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
              <span className="sheet-title">Life of an imp</span>
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
          <Eyebrow>02 · Across the SDLC</Eyebrow>
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
            <h2 className="heading">The imp is temporary. The work is not.</h2>
            <p className="muted durable-body">
              Write the lifecycle as ordinary code. Each step is checkpointed, so a failed test, a
              crashed worker or a human review that takes three days picks up exactly where it
              stopped. Imps never hold state between steps, so there is nothing to drift and nothing
              to clean up.
            </p>
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
          <h2 className="heading">Summon your first imp</h2>
          <p className="muted access-body">
            We are onboarding teams in small batches. Drop us a line and we will send the SDK and a
            workflow to start from.
          </p>
          <div className="actions access-actions">
            <a href={accessMailto} className="btn btn-primary blueprint on-accent">
              <Corners />
              Request access
            </a>
            <a href={accessMailto}>{accessEmail}</a>
          </div>
        </section>

        <footer className="footer">
          <span>imp.so · ephemeral agents on durable workflows</span>
          <span>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a> · © 2026
          </span>
        </footer>
      </main>
    </>
  );
}
