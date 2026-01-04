document.addEventListener('DOMContentLoaded', () => {
    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Style canvas to be fixed background
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';

    document.body.appendChild(canvas);

    let width, height;

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    resizeCanvas();

    // Generate stars
    const starCount = 200;
    const stars = [];

    function createStars() {
        stars.length = 0;
        for (let i = 0; i < starCount; i++) {
            const baseRadius = 0.6 + Math.random() * 1.4;
            const baseAlpha = 0.5 + Math.random() * 0.5;

            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                baseRadius: baseRadius,
                baseAlpha: baseAlpha,
                // Drifting velocity
                dx: (Math.random() - 0.5) * 0.2,
                dy: (Math.random() - 0.5) * 0.2,
                // Animation properties
                pulseSpeed: 0.02 + Math.random() * 0.03,
                pulseOffset: Math.random() * Math.PI * 2
            });
        }
    }

    createStars();

    let time = 0;

    function animate() {
        ctx.clearRect(0, 0, width, height);
        time += 1;

        stars.forEach(star => {
            star.x += star.dx;
            star.y += star.dy;

            if (star.x < 0) star.x = width;
            if (star.x > width) star.x = 0;
            if (star.y < 0) star.y = height;
            if (star.y > height) star.y = 0;

            const sizePhase = Math.sin(time * star.pulseSpeed + star.pulseOffset);
            const radius = star.baseRadius + (star.baseRadius * 0.15 * sizePhase);

            const alphaPhase = Math.sin(time * star.pulseSpeed + star.pulseOffset + 1);
            let alpha = star.baseAlpha + (star.baseAlpha * 0.3 * alphaPhase);

            if (alpha < 0) alpha = 0;
            if (alpha > 1) alpha = 1;

            // Draw Star
            ctx.beginPath();
            ctx.arc(star.x, star.y, Math.max(0, radius), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        resizeCanvas();
        createStars();
    });
});
