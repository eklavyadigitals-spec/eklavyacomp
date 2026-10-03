/**
 * Eklavya Computers - Main JavaScript Engine
 * Centralized Contact Actions, Accordion & Mobile Navigation
 */

document.addEventListener("DOMContentLoaded", () => {
  initContactBindings();
  initMobileMenu();
  initDesktopDropdown();
  initFaqAccordion();
  initHeaderScroll();
});

/**
 * Binds all Call, WhatsApp, and Direction actions to DOM elements using EKLAVYA_CONFIG
 */
function initContactBindings() {
  const config = typeof EKLAVYA_CONFIG !== "undefined" ? EKLAVYA_CONFIG : {
    PHONE_DISPLAY: "+91 98901 17281",
    PHONE_TEL: "+919890117281",
    WHATSAPP_RAW: "919890117281",
    ADDRESS_DISPLAY: "63, Deshmukh Nagar, Shivaji Nagar Road, Garkheda Parisar, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431005",
    BUSINESS_HOURS: "Monday – Saturday: 8:00 AM – 8:00 PM (Batch timings on enquiry)",
    GOOGLE_MAPS_URL: "https://maps.app.goo.gl/Bx7hT397SziSuRh26",
    WHATSAPP_MESSAGES: {
      default: "Hello, I would like to know more about the courses at Eklavya Computers."
    }
  };

  // 1. Phone Call Actions
  const callButtons = document.querySelectorAll('[data-action="call"]');
  callButtons.forEach(btn => {
    btn.setAttribute("href", `tel:${config.PHONE_TEL}`);
    const phoneTextSpan = btn.querySelector('[data-bind="phone-text"]');
    if (phoneTextSpan) {
      phoneTextSpan.textContent = config.PHONE_DISPLAY;
    }
  });

  // 2. WhatsApp Enquiry Actions
  const whatsappButtons = document.querySelectorAll('[data-action="whatsapp"]');
  whatsappButtons.forEach(btn => {
    const msgKey = btn.getAttribute("data-msg-key");
    let message = "";

    if (msgKey && config.WHATSAPP_MESSAGES && config.WHATSAPP_MESSAGES[msgKey]) {
      message = config.WHATSAPP_MESSAGES[msgKey];
    } else {
      message = btn.getAttribute("data-msg") || (config.WHATSAPP_MESSAGES && config.WHATSAPP_MESSAGES.default) || "Hello, I would like to know more about the courses at Eklavya Computers.";
    }

    const encodedMsg = encodeURIComponent(message);
    btn.setAttribute("href", `https://wa.me/${config.WHATSAPP_RAW}?text=${encodedMsg}`);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });

  // 3. Google Maps Direction Actions
  const directionButtons = document.querySelectorAll('[data-action="directions"]');
  directionButtons.forEach(btn => {
    btn.setAttribute("href", config.GOOGLE_MAPS_URL);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });

  // 4. Static Placeholders Data Binding
  document.querySelectorAll('[data-bind="phone-display"]').forEach(el => {
    el.textContent = config.PHONE_DISPLAY;
  });

  document.querySelectorAll('[data-bind="address-display"]').forEach(el => {
    el.textContent = config.ADDRESS_DISPLAY;
  });

  document.querySelectorAll('[data-bind="hours-display"]').forEach(el => {
    el.textContent = config.BUSINESS_HOURS;
  });

  // 5. Google Maps Iframe Embed Binding
  const mapIframe = document.querySelector(".map-embed-pane iframe");
  if (mapIframe && config.GOOGLE_MAPS_EMBED_URL) {
    mapIframe.setAttribute("src", config.GOOGLE_MAPS_EMBED_URL);
  }
}

/**
 * Accessible Mobile Navigation Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  
  if (!toggleBtn || !mobileDrawer) return;

  function toggleMenu(open) {
    const willOpen = typeof open === "boolean" ? open : !mobileDrawer.classList.contains("open");
    mobileDrawer.classList.toggle("open", willOpen);
    toggleBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    
    // Toggle Burger / Close Icon
    const icon = toggleBtn.querySelector("svg");
    if (icon) {
      if (willOpen) {
        icon.innerHTML = `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`;
      } else {
        icon.innerHTML = `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
      }
    }
  }

  toggleBtn.addEventListener("click", () => toggleMenu());

  // Handle mobile sub-nav group accordion toggle
  const groupToggles = mobileDrawer.querySelectorAll(".mobile-nav-group-toggle");
  groupToggles.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const group = btn.closest(".mobile-nav-group");
      if (group) {
        const isOpen = group.classList.toggle("open");
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
    });
  });

  // Close drawer on link click
  const drawerLinks = mobileDrawer.querySelectorAll("a");
  drawerLinks.forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}

/**
 * Accessible FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  
  faqItems.forEach((item, index) => {
    const questionBtn = item.querySelector(".faq-question");
    const answerDiv = item.querySelector(".faq-answer");
    if (!questionBtn || !answerDiv) return;

    // Set accessibility IDs if not present
    const qId = `faq-q-${index + 1}`;
    const aId = `faq-a-${index + 1}`;
    questionBtn.id = qId;
    questionBtn.setAttribute("aria-controls", aId);
    answerDiv.id = aId;
    answerDiv.setAttribute("aria-labelledby", qId);

    questionBtn.addEventListener("click", () => {
      const isExpanded = questionBtn.getAttribute("aria-expanded") === "true";
      
      // Close other accordions for compact clean browsing
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherBtn = otherItem.querySelector(".faq-question");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      // Toggle current
      item.classList.toggle("active", !isExpanded);
      questionBtn.setAttribute("aria-expanded", !isExpanded ? "true" : "false");
    });
  });
}

/**
 * Site Header Scroll Shadow Elevation
 */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/**
 * Desktop Navigation Dropdown with Hover Bridge and Debounce
 */
function initDesktopDropdown() {
  const dropdowns = document.querySelectorAll(".nav-item-dropdown");
  dropdowns.forEach(dropdown => {
    let leaveTimer = null;
    const toggle = dropdown.querySelector(".dropdown-toggle");
    
    dropdown.addEventListener("mouseenter", () => {
      if (leaveTimer) {
        clearTimeout(leaveTimer);
        leaveTimer = null;
      }
      dropdown.classList.add("open");
      if (toggle) toggle.setAttribute("aria-expanded", "true");
    });

    dropdown.addEventListener("mouseleave", () => {
      leaveTimer = setTimeout(() => {
        dropdown.classList.remove("open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }, 220); // 220ms grace window prevents hover dropping across gap
    });

    // Touch / Click toggle support
    if (toggle) {
      toggle.addEventListener("click", (e) => {
        if (window.innerWidth > 960) {
          const isOpen = dropdown.classList.contains("open");
          if (!isOpen) {
            e.preventDefault();
            dropdown.classList.add("open");
            toggle.setAttribute("aria-expanded", "true");
          }
        }
      });
    }
  });

  // Close when clicking anywhere outside
  document.addEventListener("click", (e) => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
        const toggle = dropdown.querySelector(".dropdown-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

