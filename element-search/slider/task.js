let a = 0;
let maxIndex = 5;
const sliders = document.getElementsByClassName('slider__item');
const dots = document.getElementsByClassName('slider__dot');
const prev = document.getElementsByClassName('slider__arrow_prev')[0];
const next = document.getElementsByClassName('slider__arrow_next')[0];

function setSlide() {
    sliders[a].className = 'slider__item slider__item_active';
    dots[a].className = 'slider__dot slider__dot_active';
}

function clearSlide() {
    sliders[a].className = 'slider__item';
    dots[a].className = 'slider__dot';
}

for (let i = 0; i < maxIndex; i++) {
    dots[i].index = i;
    dots[i].onclick = function () {
        if (a === this.index) {
            return
        }
        clearSlide();
        a = this.index;
        setSlide();
    }
}

next.onclick = function () {
    clearSlide();
    a++;
    if (a >= maxIndex) {
        a = 0;
    }
    setSlide();
}

prev.onclick = function () {
    clearSlide();
    a--;
    if (a < 0) {
        a = maxIndex - 1;
    }
    setSlide();
}