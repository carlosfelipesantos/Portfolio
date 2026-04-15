const titleText = "Carlos Felipe";
const textSequence = [
  "Estudante de ADS na Fatec",
  "Técnico em ADS",
  "Co-Fundador do Hermes Fretes®"
];

const titleEl = document.getElementById("typing-title");
const paragraphEl = document.getElementById("typing-paragraph");

let titleIndex = 0;
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeTitle() {
  if (titleIndex < titleText.length) {
    titleEl.textContent += titleText.charAt(titleIndex);
    titleIndex++;
    setTimeout(typeTitle, 50);
  } else {
    setTimeout(() => typeParagraph(), 300);
  }
}

function typeParagraph() {
  const currentText = textSequence[textIndex];

  if (!isDeleting) {
    paragraphEl.textContent += currentText.charAt(charIndex);
    charIndex++;

    if (charIndex < currentText.length) {
      setTimeout(typeParagraph, 50);
    } else {
      isDeleting = true;
      setTimeout(typeParagraph, 1000); // pausa antes de apagar
    }
  } else {
    paragraphEl.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex > 0) {
      setTimeout(typeParagraph, 30);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % textSequence.length;
      setTimeout(typeParagraph, 200);
    }
  }
}

window.addEventListener("DOMContentLoaded", typeTitle);



