// Single source of truth for everything the public pages say about the three tests.
// Dates are ISO (local time) so the UI can work out "days left" itself.

export const HELPLINE = "+91 95454 53092";
export const HELPLINE_TEL = "+919545453092";
export const GENERAL_EMAIL = "suat@sandipuniversity.edu.in";

export const EXAMS = {
  "SU-DAT": {
    code: "SU-DAT",
    slug: "design",
    field: "Design",
    school: "School of Design",
    schoolShort: "SOD",
    seats: 120,
    marks: 100,
    fee: "₹1,000",
    feeNote: "",
    email: "sudat@sandipuniversity.edu.in",
    mode: "Online aptitude test + offline portfolio review",
    blurb:
      "A short online aptitude test, followed by an in-person portfolio review on campus.",
    dates: {
      open: "2026-10-10",
      last: "2027-02-04",
      admit: "2027-02-05",
      exam: "2027-02-06",
    },
    rounds: [
      {
        name: "Round 1 · Online aptitude test",
        marks: 40,
        detail:
          "25 questions in 2 hours covering lateral and logical thinking, numerical skills, comprehension, general knowledge and perceptual skills.",
        when: "6 Feb 2027",
      },
      {
        name: "Round 2 · Portfolio evaluation",
        marks: 60,
        detail: "Reviewed in person on campus.",
        when: "April 2027",
      },
    ],
    eligibility: [
      [
        "Academic qualification",
        "10+2 passed or appearing in any stream, or a 3-year diploma (equivalent to 10+2) with at least 45% aggregate.",
      ],
      [
        "Entrance score",
        "You must appear in SU-DAT or another national-level design entrance such as NIFT or NID.",
      ],
    ],
    syllabus: {
      title: "Round 1 paper",
      columns: ["Topic", "Questions", "Marks"],
      rows: [
        ["Lateral thinking", "5", "10"],
        ["Logical thinking", "5", "10"],
        ["Numerical skills", "5", "5"],
        ["Comprehension ability", "1", "5"],
        ["General knowledge", "5", "5"],
        ["Perceptual skills", "4", "5"],
      ],
      total: ["Total", "25", "40"],
      extraTitle: "What the portfolio round looks at",
      extra: [
        "Originality and uniqueness",
        "Sense of composition",
        "2D / 3D concept conversion",
        "Presentation and layout",
        "Idea development",
        "Illustration and rendering",
        "Sketching ability",
        "Material experimentation",
      ],
    },
    programmes: [
      ["B.Des Fashion & Lifestyle", "30 seats"],
      ["B.Des Space & Interior", "30 seats"],
      ["B.Des Communication", "30 seats"],
      ["B.Des Product Design", "30 seats"],
    ],
  },

  "SU-LAT": {
    code: "SU-LAT",
    slug: "law",
    field: "Law",
    school: "School of Law",
    schoolShort: "SOL",
    seats: 180,
    marks: 100,
    fee: "₹500",
    feeNote: "",
    email: "sulat@sandipuniversity.edu.in",
    mode: "Online test, 2 hours",
    blurb:
      "One two-hour online paper on English, legal aptitude, current affairs and the Constitution.",
    dates: {
      open: "2026-10-10",
      last: "2027-02-11",
      admit: "2027-02-12",
      exam: "2027-02-13",
    },
    rounds: [
      {
        name: "Online entrance test",
        marks: 100,
        detail:
          "Two hours, held across India. English, legal aptitude and reasoning, current affairs and GK, and the Constitution of India.",
        when: "13 Feb 2027",
      },
    ],
    eligibility: [
      [
        "BA LLB / BBA LLB (5 years)",
        "10+2 or equivalent in any discipline from a recognised board or university.",
      ],
      [
        "LLB (3 years)",
        "A bachelor's degree of at least 3 years in any discipline from a recognised university.",
      ],
      [
        "Minimum marks",
        "General (open) 45%, OBC 42%, SC/ST 40%.",
      ],
      [
        "Entrance score",
        "You must appear in SU-LAT or a national entrance such as CLAT.",
      ],
    ],
    syllabus: {
      title: "What the paper covers",
      columns: ["Section", "Topics"],
      rows: [
        [
          "English language",
          "Prepositions, articles, common errors, one-word substitution, synonyms, antonyms, comprehension",
        ],
        [
          "Legal aptitude and reasoning",
          "Legal awareness, legal reasoning, legal terms and maxims, statement, assumption, analogy",
        ],
        [
          "Current affairs and GK",
          "History, geography, sports, economics, Indian culture (dance and music)",
        ],
        [
          "Constitution of India",
          "Characteristics of the Constitution, fundamental rights, directive principles, the President, Supreme Court, High Court",
        ],
      ],
      total: ["Total", "100 marks, all sections combined"],
    },
    programmes: [
      ["BA LLB (Hons)", "5-year integrated"],
      ["BBA LLB (Hons)", "5-year integrated business law"],
      ["LLB", "3 years, after graduation"],
    ],
    footnote:
      "BCI-recognised. The curriculum follows Bar Council of India standards and includes moot court practicals.",
  },

  "SU-MAT": {
    code: "SU-MAT",
    slug: "management",
    field: "Management",
    school: "School of Commerce & Management Studies",
    schoolShort: "SOCMS",
    seats: 240,
    marks: 150,
    fee: "₹500 – ₹1,000",
    feeNote: "₹1,000 for the New Age MBA programmes, ₹500 for regular MBA.",
    email: "sumat@sandipuniversity.edu.in",
    mode: "Online test + personal interview",
    blurb:
      "An online test on GK, English and aptitude, then a personal interview within ten days.",
    dates: {
      open: "2026-10-10",
      last: "2027-01-28",
      admit: "2027-01-29",
      exam: "2027-01-30",
    },
    rounds: [
      {
        name: "Phase 1 · Online entrance test",
        marks: 100,
        detail: "Two hours: general knowledge, English and aptitude.",
        when: "30 Jan 2027",
      },
      {
        name: "Phase 2 · Personal interview",
        marks: 50,
        detail: "Online or offline, within 10 days of the exam.",
        when: "Early Feb 2027",
      },
    ],
    eligibility: [
      [
        "Qualifying degree",
        "A bachelor's degree of at least 3 years in any discipline.",
      ],
      [
        "Minimum marks",
        "50% in the qualifying exam (45% for reserved categories).",
      ],
      [
        "Entrance score",
        "You must appear in SU-MAT or a national exam such as CAT, MAT, XAT or CMAT.",
      ],
    ],
    syllabus: {
      title: "Phase 1 paper",
      columns: ["Section", "What is tested"],
      rows: [
        ["General knowledge", "Current affairs, the business world and the economy"],
        ["English", "Grammatical accuracy and reading comprehension"],
        ["Aptitude test", "Quantitative reasoning and logical problem solving"],
      ],
      total: ["Total", "100 marks"],
      extraTitle: "What the interview looks at",
      extra: [
        "Candidate aptitude",
        "Communication skills",
        "Confidence level",
        "Decision-making ability",
        "Academic background",
        "Awareness of current trends",
      ],
    },
    programmes: [
      ["New Age MBA (Business Analytics)", "Data-driven management"],
      ["New Age MBA (Banking & Financial Services)", "Fintech and banking operations"],
      [
        "Regular MBA",
        "Marketing, Finance, HR, International Business, Digital Marketing",
      ],
    ],
  },
};

export const EXAM_LIST = Object.values(EXAMS);
export const bySlug = (slug) => EXAM_LIST.find((e) => e.slug === slug);

export const PROCTORING = [
  "Your face is tracked for the whole test",
  "Your identity is matched against your registration",
  "Objects and extra people in frame are flagged",
  "Background noise is monitored",
];

export const FAQ = [
  {
    q: "Which test do I take?",
    a: "It depends on the school you want. SU-DAT is for Design, SU-LAT for Law and SU-MAT for Management. If you are still deciding, the finder above shows seats, dates and fees side by side.",
  },
  {
    q: "Is the application fee refundable?",
    a: "No. Once paid, the fee is not refunded, so check your details on the form before you pay.",
  },
  {
    q: "What do I need for the online test?",
    a: "The test is AI-proctored: your face and surroundings are monitored through the camera and microphone. Use a laptop or desktop with a working camera, a steady connection and a quiet room.",
  },
  {
    q: "What happens if I'm caught using unfair means?",
    a: "Anything the proctoring system flags during the test can lead to immediate disqualification.",
  },
  {
    q: "When do I get my admit card?",
    a: "The day after applications close. Each test has its own date, listed on the timeline above.",
  },
  {
    q: "I didn't get my OTP.",
    a: "Check that the mobile number is right, wait for the resend timer to finish and try again. If it still doesn't arrive, call the helpline.",
  },
];

/* ---------- date helpers ---------- */

export const parseDay = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export const daysUntil = (iso, now = new Date()) => {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((parseDay(iso) - today) / 86400000);
};

export const fmtDate = (iso, opts) =>
  parseDay(iso).toLocaleDateString(
    "en-IN",
    opts || { day: "numeric", month: "short", year: "numeric" }
  );

export const MILESTONES = EXAM_LIST.flatMap((e) => [
  { exam: e.code, slug: e.slug, field: e.field, label: "Applications open", date: e.dates.open },
  { exam: e.code, slug: e.slug, field: e.field, label: "Last date to apply", date: e.dates.last, deadline: true },
  { exam: e.code, slug: e.slug, field: e.field, label: "Admit card released", date: e.dates.admit },
  { exam: e.code, slug: e.slug, field: e.field, label: "Online test", date: e.dates.exam, big: true },
]).sort((a, b) => a.date.localeCompare(b.date));
