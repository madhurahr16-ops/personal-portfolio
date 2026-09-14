import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Terminal, Cpu, Database, Cloud, Mail, Phone, MapPin, 
  X, CheckCircle, ChevronRight, Activity, Layers, Award, Code2
} from 'lucide-react';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [copyStatus, setCopyStatus] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const formRef = useRef();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("madhurahr16@gmail.com");
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2500);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      formRef.current.reset();
      setTimeout(() => setFormStatus(''), 4000);
    }, 800);
  };

  const projects = [
    {
      id: 'adk-agent',
      title: "AI & LLM-Powered Employee Analytics System",
      subtitle: "Autonomous Agentic Data Automation with Google ADK",
      badge: "Google ADK & Gemini LLM",
      latency: "<250ms",
      impact: "100% Data Integrity",
      stack: ["Python", "Google ADK", "Gemini LLM", "FastAPI", "PostgreSQL", "Redis", "Pandas"],
      description: "Developed an autonomous agentic data automation platform leveraging Google Agent Development Kit (ADK), Python, and Gemini LLM to parse and extract insights from enterprise Excel/CSV datasets.",
      deepDive: [
        "Autonomous Agent Architecture: Engineered stateful multi-step reasoning using Google ADK and Gemini LLM for automated table transformations.",
        "Low-Latency Vector & Semantic Caching: Integrated Redis in-memory caching to drop round-trip execution latency from 2+ seconds to sub-250ms.",
        "Strict Pre-Insert Validation: Embedded deterministic checks via Pandas and OpenPyXL, eliminating generative calculation hallucinations.",
        "Asynchronous Ingestion APIs: Built robust FastAPI endpoints backed by PostgreSQL to process concurrent enterprise spreadsheet uploads."
      ]
    },
    {
      id: 'thyroid-cnn',
      title: "Thyroid Nodule Clinical Diagnostic Engine",
      subtitle: "Multimodal Deep Learning & Computer Vision Microservice",
      badge: "PyTorch & CNNs",
      latency: "Sub-second",
      impact: "94% Accuracy",
      stack: ["Python", "PyTorch", "CNNs", "FastAPI", "Docker", "TI-RADS", "OpenCV"],
      description: "Engineered a deep learning medical imaging and classification system utilizing Convolutional Neural Networks (CNNs), PyTorch, and Python to replace manual diagnosis according to TI-RADS clinical criteria.",
      deepDive: [
        "Advanced Preprocessing Pipeline: Designed adaptive contrast filters, noise suppression, and spatial normalization for ultrasound arrays.",
        "High-Precision Clinical Classification: Fine-tuned multi-tier CNN architectures reaching verified 94% validation accuracy with comprehensive F1-score tracking.",
        "Containerized Async Inference: Deployed a containerized FastAPI microservice wrapped in Docker to serve predictions with sub-second response times.",
        "Healthcare Regulatory Compliance: Implemented automated confidence thresholds and audit logs ensuring diagnostic safety standards."
      ]
    },
    {
      id: 'softflix-engine',
      title: "Enterprise GenAI Microservice Architecture",
      subtitle: "Softflix AI Developer Internship Core Platform",
      badge: "FastAPI & RAG",
      latency: "Sub-300ms",
      impact: "45% Faster Turnaround",
      stack: ["FastAPI", "PostgreSQL", "LangGraph", "Docker", "AWS EC2/S3", "GitHub Actions"],
      description: "Engineered a full-stack GenAI architecture and low-latency backend microservices utilizing Python, FastAPI, and PostgreSQL to host enterprise data automation tools with 99.9% uptime.",
      deepDive: [
        "RAG Pipeline Engineering: Built dynamic multi-agent prompt pipelines, cutting model hallucination rates by 35% through evaluation metrics.",
        "Zero-Downtime CI/CD: Linked Jira issues to GitHub Actions, shortening release cycles from 48 hours to under 6 hours.",
        "Cloud Observability & Scale: Deployed on AWS (EC2, S3) with Docker containerization, reducing cloud infrastructure overhead by 25%."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#080B10] text-[#E2E8F0] relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[20%] w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#080B10]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1px]">
              <div className="w-full h-full bg-[#080B10] rounded-[11px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-bold tracking-wider text-white text-lg block">MADHURA H R</span>
              <span className="font-mono text-xs text-cyan-400">AI FULL STACK DEVELOPER</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Overview</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Architectures</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skill Matrix</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20"
          >
            Initiate Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="about" className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          AVAILABLE FOR AI FULL-STACK & BACKEND ROLES
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
          Architecting <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Autonomous AI Systems</span> & Distributed Backends.
        </h1>

        <p className="max-w-3xl text-lg sm:text-xl text-slate-400 leading-relaxed mb-12">
          AI Full Stack Developer specialized in engineering production LLM applications, agentic state machines (Google ADK, LangGraph), and low-latency Python/FastAPI microservices. Delivering sub-300ms vector search latencies and 99.9% uptime cloud architectures.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Vector Latency", val: "<250ms", sub: "Redis cached retrieval" },
            { label: "Clinical Model", val: "94%", sub: "CNN Nodule Accuracy" },
            { label: "Hallucination Cut", val: "35%", sub: "Prompt & RAG Tuning" },
            { label: "Cloud Uptime", val: "99.9%", sub: "Docker on AWS Infrastructure" }
          ].map((stat, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl">
              <div className="font-mono text-xs text-cyan-400 mb-1">{stat.label}</div>
              <div className="text-3xl font-extrabold text-white mb-1">{stat.val}</div>
              <div className="text-xs text-slate-400">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <button 
            onClick={handleCopyEmail}
            className="px-6 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/50 flex items-center gap-2 text-sm font-semibold text-white transition-all"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            {copyStatus ? "Email Copied to Clipboard!" : "Copy Email"}
          </button>
          <a 
            href="https://linkedin.com/in/madhura-h-r-9815713a7" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/50 flex items-center gap-2 text-sm font-semibold text-white transition-all"
          >
            <svg className="w-4 h-4 text-cyan-400 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
            </svg>
            LinkedIn Profile
          </a>
          <a 
            href="https://github.com/madhurahr16-ops" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/50 flex items-center gap-2 text-sm font-semibold text-white transition-all"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            GitHub Repositories
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="mb-14">
          <div className="font-mono text-cyan-400 text-sm mb-2">// ARCHITECTURAL SHOWCASE</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Production AI Architectures</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item) => (
            <div 
              key={item.id} 
              className="glass-card rounded-2xl p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    {item.badge}
                  </span>
                  <span className="font-mono text-xs text-emerald-400 flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5" /> {item.latency}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">{item.subtitle}</p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.stack.map((tech, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-1 rounded bg-slate-800/80 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setActiveModal(item)}
                  className="w-full py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  Inspect System Specs <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="mb-14">
          <div className="font-mono text-cyan-400 text-sm mb-2">// TECHNICAL CORE</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Full-Stack AI Capabilities</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl">
            <Cpu className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-3">AI & Agentic Systems</h3>
            <ul className="text-sm text-slate-400 space-y-2 font-mono">
              <li>• Google ADK</li>
              <li>• Gemini LLM & Groq</li>
              <li>• LangGraph State Machines</li>
              <li>• Production RAG Pipelines</li>
              <li>• Prompt Engineering</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <Layers className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-3">Backend Microservices</h3>
            <ul className="text-sm text-slate-400 space-y-2 font-mono">
              <li>• Python (FastAPI, Django)</li>
              <li>• Asynchronous I/O (asyncio)</li>
              <li>• REST & WebSocket APIs</li>
              <li>• Microservices Design</li>
              <li>• Celery / Redis Queues</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <Database className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-3">Databases & Caching</h3>
            <ul className="text-sm text-slate-400 space-y-2 font-mono">
              <li>• PostgreSQL & Indexing</li>
              <li>• Redis (Sub-250ms Cache)</li>
              <li>• ChromaDB / Pinecone</li>
              <li>• SQLAlchemy ORM</li>
              <li>• ACID Transactions</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <Cloud className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-3">Cloud, DevOps & ML</h3>
            <ul className="text-sm text-slate-400 space-y-2 font-mono">
              <li>• AWS (EC2, S3, ALB)</li>
              <li>• Docker Containers</li>
              <li>• GitHub Actions CI/CD</li>
              <li>• PyTorch & CNN Vision</li>
              <li>• AI Observability & Drift</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="font-mono text-cyan-400 text-sm mb-2">// PROFESSIONAL HISTORY</div>
            <h2 className="text-3xl font-bold text-white mb-8">Work Experience</h2>

            <div className="glass-card p-7 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Full Stack AI Developer Intern</h3>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-400">Jan 2026 – Present</span>
              </div>
              <div className="text-sm font-semibold text-emerald-400 mb-4">Softflix • Mysore, India</div>
              
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  Engineered full-stack GenAI architectures using FastAPI, Python, and PostgreSQL, driving a 45% reduction in report generation time.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  Architected production RAG workflows and dynamic multi-agent prompt pipelines, cutting hallucination rates by 35%.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  Built CI/CD pipelines via GitHub Actions and Docker, reducing release deployment cycles from 48 hours to under 6 hours.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  Managed scalable AWS container infrastructure, maintaining 99.9% uptime while slashing cloud costs by 25%.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="font-mono text-cyan-400 text-sm mb-2">// CREDENTIALS</div>
            <h2 className="text-3xl font-bold text-white mb-8">Certifications & Education</h2>

            <div className="space-y-4">
              <div className="glass-card p-5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="font-semibold text-white text-sm">AWS Certified AI Practitioner</div>
                    <div className="text-xs text-slate-400">Amazon Web Services / Pearson (2025)</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400">VERIFIED</span>
              </div>

              <div className="glass-card p-5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="font-semibold text-white text-sm">Google Cloud Software Engineering</div>
                    <div className="text-xs text-slate-400">Google Cloud (2025)</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400">VERIFIED</span>
              </div>

              <div className="glass-card p-5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="font-semibold text-white text-sm">AWS Machine Learning Plan</div>
                    <div className="text-xs text-slate-400">Amazon Web Services (2025)</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400">VERIFIED</span>
              </div>

              <div className="glass-card p-5 rounded-xl">
                <div className="text-xs font-mono text-cyan-400 mb-1">2024 – 2026</div>
                <div className="font-bold text-white">MCA — Artificial Intelligence and Machine Learning</div>
                <div className="text-xs text-slate-400">Maharaja Institute of Technology, VTU • Grade: 8.2/10</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-cyan-500/20 shadow-2xl shadow-cyan-950/40">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Let's Build Intelligent Systems.</h2>
            <p className="text-slate-400 text-sm">Available for high-impact AI full-stack engineering roles and strategic consulting engagements.</p>
          </div>

          <form ref={formRef} onSubmit={handleSendEmail} className="space-y-5 max-w-xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">FULL NAME</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  placeholder="e.g. Alex Hunter"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  placeholder="alex@enterprise.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-2">PROJECT ARCHITECTURE & SPECIFICATIONS</label>
              <textarea 
                name="message"
                required
                rows={4}
                placeholder="Describe your technical needs, role scope, or project timeline..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={formStatus === 'sending'}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20"
            >
              {formStatus === 'sending' ? 'Transmitting Data...' : formStatus === 'success' ? 'Transmission Received!' : 'Dispatch Message'}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400" /> Mysore / Bengaluru, India</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-400" /> +91 8618385696</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-cyan-400" /> madhurahr16@gmail.com</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-xs font-mono text-slate-400">
        © 2026 Madhura H R. Engineered with React, Vite & Open Sans. All rights reserved.
      </footer>

      {/* Architecture Spec Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-card max-w-2xl w-full rounded-2xl p-8 border border-cyan-500/40 relative shadow-2xl">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-2">
              System Architecture Deep-Dive
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">{activeModal.title}</h3>
            <p className="text-xs font-mono text-slate-400 mb-6">{activeModal.subtitle}</p>

            <div className="space-y-4 mb-6">
              {activeModal.deepDive.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {activeModal.stack.map((s, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-cyan-300">
                    {s}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 text-xs font-semibold"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}