let arrowBefore = document.querySelector('.arrow__before');
let arrowAfter = document.querySelector('.arrow__after');
let projectsCont = document.querySelector('.projects-cont');

arrowAfter.addEventListener('click', () => {
    moveForward();
    hideArrow(arrowBefore, arrowAfter);
});

arrowBefore.addEventListener('click', () => {
    moveBack();
    hideArrow(arrowAfter, arrowBefore);
});

function moveForward() {
    projectsCont.classList.remove('closed');
    projectsCont.classList.add('opened');
}

function moveBack() {
    projectsCont.classList.remove('opened');
    projectsCont.classList.add('closed');
}

function hideArrow(aShow, aHide) {
    aShow.classList.add('arrow_show');
    aShow.classList.remove('arrow_hide');
    aHide.classList.remove('arrow_show');
    aHide.classList.add('arrow_hide');
}
