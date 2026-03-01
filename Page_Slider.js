const slides = document.querySelectorAll(".slide");
let current = 0;
let isScrolling = false;

function allowSlideScroll() {
    return window.innerWidth >= 320;
}

// WHEEL SCROLL
window.addEventListener("wheel", (e) => {

    if (!allowSlideScroll()) return;

    e.preventDefault();

    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0 && current < slides.length - 1) {
        current++;
    } else if (e.deltaY < 0 && current > 0) {
        current--;
    }

    slides[current].scrollIntoView({ behavior: "smooth" });
    setTimeout(() => isScrolling = false, 1000);

}, { passive: false });


// KEYBOARD NAVIGATION
window.addEventListener("keydown", (e) => {

    if (!allowSlideScroll()) return;

    if (isScrolling) return;

    if (["ArrowDown", "PageDown"].includes(e.key) && current < slides.length - 1) {
        current++;
    } else if (["ArrowUp", "PageUp"].includes(e.key) && current > 0) {
        current--;
    }

    slides[current].scrollIntoView({ behavior: "smooth" });

    isScrolling = true;
    setTimeout(() => isScrolling = false, 1000);
});


// TOUCH SWIPE
let startY = 0;

window.addEventListener("touchstart", (e) => {
    if (!allowSlideScroll()) return;
    startY = e.touches[0].clientY;
});

window.addEventListener("touchend", (e) => {

    if (!allowSlideScroll()) return;

    const endY = e.changedTouches[0].clientY;
    const diffY = startY - endY;

    if (Math.abs(diffY) < 50 || isScrolling) return;
    isScrolling = true;

    if (diffY > 0 && current < slides.length - 1) {
        current++;
    } else if (diffY < 0 && current > 0) {
        current--;
    }

    slides[current].scrollIntoView({ behavior: "smooth" });
    setTimeout(() => isScrolling = false, 1000);
});