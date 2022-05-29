const book = document.querySelector(".book");
const textSize = document.querySelectorAll(".font-size");
const textColor = document.querySelectorAll('[data-text-color]');
const backgroundColor = document.querySelectorAll('[data-bg-color]');

textSize.forEach((e) => {
  e.onclick = function () {
    textSize.forEach((e) => {
      e.classList.remove("font-size_active");
    });
    e.classList.add("font-size_active");
    if (e.classList.contains('font-size_small')) {
      book.classList.remove('book_fs-big')
      book.classList.add('book_fs-small')
    } else if (e.classList.contains('font-size_big')) {
      book.classList.remove('book_fs-small')
      book.classList.add('book_fs-big')
    } else {
      book.classList.remove('book_fs-small')
      book.classList.remove('book_fs-big')
    }
    return false;
  };
});

textColor.forEach((e) => {
  e.onclick = function () {
    textColor.forEach((e) => {
      e.classList.remove("color_active");
    });
    e.classList.add("color_active");
    if (e.classList.contains('text_color_black')) {
      book.classList.remove('book_color-gray')
      book.classList.remove('book_color-whitesmoke')
      book.classList.add('book_color-black')
    } else if (e.classList.contains('text_color_gray')) {
      book.classList.remove('book_color-whitesmoke')
      book.classList.remove('book_color-black')
      book.classList.add('book_color-gray')
    } else {
      book.classList.remove('book_color-black')
      book.classList.remove('book_color-gray')
      book.classList.add('book_color-whitesmoke')
    }
    return false;
  };
});

backgroundColor.forEach((e) => {
  e.onclick = function () {
    backgroundColor.forEach((e) => {
      e.classList.remove("color_active");
    });
    e.classList.add("color_active");
    if (e.classList.contains('bg_color_black')) {
      book.classList.remove('book_bg-gray')
      book.classList.remove('book_bg-whitesmoke')
      book.classList.add('book_bg-black')
    } else if (e.classList.contains('bg_color_gray')) {
      book.classList.remove('book_bg-whitesmoke')
      book.classList.remove('book_bg-black')
      book.classList.add('book_bg-gray')
    } else {
      book.classList.remove('book_bg-black')
      book.classList.remove('book_bg-gray')
      book.classList.add('book_bg-whitesmoke')
    }
    return false;
  };
});