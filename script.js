const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideWidth = slider.offsetWidth / 3; // Adjust for 3 cards per slide

let currentSlide = 0;

function goToSlide(slideIndex) {
  slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  currentSlide = slideIndex;
}

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (currentSlide < slider.children.length / 3 - 1) { // Adjust for 3 cards per slide
    goToSlide(currentSlide + 1);
  }
});

// faq

const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const faqHeader = card.querySelector('.faq-header');
    const faqToggle = card.querySelector('.faq-toggle');
    const faqContent = card.querySelector('.faq-content');

    faqHeader.addEventListener('click', () => {
      card.classList.toggle('open');
      if (card.classList.contains('open')) {
        faqContent.style.maxHeight = faqContent.scrollHeight + 'px';
      } else {
        faqContent.style.maxHeight = '0';
      }
    });
  });

  const characterCardSlides = document.querySelectorAll('.character-card-slide');
const prevCharacterButton = document.querySelector('.card-prev-button');
const nextCharacterButton = document.querySelector('.card-next-button');
const characterSlideWidth = characterCardSlides[0].offsetWidth; // Width of a single slide
const totalCharacterSlides = characterCardSlides.length;
let currentCharacterSlide = 0;

function goToCharacterSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = 0;
  } else if (slideIndex >= totalCharacterSlides) {
    slideIndex = totalCharacterSlides - 1;
  }
  
  const slidePosition = -slideIndex * characterSlideWidth;
  document.querySelector('.character-card-slider-carousel').style.transform = `translateX(${slidePosition}px)`;
  currentCharacterSlide = slideIndex;
}

prevCharacterButton.addEventListener('click', () => {
  goToCharacterSlide(currentCharacterSlide - 1);
});

nextCharacterButton.addEventListener('click', () => {
  goToCharacterSlide(currentCharacterSlide + 1);
});

// Initialize the slider position
goToCharacterSlide(currentCharacterSlide);

