function initCoversAnimation() {
    // Отримуємо всі зображення у секції covers-section
    const coversImages = document.querySelectorAll('.covers-image');

    // Створюємо Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Додаємо клас 'animated', коли зображення з'являється у viewport
                entry.target.classList.add('animated');
                entry.target.classList.remove('hidden');

                // Можна припинити спостереження за цим елементом
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Запуск анімації, коли 20% елемента потрапляє у viewport

    // Додаємо всі зображення до спостереження
    coversImages.forEach(image => {
        observer.observe(image);
    });
}

// section covers 
document.addEventListener('DOMContentLoaded', () => {
    initCoversAnimation();  // Викликаємо анімацію covers
});