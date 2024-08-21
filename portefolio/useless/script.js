document.addEventListener('DOMContentLoaded', () => {
    const bubbleWrap = document.getElementById('bubble-wrap');
    const resetButton = document.getElementById('reset-button');
    const popSound = document.getElementById('pop-sound');

    function createBubbles() {
        bubbleWrap.innerHTML = '';
        const bubblesPerRow = Math.floor(bubbleWrap.clientWidth / 60); // 50px bubble + 10px gap
        const bubblesPerColumn = Math.floor(bubbleWrap.clientHeight / 60);
        const totalBubbles = bubblesPerRow * bubblesPerColumn;

        for (let i = 0; i < totalBubbles; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.addEventListener('click', () => {
                if (!bubble.classList.contains('popped')) {
                    bubble.classList.add('popped');
                    popSound.currentTime = 0; // Reset sound to start
                    popSound.play();
                }
            });
            bubbleWrap.appendChild(bubble);
        }
    }

    resetButton.addEventListener('click', () => {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(bubble => bubble.classList.remove('popped'));
    });

    createBubbles();
    window.addEventListener('resize', createBubbles);
});
