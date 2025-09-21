document.addEventListener('DOMContentLoaded', function() {
    // --- Код для меню (залишається без змін) ---
    const menuToggle = document.getElementById('menu-toggle');
    const fullscreenMenu = document.getElementById('fullscreen-menu');

    if (menuToggle && fullscreenMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('is-active');
            fullscreenMenu.classList.toggle('is-active');
        });
    }

    // === НОВИЙ КОД: АНІМАЦІЯ ПРОКРУТКИ З GSAP ===

    // Реєструємо плагін ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // === ОНОВЛЕНИЙ КОД: ПЛАВНЕ ЗНИКНЕННЯ ГОЛОВНОГО ЕКРАНУ БЕЗ ЗУПИНКИ ===
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: ".hero-scene",      // Тригер - сам головний екран
            start: "top top",            // Починаємо анімацію, як тільки користувач починає скролити
            end: "center top",           // Закінчуємо анімацію, коли центр екрану досягає верху
            scrub: 1,
        },
        opacity: 0,
        y: -100, // Плавно зміщуємо напис вгору при зникненні
        scale: 0.95,
        ease: "power1.inOut"
    });

    // === НОВИЙ КОД: СТВОРЕННЯ 3D-СЦЕНИ З THREE.JS ===
    if (document.getElementById('bg-canvas')) {
        // 1. Налаштування сцени, камери та рендерера
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg-canvas'),
            alpha: true // Робимо фон рендерера прозорим
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);

        // 2. Створення геометрії та матеріалу для кристалів
        const geometry = new THREE.IcosahedronGeometry(1, 0);
        const material = new THREE.MeshStandardMaterial({
            color: 0xa9a9a9,
            metalness: 0.8,
            roughness: 0.2,
            transparent: true,
            opacity: 0.5
        });

        // 3. Створення групи кристалів
        const crystals = new THREE.Group();
        for (let i = 0; i < 100; i++) {
            const mesh = new THREE.Mesh(geometry, material);
            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
            mesh.position.set(x, y, z);
            const [rx, ry, rz] = Array(3).fill().map(() => Math.random() * Math.PI);
            mesh.rotation.set(rx, ry, rz);
            const scale = Math.random() * 2 + 0.5;
            mesh.scale.set(scale, scale, scale);
            crystals.add(mesh);
        }
        scene.add(crystals);

        // 4. Додавання освітлення
        const pointLight1 = new THREE.PointLight(0x8E78FF, 2);
        pointLight1.position.set(20, 20, 20);
        const pointLight2 = new THREE.PointLight(0x2A9DFF, 1.5);
        pointLight2.position.set(-20, -20, -20);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(pointLight1, pointLight2, ambientLight);

        // 5. Анімація
        function animate() {
            requestAnimationFrame(animate);
            crystals.rotation.x += 0.0005;
            crystals.rotation.y += 0.0005;
            renderer.render(scene, camera);
        }
        animate();

        // 6. Адаптивність
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    // === ОНОВЛЕНИЙ КОД: АНІМАЦІЯ ПЛАВНОЇ "ЕСТАФЕТИ" МІЖ БЛОКАМИ ===

    // 1. Анімація ЗНИКНЕННЯ для першого блоку
    gsap.to("#concept", {
        scrollTrigger: {
            trigger: "#concept",
            start: "top center", // Анімація починається, коли ВЕРХ блоку досягає ЦЕНТРУ екрану
            end: "bottom center",// Анімація закінчується, коли НИЗ блоку досягає ЦЕНТРУ екрану
            scrub: 1,
        },
        opacity: 0,
        scale: 0.95,
        y: -50 // Трохи піднімаємо блок, щоб пришвидшити його вихід з екрану
    });

    // 2. Анімація ПОЯВИ для блоку меню
    gsap.from("#menu", {
        scrollTrigger: {
            trigger: "#menu",
            start: "top bottom", // Анімація починається, коли ВЕРХ блоку з'являється ВНИЗУ екрану
            end: "top center",  // Анімація закінчується, коли ВЕРХ блоку досягає ЦЕНТРУ екрану
            scrub: 1,
        },
        opacity: 0,
        scale: 0.95,
        y: 50 // Починаємо рух трохи нижче і піднімаємо блок на місце
    });

    // === НОВИЙ КОД: ЛОГІКА ДЛЯ МЕНЮ-АКОРДЕОНУ ===
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const summary = item.querySelector('.menu-item-summary');
        
        summary.addEventListener('click', () => {
            // Перевіряємо, чи цей пункт вже відкритий
            const isExpanded = item.classList.contains('is-expanded');

            // Спочатку закриваємо всі відкриті пункти
            menuItems.forEach(otherItem => {
                otherItem.classList.remove('is-expanded');
            });

            // Якщо цей пункт був закритий, відкриваємо його
            if (!isExpanded) {
                item.classList.add('is-expanded');
            }
        });
    });

}); // ЦЕ ЗАКРИВАЮЧА ДУЖКА DOMContentLoaded