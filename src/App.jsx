import './App.css'

const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React/Next.js', 'D3.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'GraphQL', 'Apollo', 'Ruby on Rails'],
  },
  {
    title: 'AI & ML',
    items: ['OpenAI APIs', 'LLM Integration', 'Prompt Engineering', 'RAG Concepts', 'Chatbots', 'Semantic Search', 'AI Automation'],
  },
  {
    title: 'Data & Cloud',
    items: ['Oracle', 'DB2', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Azure DevOps', 'CI/CD', 'Jenkins', 'Git'],
  },
]

const experience = [
  {
    period: 'Jan 2023 – Mar 2026',
    title: 'Senior Full Stack Developer',
    company: 'PEPSICO · Contract',
    location: 'Obrenovac, Serbia (Remote)',
    bullets: [
      'Built a web-based food & beverage experiments simulator with automated report generation, including data extraction and graph visualizations.',
      'Integrated AI/ML features to predict experiment outcomes and recommend optimal flavor and formulation combinations.',
      'Optimized data-processing methods and AI-driven pipelines to improve simulation performance and report accuracy.',
      'Led stack modernization from Python/Dash to a Flask + React/JavaScript architecture for scalability and maintainability.',
      'Migrated the app to Azure, integrated SSO, and implemented CI/CD pipelines for secure deployment.',
    ],
  },
  {
    period: 'Jan 2020 – Dec 2022',
    title: 'Frontend / Visualization Engineer',
    company: 'LENNAR INC · Contract',
    location: 'Obrenovac, Serbia (Remote)',
    bullets: [
      'Developed responsive dashboards for large-scale screen resolutions and high-volume data use cases.',
      'Implemented advanced data visualizations using D3.js to support executive decision-making.',
      'Built Node.js proxy services to integrate with Snowflake data platforms.',
      'Improved UI performance and rendering efficiency across data-heavy interfaces.',
    ],
  },
  {
    period: 'Jan 2018 – Dec 2019',
    title: 'Frontend Developer',
    company: 'HTEC · Full-time',
    location: 'Obrenovac, Serbia',
    bullets: [
      'Developed responsive UI using HTML, CSS, and JavaScript for data-driven web applications.',
      'Implemented dynamic interface features based on application logic and backend responses.',
      'Supported integration with APIs and assisted early-stage AI-driven features such as search optimization and filtering logic.',
    ],
  },
]

const stats = [
  { value: '8+', label: 'Years building production software' },
  { value: 'AI', label: 'LLM and automation product work' },
  { value: 'Scale', label: 'High-traffic and data-heavy systems' },
]

const strengths = [
  'Full-stack design and delivery across frontend, backend, and AI-backed systems',
  'Strong focus on architecture, performance, and clean, maintainable code',
  'Experience translating complex data into usable, decision-ready interfaces',
  'Comfortable working in remote, agile, and cross-functional product teams',
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Bogdan Mijalkovic home">
            BM
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
          </nav>

          <a
            className="button primary"
            href="/Bogdan Mijalkovic.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero section-spacing">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Senior Full Stack / AI Developer</p>
              <h1>Bogdan Mijalkovic</h1>
              <h2>Building reliable systems, smart products, and clearer decisions.</h2>
              <p className="intro">
                Full-stack software engineer with 8 years experience building high-traffic systems
                that scale under concurrent load. I work across React, Node.js, Python, APIs, and AI
                integrations to turn complex data into useful, production-ready products.
              </p>

              <div className="cta-row">
                <a className="button primary" href="#experience">
                  View experience
                </a>
                <a className="button secondary" href="mailto:bog.mijal@gmail.com">
                  Contact me
                </a>
              </div>

              <div className="stat-grid" aria-label="Key statistics">
                {stats.map((stat) => (
                  <div className="stat-card" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="profile-card" aria-label="Profile overview">
              <div className="profile-badge">Open to senior engineering roles</div>

              <div className="dev-visual" aria-label="Developer workspace illustration">
                <div className="window-frame">
                  <div className="window-topbar">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>

                  <div className="window-body">
                    <div className="code-lines">
                      <span className="line line-1" />
                      <span className="line line-2" />
                      <span className="line line-3" />
                      <span className="line line-4" />
                    </div>

                    <div className="graph-card">
                      <div className="bars">
                        <span style={{ height: '28%' }} />
                        <span style={{ height: '48%' }} />
                        <span style={{ height: '62%' }} />
                        <span style={{ height: '80%' }} />
                        <span style={{ height: '100%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="float-panel panel-ai">
                  <span className="mini-label">AI</span>
                  <strong>LLM</strong>
                </div>

                <div className="float-panel panel-metrics">
                  <span>99.9%</span>
                  <small>uptime</small>
                </div>
              </div>

              <div className="profile-header">
                <div className="avatar">BM</div>
                <div>
                  <h3>Profile</h3>
                  <p>Full-stack engineer • AI product builder • Problem solver</p>
                </div>
              </div>

              <ul className="contact-list">
                <li>
                  <span>Email</span>
                  <a href="mailto:bog.mijal@gmail.com">bog.mijal@gmail.com</a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href="tel:+381637607693">+381 637607693</a>
                </li>
                <li>
                  <span>Location</span>
                  <span>Obrenovac, Serbia</span>
                </li>
                <li>
                  <span>LinkedIn</span>
                  <a href="https://www.linkedin.com/in/bogdan-mijax" target="_blank" rel="noreferrer">
                    bogdan-mijax
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="section-spacing section-surface">
          <div className="container split-layout">
            <div>
              <p className="section-kicker">About</p>
              <h3>Product-minded engineer with a strong data and AI perspective.</h3>
            </div>
            <div>
              <p>
                I work at the intersection of software engineering and real-world product impact.
                My favorite work combines clean architecture, scalable systems, and AI-powered
                experiences that improve decision-making and workflow efficiency.
              </p>
              <p>
                From SaaS dashboards and visualization tools to LLM integrations and recommendation
                systems, I build products that are practical, maintainable, and shaped by the actual
                needs of users and teams.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section-spacing">
          <div className="container">
            <p className="section-kicker">Skills</p>
            <h3>Core technical capabilities</h3>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-card" key={group.title}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-spacing section-surface">
          <div className="container">
            <p className="section-kicker">Experience</p>
            <h3>Career highlights</h3>

            <div className="experience-list">
              {experience.map((role) => (
                <article className="experience-card" key={`${role.title}-${role.period}`}>
                  <div className="experience-period">{role.period}</div>
                  <div className="experience-body">
                    <div className="role-heading">
                      <h4>{role.title}</h4>
                      <span>{role.location}</span>
                    </div>
                    <p className="company-name">{role.company}</p>
                    <ul>
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="focus-grid">
              <div className="focus-panel">
                <p className="section-kicker">Approach</p>
                <h3>How I work</h3>
                <ul>
                  {strengths.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="focus-panel tinted">
                <p className="section-kicker">Methodology</p>
                <h3>Practical engineering discipline</h3>
                <p>
                  I favor clean architecture, test-driven delivery, and solutions that are easy to
                  reason about, maintain, and evolve as the business grows.
                </p>
                <div className="tags">
                  <span>Agile</span>
                  <span>Scrum</span>
                  <span>TDD</span>
                  <span>Clean Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section-spacing footer-section">
          <div className="container footer-grid">
            <div>
              <p className="section-kicker">Education</p>
              <h3>University of Belgrade</h3>
              <p className="education-meta">Bachelor's degree in Computer Engineering</p>
              <p className="education-meta">2013–2017</p>
              <p className="education-meta">GPA: 3.9/4.0</p>
            </div>

            <div>
              <p className="section-kicker">Contact</p>
              <h3>Let’s build the next product milestone.</h3>
              <div className="contact-actions">
                <a className="button primary" href="mailto:bog.mijal@gmail.com">
                  Email Bogdan
                </a>
                <a className="button secondary" href="https://www.linkedin.com/in/bogdan-mijax" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <div className="container footer-row">
          <p>© 2026 Bogdan Mijalkovic</p>
          <p>Built with React for a modern, resume-driven portfolio.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
