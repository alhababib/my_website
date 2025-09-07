function sendEmail() {
  const adminEmail = "momohhaz1az2@gmail.com"; // ضع بريدك هنا
  const subject = encodeURIComponent("رسالة من زائر الموقع"); // موضوع الرسالة
  const body = encodeURIComponent("مرحبًا، اكتب رسالتك هنا..."); // نص الرسالة المسبق (اختياري)

  // رابط لفتح Gmail مباشرة مع تعبئة البريد والموضوع والنص
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${adminEmail}&su=${subject}&body=${body}`;

  // يفتح Gmail في تبويب جديد
  window.open(gmailUrl, "_blank");
}