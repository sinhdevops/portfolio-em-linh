(() => {
  if (window.__portfonLocalFormFallback) return;
  window.__portfonLocalFormFallback = true;

  document.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches("form.framer-u9kiuk")) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    let status = form.querySelector("[data-clone-form-status]");
    if (!status) {
      status = document.createElement("p");
      status.dataset.cloneFormStatus = "";
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      status.style.cssText = "margin:12px 0 0;padding:12px 16px;border-radius:12px;background:#f2f0eb;color:#161616;font:14px/1.5 inherit";
      form.append(status);
    }
    status.textContent = "This local preview does not send form submissions.";
  }, true);
})();
