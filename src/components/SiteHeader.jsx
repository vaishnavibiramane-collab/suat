import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { HELPLINE, HELPLINE_TEL, GENERAL_EMAIL } from "../data/exams";

export default function SiteHeader({ view, verified, go }) {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    verified
      ? { id: "apply", label: "Application form" }
      : { id: "home", label: "Apply" },
    { id: "guide", label: "Exam guide" },
  ];

  const pick = (id) => {
    setOpen(false);
    go(id);
  };

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>Admissions 2027–28 · Sandip University, Nashik</span>
          <span className="topbar-contact">
            <a href={`tel:${HELPLINE_TEL}`}>{HELPLINE}</a>
            <a href={`mailto:${GENERAL_EMAIL}`}>{GENERAL_EMAIL}</a>
          </span>
        </div>
      </div>

      <header className={`site-header ${stuck ? "is-stuck" : ""}`}>
        <div className="wrap header-in">
          <a
            className="brand"
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              pick(verified ? "apply" : "home");
            }}
          >
            <span className="brand-mark">SU</span>
            <span className="brand-text">
              <strong>Sandip University</strong>
              <em>Aptitude Test · SUAT 2027</em>
            </span>
          </a>

          <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main">
            {items.map((i) => (
              <a
                key={i.id}
                href={`#/${i.id}`}
                className={view === i.id ? "on" : ""}
                aria-current={view === i.id ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  pick(i.id);
                }}
              >
                {i.label}
              </a>
            ))}
            {verified && <span className="verified-pill">Mobile verified</span>}
          </nav>

          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}
