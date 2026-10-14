import { useEffect, useState } from "react";
import {
  EXAM_LIST,
  PROCTORING,
  bySlug,
  daysUntil,
  fmtDate,
} from "../data/exams";

const SECTIONS = [
  ["dates", "Dates and fee"],
  ["selection", "How selection works"],
  ["eligibility", "Eligibility"],
  ["syllabus", "Syllabus"],
  ["programmes", "Programmes and seats"],
  ["proctoring", "Proctoring"],
];

export default function ExamGuide({ slug, onSlugChange }) {
  const exam = bySlug(slug) || EXAM_LIST[0];
  const [active, setActive] = useState("dates");

  /* highlight the section currently being read */
  useEffect(() => {
    const els = SECTIONS.map(([id]) => document.getElementById(`g-${id}`)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (vis) setActive(vis.target.id.replace("g-", ""));
      },
      { rootMargin: "-120px 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [exam.code]);

  const d = exam.dates;
  const left = daysUntil(d.last);
  const syl = exam.syllabus;

  return (
    <div className="wrap guide">
      <header className="guide-head">
        <p className="kicker">Exam guide</p>
        <h1>{exam.code}: {exam.field}</h1>
        <p className="lede">{exam.school} · {exam.seats} seats · {exam.marks} marks in total</p>

        <div className="chips" role="tablist" aria-label="Choose a test">
          {EXAM_LIST.map((e) => (
            <button
              key={e.code}
              role="tab"
              aria-selected={e.code === exam.code}
              className={e.code === exam.code ? "chip on" : "chip"}
              onClick={() => onSlugChange(e.slug)}
            >
              {e.code}
            </button>
          ))}
        </div>
      </header>

      <div className="guide-layout">
        <nav className="guide-toc" aria-label="On this page">
          <p>On this page</p>
          {SECTIONS.map(([id, label]) => (
            <a key={id} href={`#g-${id}`} className={active === id ? "on" : ""}
               onClick={(e) => { e.preventDefault(); document.getElementById(`g-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
              {label}
            </a>
          ))}
        </nav>

        <div className="guide-body" key={exam.code}>
          {/* DATES */}
          <section id="g-dates">
            <h2>Dates and fee</h2>
            <table className="tbl">
              <tbody>
                <tr><th>Applications open</th><td>{fmtDate(d.open)}</td></tr>
                <tr>
                  <th>Last date to apply</th>
                  <td>
                    {fmtDate(d.last)}
                    <span className={`tag ${left >= 0 && left < 21 ? "tag-hot" : ""}`}>
                      {left < 0 ? "closed" : `${left} days left`}
                    </span>
                  </td>
                </tr>
                <tr><th>Admit card</th><td>{fmtDate(d.admit)}</td></tr>
                <tr><th>Online test</th><td><strong>{fmtDate(d.exam)}</strong></td></tr>
                <tr>
                  <th>Application fee</th>
                  <td>
                    <strong>{exam.fee}</strong>
                    {exam.feeNote && <span className="muted"> — {exam.feeNote}</span>}
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="callout">
              The fee is non-refundable once paid. Check your details before you pay.
            </p>
          </section>

          {/* SELECTION */}
          <section id="g-selection">
            <h2>How selection works</h2>
            <ol className="steps">
              {exam.rounds.map((r) => (
                <li key={r.name}>
                  <div className="step-top">
                    <strong>{r.name}</strong>
                    <span>{r.marks} marks</span>
                  </div>
                  <p>{r.detail}</p>
                  <small>{r.when}</small>
                </li>
              ))}
            </ol>
          </section>

          {/* ELIGIBILITY */}
          <section id="g-eligibility">
            <h2>Eligibility</h2>
            <dl className="defs">
              {exam.eligibility.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* SYLLABUS */}
          <section id="g-syllabus">
            <h2>Syllabus</h2>
            <h3>{syl.title}</h3>
            <div className="tbl-scroll">
              <table className="tbl tbl-grid">
                <thead>
                  <tr>{syl.columns.map((c) => <th key={c}>{c}</th>)}</tr>
                </thead>
                <tbody>
                  {syl.rows.map((r) => (
                    <tr key={r[0]}>{r.map((c, i) => (i === 0 ? <th key={i}>{c}</th> : <td key={i}>{c}</td>))}</tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    {syl.total.map((c, i) => <td key={i} colSpan={i === syl.total.length - 1 && syl.total.length < syl.columns.length ? syl.columns.length - i : 1}>{c}</td>)}
                  </tr>
                </tfoot>
              </table>
            </div>

            {syl.extra && (
              <>
                <h3>{syl.extraTitle}</h3>
                <ul className="cols">
                  {syl.extra.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </>
            )}
          </section>

          {/* PROGRAMMES */}
          <section id="g-programmes">
            <h2>Programmes and seats</h2>
            <table className="tbl">
              <tbody>
                {exam.programmes.map(([a, b]) => (
                  <tr key={a}><th>{a}</th><td>{b}</td></tr>
                ))}
              </tbody>
            </table>
            {exam.footnote && <p className="muted">{exam.footnote}</p>}
          </section>

          {/* PROCTORING */}
          <section id="g-proctoring">
            <h2>Proctoring</h2>
            <p>The online test is monitored by AI proctoring for its full duration:</p>
            <ul className="plain">
              {PROCTORING.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <p className="callout callout-warn">
              Any unfair means picked up by the proctoring system can lead to immediate disqualification.
            </p>
          </section>

          <aside className="guide-help">
            <div>
              <strong>Questions about {exam.code}?</strong>
              <span>Write to {exam.email} or call the helpline.</span>
            </div>
            <a className="btn btn-ghost" href={`mailto:${exam.email}`}>Email {exam.field} helpdesk</a>
          </aside>
        </div>
      </div>
    </div>
  );
}
