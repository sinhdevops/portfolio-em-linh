(() => {
  // These exported pages contain their own updated HTML. Framer's client router
  // reconstructs the original template instead of loading those page changes.
  // Handle local page links before its router sees the click.
  if (window.__mylinkDocumentNavigation) return;
  window.__mylinkDocumentNavigation = true;
  window.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.composedPath().find(node => node instanceof HTMLAnchorElement);
    if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    const destination = new URL(href, document.baseURI);
    if (!['http:', 'https:'].includes(destination.protocol) || destination.origin !== location.origin) return;
    if (destination.pathname.startsWith('/assets/') || /\.[a-z0-9]+$/i.test(destination.pathname) && !/\.html$/i.test(destination.pathname)) return;
    if (destination.pathname === location.pathname && destination.search === location.search) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    location.assign(destination.href);
  }, true);
})();
