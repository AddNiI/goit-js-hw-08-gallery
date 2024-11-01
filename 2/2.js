document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider__input');
    const image = document.getElementById('slider__image');

    slider.addEventListener('input', function() {
        const scale = slider.value / 50;
        image.style.transform = `scale(${scale})`;
    });
});

// Підключіть lodash
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    const box = document.getElementById('box');

    const moveBox = _.debounce(function(event) {
        box.style.left = event.clientX + 'px';
        box.style.top = event.clientY + 'px';
    }, 100);

    document.addEventListener('mousemove', moveBox);
});
