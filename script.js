// Simple animation effect
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        sec.style.opacity = 0;
        setTimeout(() => {
            sec.style.transition = "opacity 1s";
            sec.style.opacity = 1;
        }, 300);
    });
});
