document.addEventListener('DOMContentLoaded', function() {
    // Rotating Vault Door Animation
    const lockDetails = document.querySelector('#lockDetails');
    if (lockDetails) {
        lockDetails.style.animation = 'rotate 60s linear infinite';
    }

    // Lottery Machine Animation
    function animateLotteryMachine() {
        const tokens = document.querySelectorAll('.token');
        tokens.forEach(token => {
            token.style.animation = 'none';
            token.offsetHeight; // Trigger reflow
            token.style.animation = null;
        });
    }

    // Run lottery animation every 5 seconds
    setInterval(animateLotteryMachine, 5000);

    // Prize Showcase Animation
    const prizeMain = document.querySelector('.prize-main');
    if (prizeMain) {
        prizeMain.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        prizeMain.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});