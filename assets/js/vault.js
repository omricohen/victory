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

    // FAQ Interaction
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.fas');
        
        question.addEventListener('click', () => {
            // Close other open FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    otherItem.querySelector('.fas').classList.remove('fa-minus');
                    otherItem.querySelector('.fas').classList.add('fa-plus');
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            const isOpen = answer.style.maxHeight;
            answer.style.maxHeight = isOpen ? null : `${answer.scrollHeight}px`;
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
            item.classList.toggle('active');
        });
    });
});