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
var bannerSwiper = new Swiper(".bannerSwiper", {
  slidesPerView: 1,
  spaceBetween: 90,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
},
  slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
      },
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination2",
      clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
var solution = new Swiper(".solution", {
  grid:{
    fill: 'row',
    rows : 2
  },
  spaceBetween: 15,
  slidesPerView: 2,
  breakpoints: {
    992: {
      spaceBetween: 38,
      grid:{
        rows : 1
      },
      slidesPerView: 2,
    },
    1200: {
      grid: {
        rows: 1,
      },
      slidesPerView: 3,
    },
    1400: {
      grid: {
        rows: 1,
      },
      slidesPerView: 4,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
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
    pauseOnMouseEnter: true,
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
    pauseOnMouseEnter: true,
},
});

window.addEventListener('load',function () {
  const table= document.querySelector('.editor-section').querySelector('table');
  const newDiv = document.createElement("div");
  table.parentNode.insertBefore(newDiv,table);
  newDiv.appendChild(table);
  newDiv.classList.add('overflow-x-auto');
})

// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));
let acordionBtn2 = Array.from(document.getElementsByClassName('acordionBtn2'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('img').classList.toggle('active');
  })
})
acordionBtn2.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg').classList.toggle('active');
  })
})