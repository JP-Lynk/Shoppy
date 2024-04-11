const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const contact = document.querySelector(".contactform");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

contact.addEventListener("click", () => {
  popup.classList.remove("hide-popup");
});

closePopup.addEventListener("click", () => {
  popup.classList.add("hide-popup");
});

//Profile
// const Btn = document.querySelector(".logo");
// const profile = document.querySelector(".profile");

// Btn.addEventListener('mouseover', function() {
//     profile.style.opacity = '1';
// })
// Btn.addEventListener('mouseout', function() {
//     profile.style.opacity = '0';

// })

document.addEventListener("DOMContentLoaded", function() {
  var aboutLink = document.querySelector('a[href="#footer_page"]');
  if (aboutLink) {
      aboutLink.addEventListener('click', function(event) {
          event.preventDefault();
          var targetElement = document.querySelector('.footer_page');
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
      });
  }
});


