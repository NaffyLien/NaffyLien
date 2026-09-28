'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  ExternalLink,
  GitBranch,
  Globe2,
  MapPin,
  Menu,
  Terminal,
  X,
} from 'lucide-react'

const experience = [
  {
    period: '09.25 — 03.26',
    role: 'Stagiaire Développeur Full Stack',
    company: 'FiharySoft',
    location: 'Fianarantsoa',
    body: "Conception et développement de plateformes intégrées de gestion de formations avec NestJS, ElectronJS et Google Cloud Console. Développement de sites institutionnels, d'un portail étudiant sécurisé et d'une application desktop interne.",
    stack: ['NestJS', 'React', 'Next.js', 'GitHub', 'MongoDB'],
  },
  {
    period: '09.24 — 12.24',
    role: 'Stagiaire Administrateur Systèmes',
    company: 'Orange Madagascar',
    location: 'Antananarivo',
    body: "Automatisation du déploiement de machines virtuelles sur Proxmox via Ansible et MAAS. Configuration d'environnements isolés avec pfSense et approvisionnement des services applicatifs nécessaires aux cycles de développement.",
    stack: ['Ansible', 'Proxmox', 'MAAS', 'pfSense'],
  },
  {
    period: '02.24 — 04.24',
    role: 'Stagiaire Développeur Frontend',
    company: 'Fihary Soft',
    location: 'Fianarantsoa',
    body: "Édification d'une application web d'entraînement à la dactylographie interactive en HTML, CSS et JavaScript.",
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]

const projects = [
  {
    number: '01',
    title: 'Progressive Web App To-Do List',
    type: 'PERSONAL PROJECT',
    description: 'Une application CRUD React pensée pour rester utile, même hors connexion.',
    details: 'Création des tâches, modification, suppression et intégration des capacités PWA pour un fonctionnement offline.',
    stack: ['ReactJS', 'PWA'],
    link: 'https://naffylien.github.io/locomo-salt/',
  },
  {
    number: '02',
    title: 'Network school project, ENI',
    type: 'COLLECTIVE EXPERIMENT',
    description: 'Apprentissage pratique de Docker à travers une application web complète.',
    details: 'Conteneurisation React + Node/Express, segmentation WAN/DMZ/LAN, Docker Compose, WordPress/MySQL et stack ELK pour les logs.',
    stack: ['Docker', 'Compose', 'ELK', 'Networking'],
  },
]

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard?.writeText('andry.naffafy@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Retour en haut">
          <span className="wordmark-mark">AN<span>/</span></span>
          <span className="wordmark-name">ZORVELIEN</span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
          <a href="#about" onClick={closeMenu}>À propos</a>
          <a href="#work" onClick={closeMenu}>Expérience</a>
          <a href="#projects" onClick={closeMenu}>Projets</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="mailto:andry.naffafy@gmail.com">Me contacter <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Disponible pour de nouvelles opportunités</p>
            <h1>Je construis<br /><em>le solide.</em></h1>
            <p className="hero-intro">Software Engineer &amp; DevOps Engineer basé à Fianarantsoa, Madagascar. Je transforme des idées en systèmes fiables, du premier commit au déploiement.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Voir mes projets <ArrowUpRight size={17} /></a>
              <button className="button button-ghost" type="button" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Email copié' : 'Copier mon email'}</button>
            </div>
          </div>
          <div className="hero-aside">
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>about.ts</small></div>
              <pre><code><b>const</b> developer = {'{'}{`\n`}  name: <i>&quot;Andry&quot;</i>,{`\n`}  focus: [<i>&quot;software&quot;</i>,{`\n`}    <i>&quot;devops&quot;</i>],{`\n`}  location: <i>&quot;MG&quot;</i>,{`\n`}  status: <i>&quot;building&quot;</i>{`\n`}{'}'}</code></pre>
            </div>
            <div className="hero-index"><span>01 / 04</span><span className="index-line" /><span>INTRO</span></div>
          </div>
        </section>

        <section id="about" className="about section-wrap section-line">
          <div className="section-label"><span>01</span><span>À PROPOS</span></div>
          <div className="about-content">
            <h2>La curiosité<br />comme <em>moteur.</em></h2>
            <div className="about-text"><p>Je suis <strong>Andrianaivo Nafafisoaseheno Zorvelien</strong>, étudiant en ingénierie logicielle à l’ENI de Fianarantsoa. J’aime comprendre comment les choses fonctionnent — puis les rendre plus simples, plus robustes et plus rapides.</p><p>Mon terrain de jeu se situe à la rencontre du développement applicatif et de l’infrastructure. Je m’intéresse autant à une interface bien pensée qu’à l’automatisation qui la fait vivre.</p><div className="about-meta"><span><MapPin size={15} /> Fianarantsoa, Madagascar</span><span><Code2 size={15} /> ENI · Licence Pro (2023—2026)</span></div></div>
          </div>
        </section>

        <section id="work" className="experience section-wrap section-line">
          <div className="section-label"><span>02</span><span>EXPÉRIENCE</span></div>
          <div className="experience-list">{experience.map((item) => <article className="experience-item" key={item.period}><div className="experience-period">{item.period}</div><div className="experience-main"><div className="experience-heading"><h3>{item.role}</h3><span>{item.company} · {item.location}</span></div><p>{item.body}</p><div className="tag-row">{item.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</div>
        </section>

        <section id="projects" className="projects section-wrap section-line">
          <div className="section-label"><span>03</span><span>PROJETS SÉLECTIONNÉS</span></div>
          <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span>{project.link && <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Voir ${project.title}`}><ExternalLink size={17} /></a>}</div><h3>{project.title}</h3><p>{project.description}</p><p className="project-details">{project.details}</p><div className="tag-row">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></article>)}</div>
        </section>

        <section className="toolkit section-wrap section-line"><div className="section-label"><span>04</span><span>OUTILS &amp; LANGUES</span></div><div className="toolkit-content"><div><h2>Un stack<br /><em>en mouvement.</em></h2><p>Je reste en veille, j’expérimente, je documente. Chaque outil est une nouvelle façon de résoudre un problème.</p></div><div className="toolkit-columns"><div><h4>TECHNIQUE</h4><p>React · TypeScript · NestJS<br />Next.js · Node.js · Python<br />Docker · Ansible · Proxmox<br />Git · PostgreSQL · ELK</p></div><div><h4>LANGUES</h4><p>Français<br />Malagasy<br />Anglais<br />Allemand</p></div><div><h4>HUMAIN</h4><p>Leadership<br />Communication<br />Travail d’équipe<br />Curiosité</p></div></div></div></section>

        <section id="contact" className="contact section-wrap"><div className="contact-kicker"><Terminal size={17} /> UNE IDÉE EN TÊTE ?</div><h2>Construisons quelque<br /><em>chose d’utile.</em></h2><p>Vous avez un projet, une question ou simplement envie d’échanger ? Ma boîte mail est ouverte.</p><a className="contact-email" href="mailto:andry.naffafy@gmail.com">andry.naffafy@gmail.com <ArrowUpRight size={20} /></a></section>
      </main>

      <footer className="site-footer section-wrap"><span>© 2026 ANDRIANAIVO N. Z.</span><div><a href="https://github.com/naffylien" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Globe2 size={17} /> LinkedIn</a></div><span>FAIT AVEC INTENTION.</span></footer>
    </div>
  )
}

export default Portfolio
