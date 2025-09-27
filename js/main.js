// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Очищуємо URL від #
    if (window.location.hash) {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    
    // Знаходимо всі елементи
    const preloader = document.getElementById('preloader');
    const introVideo = document.getElementById('intro-video');
    const enterButton = document.getElementById('enter-button');
    const planetNavContainer = document.getElementById('planet-navigation'); // Змінено назву для ясності
    const planets = document.querySelectorAll('.planet');
    const contentSections = document.querySelectorAll('.content-section');
    const backButtons = document.querySelectorAll('.back-button');
    const ctaButton = document.querySelector('.cta-button');

    // Логіка для preloader'а
    if (preloader && introVideo) {
        introVideo.addEventListener('canplay', function() {
            preloader.classList.add('loaded');
        });
    }
    
    // --- !!! ОСНОВНА ЗМІНА ТУТ !!! ---
    // Логіка для кнопки "ENTER"
    if (enterButton && preloader && planetNavContainer) {
        enterButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 1. Запускаємо анімацію зникнення preloader'а (збільшення та прозорість)
            preloader.classList.add('hidden');
            
            // 2. ОДНОЧАСНО запускаємо анімацію появи планет (збільшення та видимість)
            planetNavContainer.classList.add('visible');
        });
    }

    // Логіка для кнопки "Резервувати шаттл"
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Тут можна додати логіку для бронювання
            // Наприклад, відкрити модальне вікно або перенаправити на форму бронювання
            alert('Функція бронювання шаттла буде додана пізніше!');
        });
    }

    // Логіка для планет (залишається без змін)
    if (planets.length > 0 && planetNavContainer) {
    planets.forEach(planet => {
        planet.addEventListener('click', function(e) {
                e.preventDefault();
            const targetId = this.dataset.target;
                const backgroundUrl = this.dataset.background;
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                    history.pushState(null, null, '#' + targetId);
                    targetSection.style.backgroundImage = `url(${backgroundUrl})`;
                targetSection.classList.remove('is-hidden');
                    planetNavContainer.classList.remove('visible'); // Ховаємо, прибираючи клас visible
            }
        });
    });
    }

    // Логіка для кнопок "назад" (оновлено)
    if (backButtons.length > 0 && planetNavContainer) {
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
                const parentSection = this.closest('.content-section');
                parentSection.classList.add('is-hidden');
                history.pushState("", document.title, window.location.pathname + window.location.search);
                setTimeout(() => { parentSection.style.backgroundImage = 'none'; }, 800);
                planetNavContainer.classList.add('visible'); // Показуємо, додаючи клас visible
        });
    });
    }

    // Логіка для паралаксу (оптимізована з throttling та апаратним прискоренням)
    if (planetNavContainer) {
        // Функція для "проріджування" подій
        function throttle(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            }
        }

        // Функція, яка виконує анімацію
        function handleMouseMove(e) {
            if (planetNavContainer.classList.contains('visible')) { // Анімація працює тільки коли планети видимі
                const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
                const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
                const maxRotation = 10;
                
                // Використовуємо requestAnimationFrame для ще більшої плавності
                window.requestAnimationFrame(function() {
                    planetNavContainer.style.transform = `scale(1) rotateY(${x * maxRotation}deg) rotateX(${-y * maxRotation}deg)`;
                });
            }
        }

        // Запускаємо анімацію ТІЛЬКИ на десктопі і з "проріджуванням"
        if (window.innerWidth > 768) {
            document.addEventListener('mousemove', throttle(handleMouseMove, 16));
        }
        
        // Логіка для повернення в початкове положення при виході курсора
        planetNavContainer.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg) rotateX(0deg)';
        });
    }

    // Логіка для кліків на заголовки категорій меню
    const categoryTitles = document.querySelectorAll('.category-title');

    categoryTitles.forEach(title => {
        title.addEventListener('click', function() {
            // Знаходимо контейнер з пунктами меню, який є наступним елементом
            const itemsContainer = this.nextElementSibling;

            // Перемикаємо клас 'is-open' для показу/приховування
            if (itemsContainer) {
                itemsContainer.classList.toggle('is-open');
            }
        });
    });

    // Логіка для модального вікна страв
    const modal = document.getElementById('dish-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');

    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Отримуємо дані з data-атрибутів
            const title = this.dataset.title;
            const description = this.dataset.description;
            const price = this.dataset.price;
            const image = this.dataset.image;

            // Заповнюємо модальне вікно
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalPrice.textContent = price;
            modalImage.src = image;

            // Показуємо модальне вікно
            modal.classList.add('is-visible');
        });
    });

    // Закриваємо модальне вікно при кліку на фон
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.remove('is-visible');
            }
        });
    }

    // Закриваємо модальне вікно клавішею Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal && modal.classList.contains('is-visible')) {
            modal.classList.remove('is-visible');
        }
    });
});