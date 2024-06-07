const carousel = document.querySelector('.carousel');
let offset = 0;

function next() {
    offset += 1;
    if (offset >= carousel.children.length) {
        offset = 0;
    }
    updateCarousel();
}

function prev() {
    offset -= 1;
    if (offset < 0) {
        offset = carousel.children.length - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const itemWidth = carousel.children[0].offsetWidth;
    carousel.style.transform = `translateX(-${offset * itemWidth}px)`;
}

setInterval(next, 3000); // Change image every 3 seconds

// Optional: Add navigation buttons
const nextButton = document.createElement('button');
nextButton.innerText = 'Next';
nextButton.onclick = next;
document.body.appendChild(nextButton);

const prevButton = document.createElement('button');
prevButton.innerText = 'Prev';
prevButton.onclick = prev;
document.body.appendChild(prevButton);
