
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
    if (video.muted) {
      // فك الكتم وتشغيل الصوت
      video.muted = false;
      video.volume = 1.0; // تأكد من رفع الصوت
      soundIcon.classList.remove("fa-volume-mute");
      soundIcon.classList.add("fa-volume-up");

      // بعض المتصفحات تحتاج إعادة تشغيل بعد فك الكتم
      video.play().catch(() => {
        console.warn("المتصفح منع التشغيل التلقائي، اضغط مرة أخرى.");
      });
    } else {
      // كتم الصوت
      video.muted = true;
      soundIcon.classList.remove("fa-volume-up");
      soundIcon.classList.add("fa-volume-mute");
    }
  });
}
