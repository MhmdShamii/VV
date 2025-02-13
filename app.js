// Create glowing particles
const particlesContainer = document.querySelector('.particles');

// Add regular particles
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('span');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particlesContainer.appendChild(particle);
}

// Add "I love you" particles
for (let i = 0; i < 10; i++) {
    const loveParticle = document.createElement('span');
    loveParticle.classList.add('love');
    loveParticle.textContent = 'I love you';
    loveParticle.style.left = `${Math.random() * 100}%`;
    loveParticle.style.animationDelay = `${Math.random() * 10}s`;
    particlesContainer.appendChild(loveParticle);
}