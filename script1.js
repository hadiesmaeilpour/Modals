'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const showModalBtn = document.querySelectorAll('.show-modal');

const removeHidden = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const addHidden = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', removeHidden);
}

closeBtn.addEventListener('click', addHidden);
overlay.addEventListener('click', addHidden);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    addHidden();
  }
});
