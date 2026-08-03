// ==========================================================
// MENU MOBILE - Injection hamburger + overlay
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".site-header .container");
  if (!container) return;

  const navbar = container.querySelector(".navbar");
  if (!navbar) return;

  // Inject hamburger button
  const toggle = document.createElement("button");
  toggle.className = "menu-toggle";
  toggle.setAttribute("aria-label", "Ouvrir le menu");
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = "<span></span><span></span><span></span>";
  container.appendChild(toggle);

  // Inject overlay
  const overlay = document.createElement("div");
  overlay.className = "mobile-overlay";
  overlay.setAttribute("aria-hidden", "true");
  document.body.appendChild(overlay);

  function openMenu() {
    navbar.classList.add("active");
    overlay.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fermer le menu");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Ouvrir le menu");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    navbar.classList.contains("active") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navbar.classList.contains("active")) {
      closeMenu();
    }
  });
});
