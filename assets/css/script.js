const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
const projectCards = Array.from(document.querySelectorAll('.project-card'));
const revealItems = Array.from(document.querySelectorAll('.reveal'));
const skillRows = Array.from(document.querySelectorAll('.skill-row > div > span'));
const contactForm = document.querySelector('#contact-form');
const toast = document.querySelector('#form-toast');
const typewriter = document.querySelector('#typewriter');
const navLinks = Array.from(document.querySelectorAll('.menu a'));
const themeKey = 'blessing-portfolio-theme';

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  if (!themeToggle) return;
  const isDark = theme === 'dark';
  themeToggle.innerHTML = isDark ? '<i class="fa-regular fa-sun" aria-hidden="true"></i>' : '<i class="fa-regular fa-moon" aria-hidden="true"></i>';
  themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
}

const storedTheme = localStorage.getItem(themeKey);
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(storedTheme || preferredTheme);

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem(themeKey, nextTheme);
  applyTheme(nextTheme);
});

menuToggle?.addEventListener('click', () => {
  const isOpen = menu?.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>' : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter || 'all';
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    projectCards.forEach((card) => {
      const categories = card.dataset.category?.split(' ') || [];
      card.classList.toggle('is-hidden', filter !== 'all' && !categories.includes(filter));
    });
  });
});

const caseDialog = document.querySelector('#case-dialog');
const caseContent = document.querySelector('#case-content');
const caseClose = document.querySelector('.dialog-close');
const caseStudies = [
  { id: 'asteria', title: 'Asteria Atelier', client: 'Asteria Atelier (fictional)', industry: 'Luxury fashion', year: '2025', role: 'Brand identity & art direction', category: 'Branding', image: 'assets/images/color-cards.jpg', overview: 'A self-initiated identity for an imagined eveningwear house balancing drama with restraint.', problem: 'Luxury fashion concepts often default to either ornate heritage or sterile minimalism.', research: 'Studied fashion editorial pacing, astronomical diagrams, and the way garments create sculptural silhouettes.', process: 'Built the system from a narrow wordmark, a celestial motif library, and a deliberate sequence of editorial crops.', identity: 'An assertive serif-led signature paired with precise, spacious layout rules.', typography: 'High-contrast editorial display type with a quiet grotesk companion.', palette: 'Ink black, candle cream, and softened gold.', deliverables: ['Identity system', 'Lookbook art direction', 'Social launch kit', 'Packaging concepts'], outcome: 'A cohesive concept world that gives a fictional label an immediately recognisable visual posture.', software: ['Illustrator', 'Photoshop', 'InDesign'], reflection: 'The strongest identities do not need to say everything at once.' },
  { id: 'kora', title: 'Kora Coffee House', client: 'Kora Coffee House (fictional)', industry: 'Coffee & hospitality', year: '2025', role: 'Brand identity & packaging design', category: 'Packaging', image: 'assets/images/palette-tablet.jpg', overview: 'A neighbourhood coffee concept designed around slow mornings, familiar faces, and good typography.', problem: 'Independent coffee spaces can look interchangeable when every touchpoint relies on the same visual shorthand.', research: 'Mapped local café rituals, packaging textures, and the language of handwritten menus.', process: 'Created a flexible typographic toolkit that moves from cup sleeve to street poster without losing warmth.', identity: 'A friendly wordmark with a simple linear device inspired by coffee rings.', typography: 'Rounded sans-serif headers with a readable humanist text face.', palette: 'Roasted umber, oat milk, and bright citrus.', deliverables: ['Brand identity', 'Cup & bag packaging', 'Menu templates', 'Launch campaign'], outcome: 'A complete fictional coffee brand ready to feel personal at every scale.', software: ['Illustrator', 'Photoshop', 'Figma'], reflection: 'Warmth becomes more believable when the system has disciplined rules.' },
  { id: 'nyra', title: 'Nyra Skin Rituals', client: 'Nyra Skin Rituals (fictional)', industry: 'Beauty & skincare', year: '2024', role: 'Packaging design & visual direction', category: 'Packaging', image: 'assets/images/sonar-cd-art.jpg', overview: 'A packaging concept for a nightly skincare line built around pause, texture, and reset.', problem: 'Premium skincare frequently competes through excess, making it difficult to create a calmer kind of distinction.', research: 'Explored tactile materials, moonlight photography, and the rituals users build around evening care.', process: 'Developed a muted label system, product hierarchy, and editorial imagery with space to breathe.', identity: 'A minimal monogram that behaves like a small ritual mark.', typography: 'Elegant transitional serif paired with crisp functional labels.', palette: 'Deep plum, mineral grey, and soft lilac.', deliverables: ['Packaging system', 'Product labels', 'E-commerce direction', 'Campaign mockups'], outcome: 'A coherent concept that makes self-care feel intentional rather than ornamental.', software: ['Illustrator', 'Photoshop', 'InDesign'], reflection: 'Quiet design still needs a strong point of tension.' },
  { id: 'axis', title: 'Axis Field Studio', client: 'Axis Field Studio (fictional)', industry: 'Architecture', year: '2024', role: 'Editorial identity & digital direction', category: 'Editorial', image: 'assets/images/webdesign-laptop.jpg', overview: 'An identity proposal for a small architecture studio focused on material-led, climate-aware spaces.', problem: 'Architecture practices need to show rigour without letting their work disappear behind technical jargon.', research: 'Looked at plan drawings, material samples, independent architecture journals, and modular grid systems.', process: 'Built a grid that moves between proposal documents, portfolio pages, and construction-site communications.', identity: 'A modular mark that shifts like a floor plan while remaining legible at small sizes.', typography: 'Measured grotesk typography with editorial captions.', palette: 'Concrete, paper, oxidised copper, and field green.', deliverables: ['Visual identity', 'Portfolio template', 'Proposal system', 'Site signage concepts'], outcome: 'A fictional studio system that gives serious work a warmer and more accessible public voice.', software: ['Figma', 'Illustrator', 'InDesign'], reflection: 'Systems feel premium when they make complex content easier to enter.' },
  { id: 'bright', title: 'Bright Futures Initiative', client: 'Bright Futures Initiative (fictional)', industry: 'Education NGO', year: '2024', role: 'Campaign identity & social toolkit', category: 'Campaign', image: 'assets/images/workspace-bright.jpg', overview: 'A concept campaign encouraging access to creative education for young people.', problem: 'Purpose-led campaigns can become visually heavy before their message has a chance to invite participation.', research: 'Reviewed youth-led community campaigns, optimistic colour theory, and inclusive image-making practices.', process: 'Designed a modular campaign language that lets different voices and local stories hold the centre.', identity: 'A bright framing device that turns portraits and messages into small declarations.', typography: 'Bold condensed headlines with friendly information type.', palette: 'Sun yellow, cobalt, berry, and paper white.', deliverables: ['Campaign identity', 'Social templates', 'Poster series', 'Event materials'], outcome: 'A fictional campaign system designed to feel energetic, participatory, and easy to share.', software: ['Illustrator', 'Photoshop', 'Canva'], reflection: 'Optimism needs structure or it becomes decoration.' },
  { id: 'drift', title: 'The Drift Assembly', client: 'The Drift Assembly (fictional)', industry: 'Music festival', year: '2025', role: 'Festival identity & motion direction', category: 'Campaign', image: 'assets/images/color-process-vertical.jpg', overview: 'A music festival concept for a changing lineup of sounds, scenes, and late-night gatherings.', problem: 'Festival identities must hold a lot of information without losing the feeling of anticipation.', research: 'Studied music posters, kinetic typography, line-up hierarchy, and the visual language of movement.', process: 'Created a shifting typographic device that can stretch, crop, and animate across physical and digital formats.', identity: 'A flexible wordmark that appears to drift across a fixed grid.', typography: 'Heavy display type with variable-width motion treatments.', palette: 'Electric orange, night navy, acid green, and silver.', deliverables: ['Festival identity', 'Line-up system', 'Social motion frames', 'Wayfinding concepts'], outcome: 'A fictional festival world designed to build momentum before the first act arrives.', software: ['Illustrator', 'After Effects', 'Photoshop'], reflection: 'Motion is most effective when it extends an idea already present in the static work.' },
  { id: 'loopline', title: 'Loopline Finance', client: 'Loopline Finance (fictional)', industry: 'Fintech startup', year: '2025', role: 'Product visual design & UI direction', category: 'Digital', image: 'assets/images/ui-monitor.jpg', overview: 'A visual concept for a finance tool that helps small businesses see momentum, not just transactions.', problem: 'Financial products often speak in dense interfaces that make users feel behind before they begin.', research: 'Mapped dashboard patterns, small-business cashflow questions, and accessible information hierarchy.', process: 'Paired clear interface modules with a warmer identity layer to make numbers feel less remote.', identity: 'A looping directional symbol that suggests continuity and progress.', typography: 'High-legibility sans serif with strong numeric hierarchy.', palette: 'Graphite, soft mint, cloud white, and signal coral.', deliverables: ['Product UI direction', 'Design system', 'Dashboard screens', 'Launch page'], outcome: 'A fictional fintech interface that puts clarity, confidence, and movement ahead of visual noise.', software: ['Figma', 'Illustrator', 'Photoshop'], reflection: 'Trust grows from what a design removes as much as what it adds.' },
  { id: 'table7', title: 'Table No. 7', client: 'Table No. 7 (fictional)', industry: 'Restaurant & hospitality', year: '2023', role: 'Restaurant branding & print design', category: 'Branding', image: 'assets/images/laptop-topdesk.jpg', overview: 'A visual identity for an imagined restaurant where small plates and late conversation share the table.', problem: 'Restaurant brands can become overly themed, leaving little room for personality to evolve with the menu.', research: 'Explored classic bistro ephemera, local food writing, and the ritual of a shared table.', process: 'Created a flexible typographic and printed-material system built around the idea of a reserved table card.', identity: 'A number-led mark that gives every application a small sense of occasion.', typography: 'Expressive serif headlines with compact menu information type.', palette: 'Tomato red, charcoal, warm cream, and olive.', deliverables: ['Brand identity', 'Menu design', 'Tableware concepts', 'Social content kit'], outcome: 'A fictional restaurant identity with enough charm for the first visit and enough structure for every return.', software: ['Illustrator', 'InDesign', 'Photoshop'], reflection: 'Hospitality design works best when it leaves room for people to make the memory.' }
];

function renderCaseStudy(projectId) {
  const project = caseStudies.find((item) => item.id === projectId);
  if (!project || !caseContent) return;
  const next = caseStudies[(caseStudies.findIndex((item) => item.id === projectId) + 1) % caseStudies.length];
  caseContent.innerHTML = `
    <article class="case-detail">
      <header class="case-detail-hero"><img src="${project.image}" alt="${project.title} concept case study" /><div><p class="case-detail-label">Concept case study · ${project.category}</p><h2>${project.title}</h2><p class="case-detail-intro">${project.overview}</p></div></header>
      <div class="case-meta"><div><span>Fictional client</span><strong>${project.client}</strong></div><div><span>Industry / year</span><strong>${project.industry} · ${project.year}</strong></div><div><span>Role</span><strong>${project.role}</strong></div></div>
      <div class="case-content-grid"><article><h3>The challenge</h3><p>${project.problem}</p></article><article><h3>Research &amp; process</h3><p>${project.research} ${project.process}</p></article><article><h3>Visual identity</h3><p>${project.identity} ${project.typography} Colour palette: ${project.palette}</p></article><article><h3>Deliverables &amp; mockups</h3><ul>${project.deliverables.map((item) => `<li>${item}</li>`).join('')}</ul></article><article><h3>Outcome</h3><p>${project.outcome}</p></article><article><h3>Software &amp; reflection</h3><p>${project.software.join(', ')}. ${project.reflection}</p></article></div>
      <footer class="case-detail-footer"><span class="case-detail-label">Self-initiated portfolio concept</span><button type="button" data-next-project="${next.id}">Next project: ${next.title} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button></footer>
    </article>`;
  caseContent.querySelector('[data-next-project]')?.addEventListener('click', (event) => renderCaseStudy(event.currentTarget.dataset.nextProject));
}

document.querySelectorAll('.case-button').forEach((button) => {
  button.addEventListener('click', () => {
    renderCaseStudy(button.dataset.project);
    caseDialog?.showModal();
  });
});

caseClose?.addEventListener('click', () => caseDialog?.close());
caseDialog?.addEventListener('click', (event) => { if (event.target === caseDialog) caseDialog.close(); });

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  revealItems.forEach((item) => revealObserver.observe(item));

  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      skillRows.forEach((bar) => { bar.style.width = `${bar.dataset.level || 0}%`; });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.3 });
  const skillsSection = document.querySelector('.skills');
  if (skillsSection) skillObserver.observe(skillsSection);
} else {
  revealItems.forEach((item) => item.classList.add('in-view'));
  skillRows.forEach((bar) => { bar.style.width = `${bar.dataset.level || 0}%`; });
}

const counters = Array.from(document.querySelectorAll('.counter'));
const statsBand = document.querySelector('.stats-band');

function animateCounter(counter) {
  const target = Number(counter.dataset.target || 0);
  const suffix = counter.dataset.suffix || '';
  const start = performance.now();
  const duration = 1100;
  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const value = Math.round(target * (1 - (1 - progress) ** 3));
    counter.textContent = `${value}${suffix}`;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

if (statsBand && 'IntersectionObserver' in window) {
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      counters.forEach(animateCounter);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.45 });
  statsObserver.observe(statsBand);
} else {
  counters.forEach((counter) => { counter.textContent = `${counter.dataset.target || 0}${counter.dataset.suffix || ''}`; });
}

if (typewriter && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const roles = ['presence.', 'purpose.', 'personality.'];
  let roleIndex = 0;
  let characterIndex = roles[0].length;
  let isDeleting = true;
  const type = () => {
    const role = roles[roleIndex];
    characterIndex += isDeleting ? -1 : 1;
    typewriter.textContent = role.slice(0, characterIndex);
    if (!isDeleting && characterIndex === role.length) { isDeleting = true; window.setTimeout(type, 1300); return; }
    if (isDeleting && characterIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; }
    window.setTimeout(type, isDeleting ? 42 : 72);
  };
  window.setTimeout(type, 1200);
}

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();
  toast?.classList.add('show');
  window.setTimeout(() => toast?.classList.remove('show'), 3000);
});

const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href') || '')).filter(Boolean);
if ('IntersectionObserver' in window && sections.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  sections.forEach((section) => navObserver.observe(section));
}
