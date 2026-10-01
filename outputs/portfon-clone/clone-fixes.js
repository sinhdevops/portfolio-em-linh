(() => {
  const cdn = "https://framerusercontent.com";
  const localAssetRoot = `${location.origin}/assets/`;
  const rewrite = (value) => typeof value === "string" ? value.replaceAll(cdn, localAssetRoot) : value;
  const editorUrl = (value) => typeof value === "string" && /^https?:\/\/framer\.com\/edit(?:[/?]|$)/i.test(value);

  const setAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, value) {
    const key = String(name).toLowerCase();
    if (this instanceof HTMLIFrameElement && key === "src" && editorUrl(String(value))) return;
    return setAttribute.call(this, name, ["src", "srcset", "poster", "style"].includes(key) ? rewrite(String(value)) : value);
  };

  for (const [prototype, property] of [
    [HTMLImageElement.prototype, "src"],
    [HTMLImageElement.prototype, "srcset"],
    [HTMLSourceElement.prototype, "src"],
    [HTMLSourceElement.prototype, "srcset"],
    [HTMLVideoElement.prototype, "poster"],
  ]) {
    const descriptor = Object.getOwnPropertyDescriptor(prototype, property);
    if (!descriptor?.set || !descriptor?.get) continue;
    Object.defineProperty(prototype, property, {
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable,
      get: descriptor.get,
      set(value) { descriptor.set.call(this, rewrite(String(value))); },
    });
  }

  const cssSetProperty = CSSStyleDeclaration.prototype.setProperty;
  CSSStyleDeclaration.prototype.setProperty = function (name, value, priority) {
    return cssSetProperty.call(this, name, rewrite(String(value)), priority);
  };

  const htmlDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML");
  if (htmlDescriptor?.set && htmlDescriptor?.get) {
    Object.defineProperty(Element.prototype, "innerHTML", {
      configurable: htmlDescriptor.configurable,
      enumerable: htmlDescriptor.enumerable,
      get: htmlDescriptor.get,
      set(value) { htmlDescriptor.set.call(this, rewrite(String(value))); },
    });
  }

  const clean = (node) => {
    if (!(node instanceof Element)) return;
    if (node instanceof HTMLIFrameElement && editorUrl(node.getAttribute("src") || "")) {
      node.remove();
      return;
    }
    for (const attribute of ["src", "srcset", "poster", "style"]) {
      const value = node.getAttribute(attribute);
      if (value && value.includes(cdn)) setAttribute.call(node, attribute, rewrite(value));
    }
    for (const child of node.querySelectorAll?.("[src], [srcset], [poster], [style]") || []) clean(child);
  };
  new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === "attributes") clean(record.target);
      for (const node of record.addedNodes || []) clean(node);
    }
  }).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ["src", "srcset", "poster", "style"] });
  clean(document.documentElement);
})();
