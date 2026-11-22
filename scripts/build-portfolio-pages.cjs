// Pre-render the shared cards so the first paint matches the enhanced UI.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const site = path.resolve(__dirname, '../outputs/portfon-clone');
const runtime = fs.readFileSync(path.join(site, 'web-project-cards.js'), 'utf8');
// Data keys stay the original Framer slugs; pages now live at clearer URLs.
const dirs = { 'lumora-beauty-rebrand': 'web-design', 'virex-marketing-website': 'design-system', 'nova-saas-platform': 'ai-film-creation-tools', 'aether-mobile-experience': 'app-design' };
const routes = ['lumora-beauty-rebrand', 'virex-marketing-website', 'nova-saas-platform', 'aether-mobile-experience'];
const oldTitles = {
  'virex-marketing-website': 'Virex Marketing Website',
  'nova-saas-platform': 'Nova SaaS Platform',
  'aether-mobile-experience': 'Aether Mobile Experience',
};
const oldDescriptions = {
  'virex-marketing-website': 'Designed a high-performing marketing website focused on strategic storytelling, brand positioning, and conversion-driven user journeys that strengthened overall digital presence.',
  'nova-saas-platform': 'Redesigned a complex SaaS dashboard into a clean, scalable interface system that enhanced usability, improved product clarity, and increased long-term user engagement.',
  'aether-mobile-experience': 'Crafted an intuitive mobile application centered on seamless navigation, meaningful micro-interactions, and a structured visual hierarchy across multiple user touchpoints.',
};

for (const slug of routes) {
  const elements = {};
  const root = { innerHTML: '', querySelector: () => null, querySelectorAll: () => [], append: () => {} };
  const host = { dataset: {}, style: { setProperty() {} }, attachShadow: () => root };
  const document = {
    title: '',
    querySelector(selector) {
      if (selector === '.framer-14c157h') return host;
      return elements[selector] ||= { textContent: '' };
    },
    getElementById: () => ({}),
    createElement: () => ({ setAttribute() {}, addEventListener() {}, querySelector: () => ({ addEventListener() {}, dataset: {} }) }),
  };
  vm.runInNewContext(runtime, {
    document, location: { pathname: '/my-portfolio/' + dirs[slug] }, URL,
    MutationObserver: class { observe() {} },
  });
  if (!root.innerHTML.includes('See details')) throw new Error('No cards rendered for ' + slug);

  const file = path.join(site, 'my-portfolio', dirs[slug], 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/<template shadowrootmode="open" data-portfolio-ssr>[^]*?<\/template>/g, '');
  html = html.replace(/(<div class="framer-14c157h"[^>]*>)/, '$1<template shadowrootmode="open" data-portfolio-ssr>' + root.innerHTML + '</template>');

  // Match the heading and description to runtime data before any scripts execute.
  const heading = elements['.framer-aw1ene h1']?.textContent;
  const description = elements['.framer-29zcyb p']?.textContent;
  const category = elements['.framer-lyxmbh p']?.textContent;
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  for (const [className, tag, value] of [
    ['framer-aw1ene', 'h1', heading], ['framer-29zcyb', 'p', description], ['framer-lyxmbh', 'p', category],
  ]) {
    if (!value) continue;
    const pattern = new RegExp('(<div class="' + className + '"[^>]*><' + tag + '[^>]*>)([^]*?)(</' + tag + '>)');
    html = html.replace(pattern, (_, before, old, after) => before + escape(value) + after);
    // Hydration receives the same copy; it cannot restore the old template text.
    const oldCopy = oldDescriptions[slug];
    if (tag === 'p' && className === 'framer-29zcyb') html = html.replaceAll(oldCopy, value);
  }
  if (heading && oldTitles[slug]) {
    html = html.replaceAll(oldTitles[slug], heading);
    html = html.replaceAll('"Web Design"', JSON.stringify(category));
  }
  html = html.replace(/<style id="portfolio-first-paint">[^]*?<\/style>/g, '');
  const firstPaint = '<style id="portfolio-first-paint">.framer-14c157h{opacity:1!important;transform:none!important;height:auto!important;overflow:visible!important}.framer-lpu82n,.framer-29zcyb{opacity:1!important;transform:none!important}.framer-1rmskto,.framer-167h8yd{align-items:center!important;text-align:center!important}.framer-lyxmbh{display:none!important}.framer-aw1ene h1,.framer-29zcyb p{--framer-text-alignment:center!important;text-align:center!important}</style>';
  html = html.replace('</head>', firstPaint + '\n</head>');
  const version = require('node:crypto').createHash('sha256').update(runtime).digest('hex').slice(0, 10);
  html = html.replace(/src="\/web-project-cards\.js(?:\?[^" ]*)?"/, 'src="/web-project-cards.js?v=' + version + '"');
  fs.writeFileSync(file, html);
  console.log('Pre-rendered ' + slug + ': ' + (root.innerHTML.match(/<article>/g) || []).length + ' cards');
}
