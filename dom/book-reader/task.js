const fontSizeButtons = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById('book');

const colorButtons = Array.from(document.querySelectorAll('.book__control_color > .color')) 
const backgroundColorButtons = Array.from(document.querySelectorAll('.book__control_background > .color'))

function deActivateButtons() {
    for (const btn of fontSizeButtons) {
        btn.classList.remove('font-size_active');
    }
    book.className = 'book';
}

fontSizeButtons[0].addEventListener('click', function(event) {
    deActivateButtons();
    fontSizeButtons[0].classList.add('font-size_active');
    book.classList.add('book_fs-small');
    event.preventDefault();
});

fontSizeButtons[1].addEventListener('click', function(event) {
    deActivateButtons();
    fontSizeButtons[1].classList.add('font-size_active');
    book.className = 'book';
    event.preventDefault();
});

fontSizeButtons[2].addEventListener('click', function(event) {
    deActivateButtons();
    fontSizeButtons[2].classList.add('font-size_active');
    book.classList.add('book_fs-big');
    event.preventDefault();
});

function deActivateButtonsColor() {
    for (const btn of colorButtons) {
        btn.classList.remove('color_active');
    }
    // book.className = 'book';
}

colorButtons[0].addEventListener('click', function(event){
    deActivateButtonsColor();
    colorButtons[0].classList.add('color_active');
    book.classList.add('book_color-black');
    event.preventDefault();
});

colorButtons[1].addEventListener('click', function(event){
    deActivateButtonsColor();
    colorButtons[1].classList.add('color_active');
    book.classList.add('book_color-gray');
    event.preventDefault();
});

colorButtons[2].addEventListener('click', function(event){
    deActivateButtonsColor();
    colorButtons[2].classList.add('color_active');
    book.classList.add('book_color-whitesmoke');
    event.preventDefault();
});


function deActivateButtonsBackGroundColor() {
    for (const btn of backgroundColorButtons) {
        btn.classList.remove('color_active');
    }
    // book.className = 'book';
}

backgroundColorButtons[0].addEventListener('click', function(event){
    deActivateButtonsBackGroundColor();
    backgroundColorButtons[0].classList.add('color_active');
    book.classList.add('text_color_black');
    event.preventDefault();
});

backgroundColorButtons[1].addEventListener('click', function(event){
    deActivateButtonsBackGroundColor();
    backgroundColorButtons[1].classList.add('color_active');
    book.classList.add('text_color_gray');
    event.preventDefault();
});

backgroundColorButtons[2].addEventListener('click', function(event){
    deActivateButtonsBackGroundColor();
    backgroundColorButtons[2].classList.add('color_active');
    book.classList.add('text_color_whitesmoke');
    event.preventDefault();
});