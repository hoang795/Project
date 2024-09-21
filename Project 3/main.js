const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// menuBtn.addEventListener("click", (e) => {
//   navLinks.classList.toggle("open");

//   const isOpen = navLinks.classList.contains("open");
//   menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
// });

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__image__content ", {
  duration: 1000,
  delay: 1500,
});

ScrollReveal().reveal(".product__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centerSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 250,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },

  pagination: {
    el: ".swiper-pagination",
  },
});

// Color selection
const colorItems = [];
for (let i = 1; i <= 5; i++) {
  const colorItem = document.getElementById(`product__color_${i}`);
  if (colorItem) {
    colorItems.push(colorItem);
  }
}
const selectedColor = document.getElementById("selected-color");

colorItems.forEach((colorItem) => {
  colorItem.addEventListener("click", () => {
    colorItems.forEach((item) => {
      item.classList.remove("selected");
      item.style.border = "none"; 
    });
    colorItem.classList.add("selected");
    colorItem.style.border = "2px solid white"; 
  });
});

// Size selection
const sizeItems = [];
for (let i = 1; i <= 3; i++) {
  const sizeItem = document.getElementById(`product__size_${i}`);
  if (sizeItem) {
    sizeItems.push(sizeItem);
  }
}
const selectedSize = document.getElementById("selected-size");

sizeItems.forEach((sizeItem) => {
  sizeItem.addEventListener("click", () => {
    sizeItems.forEach((item) => item.classList.remove("selected"));
    sizeItem.classList.add("selected");
    selectedSize.textContent = sizeItem.textContent;
  });
}
);
// Quantity selection
const quantityInput = document.getElementById("product__quantity");
const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");

decreaseBtn.addEventListener("click", () => {
  if (quantityInput.value > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
}
);

increaseBtn.addEventListener("click", () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
}
);

