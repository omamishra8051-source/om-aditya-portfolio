// Style system: Luminous Systems Studio — asymmetric workbench layout, technical annotations, light surfaces, and restrained signal color.
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const projects = [
  {
    id: "omnisupply",
    number: "01",
    kind: "AI / DATA",
    title: "OmniSupply",
    subtitle: "Multi-agent supply chain intelligence platform",
    description:
      "A production-ready intelligence layer that turns 416K+ supply-chain, sales, and finance records into risk signals, KPI narratives, and executive actions.",
    outcome: "5 domain agents · 416K+ records · containerized",
    trace: "PIPELINE TRACE / INGEST → RETRIEVE → REASON",
    tags: ["Python", "LangGraph", "PostgreSQL", "ChromaDB", "Docker"],
    icon: Database,
    visual: "/manus-storage/om-ai-supply-visual_0ffcbc97.png",
    accent: "mint",
    github: "https://github.com/omamishra8051-source/OmniSupply-AI",
  },
  {
    id: "pentest",
    number: "03",
    kind: "SECURITY / MCP",
    title: "PenTest MCP",
    subtitle: "AI-powered vulnerability scanning server",
    description:
      "An MCP server that gives AI agents an authorized, consent-gated interface to 30+ security and analysis tools, with automated OWASP mapping and report generation.",
    outcome: "30+ tools · configurable scan modes · AI reports",
    trace: "BOUNDARY TRACE / DISCOVER → SCORE → REPORT",
    tags: ["Python", "MCP", "Groq Llama", "OWASP", "Docker"],
    icon: ShieldCheck,
    visual: "/manus-storage/om-security-visual_bccfef5d.png",
    accent: "cobalt",
    github: "https://github.com/omamishra8051-source/PenTest-MCP",
  },
  {
    id: "dwpt",
    number: "04",
    kind: "FULL-STACK / REAL-TIME",
    title: "DWPT Agentic Platform",
    subtitle: "EV dynamic power transfer ecosystem",
    description:
      "A modular EV fleet simulation platform with FastAPI services, an AI decision engine, and a real-time React interface connected over WebSockets.",
    outcome: "REST APIs · live telemetry · Docker services",
    trace: "SIGNAL TRACE / STREAM → SIMULATE → DECIDE",
    tags: ["React", "TypeScript", "FastAPI", "WebSockets", "Python"],
    icon: Network,
    visual: "/manus-storage/om-hero-systems_fa89acb1.png",
    accent: "graphite",
    github: "https://github.com/omamishra8051-source/dwpt_agentic_platform",
  },
  {
    id: "edge",
    number: "05",
    kind: "BLOCKCHAIN / SYSTEMS",
    title: "Edge Compute Marketplace",
    subtitle: "Trust-minimized distributed computation",
    description:
      "A decentralized Ethereum marketplace where worker nodes execute rewarded tasks through escrow, staking, reputation, BFT consensus, and dispute resolution.",
    outcome: "Sepolia deployed · Solidity contracts · BFT rounds",
    trace: "CONSENSUS TRACE / STAKE → EXECUTE → RESOLVE",
    tags: ["Solidity", "Hardhat", "Ethereum", "Node.js", "SQLite"],
    icon: Code2,
    visual: "/manus-storage/om-hero-systems_fa89acb1.png",
    accent: "cobalt",
    github: "https://github.com/omamishra8051-source/Decentralized-edge-compute-marketplace-on-Ethereum-with-BFT-consensus-staking-and-dispute-resolution",
    },
  {
    id: "network-behavior",
    number: "06",
    kind: "SECURITY / ML",
    title: "Network Behavior Intelligence",
    subtitle: "Real-time network anomaly analysis system",
    description:
      "A behavioral analytics system that turns live packet telemetry into interpretable security signals using sliding-window metrics, entropy analysis, autoencoder-based anomaly detection, and contextual verification.",
    outcome: "TShark capture · autoencoder · explainable dashboard",
    trace: "BEHAVIOR TRACE / CAPTURE → LEARN → EXPLAIN",
    tags: ["Python", "TShark", "Autoencoder", "FastAPI", "TypeScript"],
    icon: Network,
    visual: "/manus-storage/om-security-visual_bccfef5d.png",
    accent: "mint",
    github: "https://github.com/omamishra8051-source/Network-Behavior-Intelligence",
  },
  {
    id: "healthify",
    number: "07",
    kind: "FULL-STACK / HEALTH",
    title: "Healthify",
    subtitle: "Role-based hospital operations platform",
    description:
      "A centralized hospital-management system connecting patient registration, appointments, records, billing, prescriptions, and pharmacy workflows through role-scoped dashboards and layered service architecture.",
    outcome: "RBAC · relational workflows · Dockerized services",
    trace: "CARE TRACE / REGISTER → CONSULT → COORDINATE",
    tags: ["React", "Backend APIs", "RBAC", "SQL", "Docker"],
    icon: Code2,
    visual: "/manus-storage/om-hero-systems_fa89acb1.png",
    accent: "cobalt",
    github: "https://github.com/omamishra8051-source/Healthify",
  },
];
const skillGroups = [
  { label: "AI / ML", items: ["LangGraph", "LangChain", "PyTorch", "TensorFlow", "OpenCV", "LLMs", "FAISS", "ChromaDB"] },
  { label: "Backend & data", items: ["Python", "FastAPI", "Flask", "SQLAlchemy", "Pydantic", "PostgreSQL", "MongoDB", "REST APIs"] },
  { label: "Product surface", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "WebSockets", "Docker", "Linux", "Git"] },
  { label: "Security & systems", items: ["MCP", "OWASP", "Solidity", "Ethereum", "C++", "SQL", "Node.js", "GraphQL"] },
];

const navItems = ["work", "capabilities", "journey", "contact"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [menuOpen, setMenuOpen] = useState(false);
  const filters = ["ALL", "AI / DATA", "SECURITY / ML", "SECURITY / MCP", "FULL-STACK / REAL-TIME", "FULL-STACK / HEALTH", "BLOCKCHAIN / SYSTEMS"];
  const visibleProjects = useMemo(
    () => activeFilter === "ALL" ? projects : projects.filter((project) => project.kind === activeFilter),
    [activeFilter],
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="Back to top">
          <span className="brand-mark"><span>O</span><i /></span>
          <span className="brand-name">OM<span>ADITYA</span></span>
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <button key={item} onClick={() => scrollTo(item)}><span>0{index + 1}</span>{item}</button>
          ))}
        </nav>
        <div className="top-actions">
          <a href="https://github.com/omamishra8051-source" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href="mailto:omamishra8051@gmail.com" className="hire-link">LET'S TALK <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING ROLES <span className="eyebrow-line" /></div>
          <p className="hero-kicker">AI / ML ENGINEER <span>×</span> SECURITY BUILDER</p>
          <h1>Systems that<br /><em>learn</em> and ship.</h1>
          <p className="hero-intro">I build intelligent systems with strong foundations in <strong>machine learning</strong>, practical instincts for <strong>cybersecurity</strong>, and the full-stack range to take an idea from data to interface.</p>
          <div className="hero-ctas">
            <button className="button-primary" onClick={() => scrollTo("work")}>EXPLORE THE WORK <ArrowUpRight size={16} /></button>
            <a className="button-text" href="/manus-storage/OmAdityaMishra_SoftwareEngineer_4b4dd3c8.pdf">VIEW RESUME <ExternalLink size={15} /></a>
          </div>
          <div className="hero-meta"><span><MapPin size={14} /> BENGALURU, INDIA</span><span><Sparkles size={14} /> RVCE · CSE (CY)</span><span>7TH SEMESTER</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract system visualization">
          <img src="/manus-storage/om-hero-systems_fa89acb1.png" alt="Abstract visualization of connected AI systems" />
          <div className="hero-art-label label-a">SIGNAL / 01<br /><b>DATA → DECISION</b></div>
          <div className="hero-art-label label-b">STATUS<br /><b><span className="status-dot" /> BUILDING</b></div>
          <div className="hero-coordinates">12.9716° N<br />77.5946° E</div>
        </div>
        <div className="hero-side-note">/01<br />INTELLIGENT<br />SYSTEMS<br />FOR THE<br />REAL WORLD</div>
      </section>

      <section className="proof-strip" aria-label="Portfolio proof points">
        <div><span className="proof-number">416K+</span><span>records processed<br />in OmniSupply</span></div>
        <div><span className="proof-number">30+</span><span>security tools<br />through MCP</span></div>
        <div><span className="proof-number">5</span><span>specialized agents<br />in one workflow</span></div>
        <div><span className="proof-number">8.14</span><span>CGPA · RV College<br />of Engineering</span></div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-heading"><div><p className="section-index">02 / SELECTED WORK</p><h2>Built to make<br /><em>complexity useful.</em></h2></div><p className="section-summary">Four systems, four constraints: turning noisy data into decisions, exposing security signals, streaming live state, and making trust programmable.</p></div>
        <div className="filter-row" role="tablist" aria-label="Filter projects">
          {filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter active" : "filter"} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>{filter}</button>)}
        </div>
        <div className="project-list">
          {visibleProjects.map((project) => {
            const Icon = project.icon;
            return <article className={`project-card accent-${project.accent}`} key={project.id}>
              <div className="project-topline"><span>{project.number} / {project.kind}</span><a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><Github size={16} /> SOURCE <ArrowUpRight size={14} /></a></div>
              <div className="project-grid">
                <div className="project-info"><div className="project-icon"><Icon size={19} /></div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><div className="project-outcome"><Check size={14} /> {project.outcome}</div><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <div className="project-visual"><img src={project.visual} alt="" /><div className="visual-caption"><b>{project.trace}</b><br /><span>TRACEABLE · MODULAR · SHIPPED</span></div></div>
              </div>
            </article>;
          })}
        </div>
      </section>

      <section id="capabilities" className="section capabilities-section">
        <div className="section-heading"><div><p className="section-index">03 / CAPABILITIES</p><h2>The range to<br /><em>connect the dots.</em></h2></div><p className="section-summary">I move comfortably between model behavior, backend architecture, security constraints, and the product surface people actually use.</p></div>
        <div className="capability-grid">{skillGroups.map((group, index) => <div className="capability-card" key={group.label}><span className="capability-index">0{index + 1}</span><h3>{group.label}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <section id="journey" className="section journey-section">
        <div className="section-heading"><div><p className="section-index">04 / JOURNEY</p><h2>Proof beyond<br /><em>the repository.</em></h2></div><p className="section-summary">Curiosity becomes useful when it is tested in public: on teams, under time pressure, and through real technical writing.</p></div>
        <div className="journey-layout"><div className="timeline"><div className="timeline-item active"><span className="timeline-date">AUG 2026 — PRESENT</span><h3>Backend Intern · AriseAll / Khare Classes</h3><p>Building technical product features for an education platform, including an AI-powered handwritten assignment grading pipeline across image preprocessing, handwriting OCR, LLM-based solution analysis, asynchronous document processing, error annotation, and corrected-image delivery.</p></div><div className="timeline-item"><span className="timeline-date">2023 — 2027</span><h3>B.E. Computer Science Engineering · RVCE</h3><p>Seventh-semester CSE (Cybersecurity) student with coursework across distributed systems, machine learning, decision modeling, and DBMS.</p></div></div><div className="recognition-panel"><p className="section-index">RECOGNITION / SELECTED</p><div className="recognition-row"><span>01</span><strong>1st Place</strong><p>Cepheus Hackathon<br /><small>24-hour AI track · GDG on Campus</small></p></div><div className="recognition-row"><span>02</span><strong>2nd Runner-Up</strong><p>Business Marathon<br /><small>E-Cell, RVCE</small></p></div><div className="recognition-row"><span>03</span><strong>Published</strong><p>Technical papers<br /><small>AI, data science & intelligent systems</small></p></div><div className="certifications"><span>NPTEL / Decision Modeling</span><span>NPTEL / Data Science for Engineers</span><span>Google / AI Essentials</span></div></div></div>
      </section>

      <section id="contact" className="contact-section"><div className="contact-inner"><p className="section-index">05 / CONTACT</p><h2>Have a hard problem<br /><em>worth building?</em></h2><p>I'm looking for software engineering opportunities where AI, systems thinking, and responsible execution matter.</p><a className="button-primary" href="mailto:omamishra8051@gmail.com">START A CONVERSATION <Mail size={16} /></a><div className="contact-links"><a href="mailto:omamishra8051@gmail.com"><Mail size={15} /> omamishra8051@gmail.com</a><a href="tel:+916390159896"><Terminal size={15} /> +91 63901 59896</a><a href="https://github.com/omamishra8051-source" target="_blank" rel="noreferrer"><Github size={15} /> github.com/omamishra8051-source</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a></div></div><div className="contact-mark"><div className="contact-monogram"><span>O</span><i /><b>M</b></div><small>BUILD / LEARN / SHIP</small></div></section>
      <footer><span>© 2026 OM ADITYA MISHRA</span><span>AI / ML · SECURITY · FULL-STACK</span><button onClick={() => scrollTo("top")} aria-label="Back to top"><ChevronDown size={15} className="rotate-up" /> BACK TO TOP</button></footer>
    </main>
  );
}
