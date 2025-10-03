// ========== AOS Animation ==========
AOS.init({
  duration: 1200,
  once: true
});

// ========== Toggle Menu for Mobile ==========
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector("nav ul");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

// ========== Form Submit (وهمية) ==========
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("تم إرسال الرسالة بنجاح ✅ (وهمية)");
    form.reset();
  });
}

// ========== Video Sound Toggle ==========
const video = document.getElementById("myVideo");
const soundIconWrapper = document.getElementById("soundIcon");

if (video && soundIconWrapper) {
  const soundIcon = soundIconWrapper.querySelector("i");

  soundIconWrapper.addEventListener("click", () => {
    if (video.muted) {
      video.muted = false;
      soundIcon.classList.remove("fa-volume-mute");
      soundIcon.classList.add("fa-volume-up");
    } else {
      video.muted = true;
      soundIcon.classList.remove("fa-volume-up");
      soundIcon.classList.add("fa-volume-mute");
    }
  });
}
