document.addEventListener("DOMContentLoaded", () => {
    const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!revealElements.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
        revealElements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    revealElements.forEach((element, index) => {
        element.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -8% 0px",
        }
    );

    revealElements.forEach((element) => observer.observe(element));
});
