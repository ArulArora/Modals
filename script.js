'use strict';

const modalV1 = document.querySelector('.v1');
const modalV2 = document.querySelector('.v2');
const overlay = document.querySelector('.overlay');
const btnCloseModal1 = document.querySelector('.close-v1');
const btnCloseModal2 = document.querySelector('.close-v2');
const btnsShowModalV1 = document.querySelectorAll('.btn-v1'); //acts like an array
const btnShowModalV2 = document.querySelector('.btn-v2');

//Function to show a modal window
function showModal(modal) {
    modal.classList.remove('hidden'); //removes the hidden class (don't need the . for this property)
    overlay.classList.remove('hidden'); //styles are in a class, and we can add/remove them from an element
}

//Function to close a modal window
function closeModal(modal) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Used to show the two duplicate modal 1 buttons
for (let i = 0; i < btnsShowModalV1.length; i++) {
    btnsShowModalV1[i].addEventListener('click', () => {
        showModal(modalV1);
    });
}

//Show modal 2
btnShowModalV2.addEventListener('click', () => {
    showModal(modalV2);
});

//close modal 1 on an X click
btnCloseModal1.addEventListener('click', () => {
    closeModal(modalV1);
});

//close modal 2 on an X click
btnCloseModal2.addEventListener('click', () => {
    closeModal(modalV2);
});

//close modal when you click off the modal (overlay)
overlay.addEventListener('click', () => {
    closeModal(modalV1);
    closeModal(modalV2);
});

document.addEventListener('keydown', function (e) { //listening for this event everywhere on the document
    if (e.key === 'Escape' && (!modalV1.classList.contains('hidden')) || !modalV2.classList.contains('hidden')) {
        //e is the event object produced by JS - 'key' shows what key was pressed
        //we are checking if any modals are open and if they are we close them
        closeModal(modalV1);
        closeModal(modalV2);
    }
});