const vertical = document.querySelector('.line_vertical');
const horizontal = document.querySelector('.line_horizontal');
const targetImg = document.querySelector('.targetImg');
const tag = document.querySelector('.tag');
const start = document.querySelector('.startBtn');
const game007 = document.querySelector('.game007');

function mousemove() {
    document.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const y = e.clientY

    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    targetImg.style.left = `${x}px`;
    targetImg.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = `${x}px, ${y}px`;
});
}

start.addEventListener('click', () => {
    start.style.display = 'none';
    game007.style.display = 'block';
    mousemove();
});