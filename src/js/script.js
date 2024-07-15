// menu

let list1 = Array.from(document.querySelectorAll('.list1 > div'));
let list2 = Array.from(document.querySelectorAll('.list2 > ul'));
let arrows = Array.from(document.querySelectorAll('.list1 img[alt="arrow"]'));
let mobileMenu = document.querySelector('.mobileMenu');
let dropdownBtn = Array.from(document.getElementsByClassName('dropdownBtn'));
let hamIcon = document.getElementById('hamIcon');
let serviceLink = document.getElementById('service-link');
let dropdown = document.querySelector('.dropdown');

list1.forEach((item) => {
  item.addEventListener('mouseover', function () {
    arrows.forEach((item)=>{item.classList.add('opacity-0')})
    item.querySelector('img[alt="arrow"]').classList.remove('opacity-0');
    let tabId = item.dataset.id;
    list2.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.add('grid');
        content.classList.remove('hidden');
      } else {
        content.classList.remove('grid');
        content.classList.add('hidden');
      }
    })
  })
});

dropdownBtn.forEach((item)=>{
  item.addEventListener('click', function () {
    item.querySelector('svg').classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})

hamIcon.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
})

serviceLink.addEventListener('mouseenter', function () {
  dropdown.classList.add('active');
  document.querySelector('.servicesArrow').classList.add('opacity-100');
  document.querySelector('.servicesArrow').classList.remove('opacity-0');
})

document.addEventListener('mousemove', (event) => {
  if (!event.target.closest('.dropdown') && !event.target.closest('.dropdownArea')) {
    dropdown.classList.remove('active');
    document.querySelector('.servicesArrow').classList.remove('opacity-100');
    document.querySelector('.servicesArrow').classList.add('opacity-0');
  }
})

// swiper

var services = new Swiper(".services", {
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var services = new Swiper(".services2", {
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var services = new Swiper(".services3", {
  slidesPerView: 4,
      grid: {
        fill: 'row',
        rows: 2,
      },
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var solution = new Swiper(".solution", {
  loop: true,
  spaceBetween: 38,
  slidesPerView: 1,
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var portfolio = new Swiper(".portfolio", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1.2,
  breakpoints: {
    768: {
      slidesPerView: 2.2,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 37,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var brands = new Swiper(".brands", {
  loop: true,
  spaceBetween: 63,
  slidesPerView: 4,
  breakpoints: {
    768: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 7,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});