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

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    targetImg.style.transform = `translate(${x-targetImg.clientWidth/2}px, ${y-targetImg.clientHeight/2}px)`;
    tag.style.transform = `translate(${x+15}px, ${y+15}px)`;
    tag.innerHTML = `${x}px, ${y}px`;

});
}

start.addEventListener('click', () => {
    start.style.display = 'none';
    game007.style.display = 'block';
    mousemove();
});