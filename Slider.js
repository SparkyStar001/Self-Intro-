window.addEventListener("load", () => {

    const scrollers = document.querySelectorAll(".Scroller");

    scrollers.forEach(scroller => {

        let speed = 2;
        let position = 0;

        function getCardWidth(card) {
            const style = window.getComputedStyle(scroller);
            const gap = parseFloat(style.gap) || 0;
            return card.offsetWidth + gap;
        }

        function animate() {
            position -= speed;
            scroller.style.transform = `translateX(${position}px)`;

            const firstCard = scroller.children[0];
            const firstCardWidth = getCardWidth(firstCard);

            if (Math.abs(position) >= firstCardWidth) {
                scroller.appendChild(firstCard);
                position += firstCardWidth;
                scroller.style.transform = `translateX(${position}px)`;
            }

            requestAnimationFrame(animate);
        }

        animate();

        scroller.addEventListener("mouseenter", () => speed = 0);
        scroller.addEventListener("mouseleave", () => speed = 1);

    });

});
