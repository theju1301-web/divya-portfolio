
// ========================================
// DIVYA S — PORTFOLIO INTERACTIONS
// ========================================

// 1. MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuBtn.textContent = isOpen ? "×" : "☰";
});

// Close the menu after selecting a section.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation menu");
    menuBtn.textContent = "☰";
  });
});

// 2. SCROLL REVEAL ANIMATIONS

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => {
    observer.observe(item);
  });
} else {
  // Fallback for browsers without IntersectionObserver.
  revealItems.forEach((item) => {
    item.classList.add("visible");
  });
}

// 3. AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();

// 4. CONTACT FORM
//
// IMPORTANT:
// Replace this placeholder with your actual email address.
// This form opens the visitor's default email application.
// It does not send emails directly from the website.

const portfolioEmail = "hello@example.com";

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("senderName").value.trim();
  const email = document.getElementById("senderEmail").value.trim();
  const message = document.getElementById("senderMessage").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all the fields before sending your message.");
    return;
  }

  const subject = encodeURIComponent(
    "Portfolio message from " + name
  );

  const body = encodeURIComponent(
    "Hi Divya,\n\n" +
    message +
    "\n\nFrom: " + name +
    "\nReply to: " + email
  );

  const mailtoLink =
    "mailto:" + portfolioEmail +
    "?subject=" + subject +
    "&body=" + body;

  window.location.href = mailtoLink;
});

/* 💕 Floating hearts & sparkles */
document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches) return;

  const decor = document.createElement("div");
  decor.className = "dreamy-decor";
  decor.setAttribute("aria-hidden", "true");
  document.body.appendChild(decor);

  const symbols = ["♡", "♥", "💕", "♡", "♥"];
;

  for (let i = 0; i < 16; i++) {
    const item = document.createElement("span");

    item.className = "dreamy-item";
    item.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    item.style.left = Math.random() * 100 + "%";
    item.style.fontSize =
      (12 + Math.random() * 14) + "px";

    item.style.animationDuration =
      (10 + Math.random() * 12) + "s";

    item.style.animationDelay =
      (-Math.random() * 20) + "s";

    decor.appendChild(item);
  }
});

