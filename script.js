// Small interactions for Nency's portfolio.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Open/close the mobile navigation menu.
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  // Close the menu after a navigation link is selected.
  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

// Keep the copyright year up to date automatically.
const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Warn the owner if the sample GitHub link has not been replaced.
const githubLink = document.querySelector("#github-link");
const githubWarning = document.querySelector("#github-warning");
if (githubLink && githubWarning) {
  githubLink.addEventListener("click", (event) => {
    if (githubLink.href.includes("REPLACE-WITH-YOUR-USERNAME")) {
      event.preventDefault();
      githubWarning.textContent =
        "Before this link can work, replace the placeholder with your GitHub username in index.html.";
      githubWarning.setAttribute("role", "status");
    }
  });
}
