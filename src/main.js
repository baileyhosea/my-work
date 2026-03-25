import { modeOrder, modeThemeMeta, resume } from './data.js';
import './styles.css';

const app = document.querySelector('#app');
const storageKey = 'my-work-mode';
const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

const escapeHTML = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const getInitialMode = () => {
  const saved = window.localStorage.getItem(storageKey);
  return modeOrder.includes(saved) ? saved : 'terminal';
};

const state = {
  mode: getInitialMode(),
};

const setThemeColor = (mode) => {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', modeThemeMeta[mode].themeColor);
  }
};

const renderMetric = ({ label, value, detail }) => `
  <article class="metric-card reveal">
    <p class="metric-label">${escapeHTML(label)}</p>
    <p class="metric-value">${escapeHTML(value)}</p>
    ${detail ? `<p class="metric-detail">${escapeHTML(detail)}</p>` : ''}
  </article>
`;

const renderBullets = (items, className) =>
  items.map((item) => `<li class="${className}">${escapeHTML(item)}</li>`).join('');

const renderExperience = (entry, index) => `
  <article class="experience-card reveal" data-company="${escapeHTML(entry.company)}">
    <div class="experience-head">
      <div>
        <p class="eyebrow">${String(index + 1).padStart(2, '0')} / experience</p>
        <h3>${escapeHTML(entry.company)}</h3>
        <p class="role">${escapeHTML(entry.title)}</p>
      </div>
      <p class="period">${escapeHTML(entry.period)}</p>
    </div>
    <ul class="experience-list">
      ${renderBullets(entry.highlights, 'experience-point')}
    </ul>
  </article>
`;

const renderProject = (project) => `
  <article class="project-card reveal">
    <div class="project-top">
      <p class="eyebrow">selected project</p>
      <h3>${escapeHTML(project.name)}</h3>
    </div>
    <p class="project-summary">${escapeHTML(project.summary)}</p>
    <p class="project-impact">${escapeHTML(project.impact)}</p>
    <ul class="tag-list">
      ${project.stack.map((item) => `<li>${escapeHTML(item)}</li>`).join('')}
    </ul>
  </article>
`;

const renderSkillGroup = ({ group, items }) => `
  <article class="skill-card reveal">
    <p class="eyebrow">${escapeHTML(group)}</p>
    <ul class="chip-list">
      ${items.map((item) => `<li>${escapeHTML(item)}</li>`).join('')}
    </ul>
  </article>
`;

const renderModeButton = (mode, currentMode) => `
  <button
    type="button"
    class="mode-button ${mode === currentMode ? 'is-active' : ''}"
    data-mode-switch="${mode}"
    aria-pressed="${mode === currentMode ? 'true' : 'false'}"
  >
    ${escapeHTML(modeThemeMeta[mode].label)}
  </button>
`;

const renderMarkup = () => {
  const spotlight = resume.modeSpotlights[state.mode];

  app.innerHTML = `
    <div class="page-shell">
      <header class="topbar">
        <div class="brand-lockup">
          <p class="brand-kicker">developer resume runtime</p>
          <h1>${escapeHTML(resume.profile.name)}</h1>
          <p class="brand-title">${escapeHTML(resume.profile.title)}</p>
        </div>

        <div class="mode-panel" aria-label="Visual mode selector">
          <p class="mode-panel-label">View mode</p>
          <div class="mode-switcher" aria-label="Resume visual modes">
            ${modeOrder.map((mode) => renderModeButton(mode, state.mode)).join('')}
          </div>
        </div>
      </header>

      <main class="layout">
        <section class="hero panel reveal" aria-labelledby="intro-heading">
          <div class="hero-copy">
            <p class="eyebrow">profile summary</p>
            <h2 id="intro-heading">Resume as a live system, not a static document.</h2>
            <p class="hero-summary">${escapeHTML(resume.profile.summary)}</p>

            <div class="stats-grid" aria-label="Key profile statistics">
              ${resume.stats.map(renderMetric).join('')}
            </div>

            <div class="cta-row" aria-label="Download links">
              ${resume.downloads
                .map((download) => `
                  <a class="button-link" href="${escapeHTML(download.href)}" download>
                    ${escapeHTML(download.label)}
                  </a>
                `)
                .join('')}
              <a class="button-link ghost" href="mailto:${escapeHTML(resume.profile.email)}">Email Bailey</a>
            </div>
          </div>

          <aside class="hero-aside" aria-label="Mode preview and contact information">
            <div class="signal-card">
              <p class="eyebrow">mode runtime</p>
              <h3 data-mode-label>${escapeHTML(spotlight.label)}</h3>
              <p class="signal-copy" data-mode-summary>${escapeHTML(spotlight.intro)}</p>
              <pre class="code-sample" data-mode-sample>${spotlight.sample.map((line) => escapeHTML(line)).join('\n')}</pre>
            </div>

            <div class="profile-card">
              <p class="eyebrow">contact</p>
              <dl class="contact-grid">
                <div>
                  <dt>location</dt>
                  <dd>${escapeHTML(resume.profile.location)}</dd>
                </div>
                <div>
                  <dt>email</dt>
                  <dd><a href="mailto:${escapeHTML(resume.profile.email)}">${escapeHTML(resume.profile.email)}</a></dd>
                </div>
                <div>
                  <dt>phone</dt>
                  <dd>${escapeHTML(resume.profile.phone)}</dd>
                </div>
                <div>
                  <dt>links</dt>
                  <dd>
                    <a href="https://github.com/${escapeHTML(resume.profile.github)}" target="_blank" rel="noreferrer">GitHub</a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </section>

        <section class="panel reveal" aria-labelledby="highlights-heading">
          <div class="section-head">
            <div>
              <p class="eyebrow">experience highlights</p>
              <h2 id="highlights-heading">Signal over volume.</h2>
            </div>
            <p class="section-note">Selected proof points that communicate scope, leverage, and business impact fast.</p>
          </div>
          <div class="metric-grid">
            ${resume.highlights.map(renderMetric).join('')}
          </div>
          <ul class="pill-rows">
            ${resume.experienceHighlights.map((item) => `<li>${escapeHTML(item)}</li>`).join('')}
          </ul>
        </section>

        <section class="panel reveal" aria-labelledby="experience-heading">
          <div class="section-head">
            <div>
              <p class="eyebrow">experience</p>
              <h2 id="experience-heading">Operator, builder, and platform multiplier.</h2>
            </div>
            <p class="section-note">Chronology preserved, but tuned for executive scan speed and developer credibility.</p>
          </div>
          <div class="experience-stack">
            ${resume.experience.map(renderExperience).join('')}
          </div>
        </section>

        <section class="panel reveal" aria-labelledby="projects-heading">
          <div class="section-head">
            <div>
              <p class="eyebrow">projects</p>
              <h2 id="projects-heading">Selected systems and products.</h2>
            </div>
            <p class="section-note">A compact portfolio layer that shows the shape of the work behind the resume.</p>
          </div>
          <div class="project-grid">
            ${resume.projects.map(renderProject).join('')}
          </div>
        </section>

        <section class="panel reveal" aria-labelledby="skills-heading">
          <div class="section-head">
            <div>
              <p class="eyebrow">skills</p>
              <h2 id="skills-heading">Platform stack and delivery surface area.</h2>
            </div>
            <p class="section-note">The categories stay readable in ATS parsing while the visual treatment stays more expressive.</p>
          </div>
          <div class="skills-grid">
            ${resume.skills.map(renderSkillGroup).join('')}
          </div>
        </section>

        <section class="two-up">
          <article class="panel reveal" aria-labelledby="certs-heading">
            <div class="section-head compact">
              <div>
                <p class="eyebrow">certifications</p>
                <h2 id="certs-heading">Credentials and depth markers.</h2>
              </div>
            </div>
            <ul class="cert-list">
              ${renderBullets(resume.certifications, 'cert-item')}
            </ul>
          </article>

          <article class="panel reveal" aria-labelledby="education-heading">
            <div class="section-head compact">
              <div>
                <p class="eyebrow">education</p>
                <h2 id="education-heading">Academic foundation.</h2>
              </div>
            </div>
            <p class="education-school">${escapeHTML(resume.education.school)}</p>
            <p class="education-degree">${escapeHTML(resume.education.degree)}</p>
            <p class="education-gpa">GPA ${escapeHTML(resume.education.gpa)}</p>
          </article>
        </section>
      </main>

      <footer class="footer panel reveal">
        <div>
          <p class="eyebrow">download links</p>
          <h2>Built to be shared, scanned, and deployed.</h2>
        </div>
        <div class="footer-links">
          ${resume.downloads
            .map(
              (download) => `
                <a class="button-link" href="${escapeHTML(download.href)}" download>
                  ${escapeHTML(download.label)}
                </a>
              `,
            )
            .join('')}
        </div>
      </footer>
    </div>
  `;
};

const syncModeUI = () => {
  document.documentElement.dataset.mode = state.mode;
  setThemeColor(state.mode);
  window.localStorage.setItem(storageKey, state.mode);

  const spotlight = resume.modeSpotlights[state.mode];
  const label = document.querySelector('[data-mode-label]');
  const summary = document.querySelector('[data-mode-summary]');
  const sample = document.querySelector('[data-mode-sample]');

  if (label) {
    label.textContent = spotlight.label;
  }
  if (summary) {
    summary.textContent = spotlight.intro;
  }
  if (sample) {
    sample.textContent = spotlight.sample.join('\n');
  }

  document.querySelectorAll('[data-mode-switch]').forEach((button) => {
    const isActive = button.getAttribute('data-mode-switch') === state.mode;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

const attachModeEvents = () => {
  document.querySelectorAll('[data-mode-switch]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextMode = button.getAttribute('data-mode-switch');
      if (!nextMode || nextMode === state.mode) {
        return;
      }
      state.mode = nextMode;
      syncModeUI();
    });
  });
};

const revealSections = () => {
  if (reducedMotionMedia.matches) {
    document.querySelectorAll('.reveal').forEach((node) => node.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
};

renderMarkup();
attachModeEvents();
syncModeUI();
revealSections();

reducedMotionMedia.addEventListener('change', () => {
  document.querySelectorAll('.reveal').forEach((node) => {
    if (reducedMotionMedia.matches) {
      node.classList.add('is-visible');
    }
  });
});
