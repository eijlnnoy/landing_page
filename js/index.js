let items = document.querySelectorAll('.carousel-item');
let currentIndex = 2; // Index of the center item

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('outer-left', 'inner-left', 'center', 'inner-right', 'outer-right');
    });

    // Update positions based on the current index
    let prevIndex = (currentIndex - 1 + items.length) % items.length;
    let nextIndex = (currentIndex + 1) % items.length;
    let prevPrevIndex = (currentIndex - 2 + items.length) % items.length;
    let nextNextIndex = (currentIndex + 2) % items.length;

    items[prevPrevIndex].classList.add('outer-left');
    items[prevIndex].classList.add('inner-left');
    items[currentIndex].classList.add('center');
    items[nextIndex].classList.add('inner-right');
    items[nextNextIndex].classList.add('outer-right');
}

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + items.length) % items.length; // Update index based on direction
    updateCarousel();
}

// Move carousel every 3 seconds
setInterval(() => moveCarousel(1), 5000);