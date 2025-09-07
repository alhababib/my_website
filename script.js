function sendEmail() {
  const adminEmail = "momohhaz1az2@gmail.com"; // بريدك
  const subject = encodeURIComponent("رسالة من زائر الموقع");
  const body = encodeURIComponent("مرحبًا، اكتب رسالتك هنا...");
  
  // رابط لفتح Gmail مباشرة
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${adminEmail}&su=${subject}&body=${body}`;
  
  window.open(gmailUrl, "_blank"); // يفتح في تبويب جديد
}
