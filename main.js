const vertical = document.querySelector('.line_vertical');
const horizontal = document.querySelector('.line_horizontal');
const targetImg = document.querySelector('.targetImg');
const tag = document.querySelector('.tag');


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
