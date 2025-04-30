console.log("تم ربط ملف JavaScript بنجاح!");

// مثال بسيط لتغيير نص الزر عند التhover (يمكنك توسيعه)
const primaryButtons = document.querySelectorAll('.primary-button');

primaryButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.textContent = 'جاري التواصل...';
    });

    button.addEventListener('mouseout', () => {
        button.textContent = 'تواصل معنا الآن';
    });
});

// يمكنك إضافة المزيد من التفاعلات مثل:
// - التحقق من صحة النموذج قبل الإرسال
// - تأثيرات التمرير السلس بين الأقسام
// - عرض/إخفاء عناصر ديناميكيًا