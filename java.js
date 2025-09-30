
// رسالة عند الإرسال
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ تم إرسال رسالتك بنجاح!");
});