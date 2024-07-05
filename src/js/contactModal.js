// contact modal

let showContactModal = document.querySelector('.showContactModal');
let overlay = document.querySelector('.overlay');
let closeModal = document.getElementById('closeModal');

showContactModal.addEventListener('click', function () {
  overlay.classList.add('active');
})
closeModal.addEventListener('click', function () {
  overlay.classList.remove('active');
})