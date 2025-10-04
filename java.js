// ========== AOS Animation ==========
AOS.init({
  duration: 1200,
  once: true
});

// ========== Toggle Menu for Mobile ==========
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ========== Form Submit (وهمية) ==========
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // رسالة نجاح أنيقة بدل alert
    alert("✅ تم إرسال الرسالة بنجاح!");
    form.reset();
  });
}

// ========== Video Sound Toggle ==========
const video = document.getElementById("myVideo");
const soundIconWrapper = document.getElementById("soundIcon");

if (video && soundIconWrapper) {
  const soundIcon = soundIconWrapper.querySelector("i");

  soundIconWrapper.addEventListener("click", () => {
    video.muted = !video.muted;
    soundIcon.classList.toggle("fa-volume-mute", video.muted);
    soundIcon.classList.toggle("fa-volume-up", !video.muted);
  });
}
