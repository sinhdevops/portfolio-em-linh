(() => {
  // These exported pages contain their own updated HTML. Framer's client router
  // reconstructs the original template instead of loading those page changes.
  // Handle local page links before its router sees the click.
  if (window.__mylinkDocumentNavigation) return;
  window.__mylinkDocumentNavigation = true;
  // Portfolio detail pages moved to clearer URLs, but Framer still renders links
  // from the original CMS slugs. Rewrite those hrefs so hover/copy show the new URL.
  const renamedSlugs = {'lumora-beauty-rebrand':'web-design','aether-mobile-experience':'app-design','virex-marketing-website':'design-system','nova-saas-platform':'ai-film-creation-tools'};
  const slugPattern = /my-portfolio\/(lumora-beauty-rebrand|aether-mobile-experience|virex-marketing-website|nova-saas-platform)(?=\/?$)/;
  const rewriteLinks = () => document.querySelectorAll('a[href*="my-portfolio/"]').forEach(a => {
    const href = a.getAttribute('href');
    if (slugPattern.test(href)) a.setAttribute('href', href.replace(slugPattern, (_, s) => 'my-portfolio/' + renamedSlugs[s]));
  });
  rewriteLinks();
  new MutationObserver(rewriteLinks).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
  window.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.composedPath().find(node => node instanceof HTMLAnchorElement);
    if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    // Header "Experience" opens the standalone experience page.
    if (link.textContent.trim() === 'Experience' && location.pathname !== '/experience' && location.pathname !== '/experience/') {
      event.preventDefault();
      event.stopImmediatePropagation();
      return location.assign('/experience');
    }
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    const destination = new URL(href, document.baseURI);
    if (!['http:', 'https:'].includes(destination.protocol) || destination.origin !== location.origin) return;
    if (destination.pathname.startsWith('/assets/') || /\.[a-z0-9]+$/i.test(destination.pathname) && !/\.html$/i.test(destination.pathname)) return;
    if (destination.pathname === location.pathname && destination.search === location.search) return;
    const m = destination.pathname.match(/^\/my-portfolio\/([^/]+)\/?$/);
    if (m && renamedSlugs[m[1]]) destination.pathname = '/my-portfolio/' + renamedSlugs[m[1]];
    event.preventDefault();
    event.stopImmediatePropagation();
    location.assign(destination.href);
  }, true);
})();
