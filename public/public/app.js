importLayout();

async function importLayout() {
  const root = document.getElementById("app-root");
  if (!root) return;

  const layoutHtml = await fetch("../src/ui/layout.html").then((r) => r.text());
  root.innerHTML = layoutHtml;

  const navHtml = await fetch("../src/ui/navigation.html").then((r) => r.text());
  const navTarget = document.querySelector("[data-slot='navigation']");
  if (navTarget) navTarget.innerHTML = navHtml;

  const componentsModule = await import("../src/ui/components.js");
  if (componentsModule && componentsModule.initUI) {
    componentsModule.initUI();
  }
}
