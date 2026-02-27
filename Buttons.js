document.addEventListener("DOMContentLoaded", () => {
            let cards = document.querySelectorAll('.button');
            cards.forEach(button => {
                button.addEventListener('mousemove', e => {
                    let rect = button.getBoundingClientRect();
                    let x = e.clientX - rect.left;
                    let y = e.clientY - rect.top;

                    button.style.setProperty("--x", `${x}px`);
                    button.style.setProperty("--y", `${y}px`);
                });
            });
        });
