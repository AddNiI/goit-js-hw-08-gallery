document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider__input');
    const image = document.getElementById('slider__image');

    slider.addEventListener('input', function() {
        const scale = slider.value / 50;
        image.style.transform = `scale(${scale})`;
    });
});
