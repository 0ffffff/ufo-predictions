document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.ripple-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;

            const circle = document.createElement('span');
            circle.classList.add('ripple');
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;

            this.appendChild(circle);

            setTimeout(() => {
                circle.remove();
            }, 600); // Remove after animation
        });
    });
});
