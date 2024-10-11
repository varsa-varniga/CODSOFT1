document.querySelectorAll('.circular-progress').forEach(progress => {
    const percentage = progress.dataset.percentage;
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100 * circumference);

    progress.querySelector('.progress').style.strokeDasharray = `${circumference} ${circumference}`;
    progress.querySelector('.progress').style.strokeDashoffset = offset;
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offset = 100; 

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

const textArray = ["FULL STACK DEVELOPER", "BLOG WRITER", "YOUTUBER", "FREELANCER"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let typingSpeed = 150; 
let deletingSpeed = 70; 

function typeEffect() {
  const typewriterElement = document.querySelector('.typewriter');

  if (charIndex < textArray[textIndex].length) {
    currentText += textArray[textIndex].charAt(charIndex);
    typewriterElement.textContent = currentText;
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(deleteEffect, 500); 
  }
}

function deleteEffect() {
  const typewriterElement = document.querySelector('.typewriter');

  if (charIndex > 0) {
    currentText = currentText.slice(0, -1);
    typewriterElement.textContent = currentText;
    charIndex--;
    setTimeout(deleteEffect, deletingSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length; 
    setTimeout(typeEffect, 500); 
  }
}

document.addEventListener("DOMContentLoaded", function() {
  typeEffect(); 
});

