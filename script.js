document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesBtn');
    const noButton = document.getElementById('noBtn');
    const messageDiv = document.getElementById('message');
    const letterDiv = document.getElementById('letter');
    const messageTexts = document.querySelectorAll('.message-text');
    let yesButtonSize = 16;

    noButton.addEventListener('click', () => {
        yesButtonSize += 10; // Increase the size of the "Yes" button
        yesButton.style.fontSize = yesButtonSize + 'px';

        // Show the message div with scattered texts
        messageDiv.classList.remove('hidden');

        // Scatter text
        messageTexts.forEach(text => {
            // Generate random position within the container
            const x = Math.floor(Math.random() * (messageDiv.clientWidth - 100)); // Width minus text width
            const y = Math.floor(Math.random() * (messageDiv.clientHeight - 50)); // Height minus text height

            // Apply position and make text visible
            text.style.transform = `translate(${x}px, ${y}px)`;
            text.style.opacity = 1;
        });
    });

    yesButton.addEventListener('click', () => {
        // Hide the message and show the letter
        messageDiv.classList.add('hidden');
        letterDiv.classList.remove('hidden');
    });
});