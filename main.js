const vertical = document.querySelector('.line_vertical');
const horizontal = document.querySelector('.line_horizontal');
const targetImg = document.querySelector('.targetImg');
const tag = document.querySelector('.tag');
const start = document.querySelector('.startBtn');
const game007 = document.querySelector('.game007');

//targetImg가 아직 브라우저에 준비되지 않았을 수 있기 때문에
//모든 이미지와 리소스가 다 준비가 된 상태('load'상태)에서 getBoundingClientRect();을 호출해야 함.
addEventListener('load', () => {
    const targetImgRect = targetImg.getBoundingClientRect();
    const targetImgHalfWidth = targetImgRect.width / 2;
    const targetImgHalfHeight = targetImgRect.height / 2;

    function mousemove() {
        document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
    
        //크롬에서 transform은 composition만 발생함.
        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        targetImg.style.transform = `translate(${x-targetImgHalfWidth}px, ${y-targetImgHalfHeight}px)`;
        tag.style.transform = `translate(${x+15}px, ${y+15}px)`;
        tag.innerHTML = `${x}px, ${y}px`;
    
    });
    }
    
    start.addEventListener('click', () => {
        start.style.display = 'none';
        game007.style.visibility = 'visible';
        mousemove();
    });
});
