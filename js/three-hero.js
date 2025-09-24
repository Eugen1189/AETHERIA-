document.addEventListener('DOMContentLoaded', function() {
    if (typeof THREE === 'undefined') {
        console.error('Three.js не завантажений!');
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.querySelector('#bg-canvas');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(5); // Розміщуємо камеру ближче до центру

    // --- Створюємо частинки (зірки) ---
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000; // Кількість зірок

    const posArray = new Float32Array(particlesCount * 3); // xyz, xyz, xyz...

    for (let i = 0; i < particlesCount * 3; i++) {
        // Розміщуємо частинки випадково у кубі
        posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05, // Розмір кожної зірки
        color: 0xffffff
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // --- Інтерактивність (реакція на мишу) ---
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    // --- Анімація ---
    const clock = new THREE.Clock();
    function animate() {
        const elapsedTime = clock.getElapsedTime();
        
        // Рух частинок, що створює ефект польоту
        particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00008);
        particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
        
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

    // --- Адаптація під розмір вікна ---
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});