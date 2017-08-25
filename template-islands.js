const container = document.querySelector('.container');
const bg = document.querySelector('.background');
const el = document.querySelectorAll('.island');
const walk = 30;

function moveEl(e) {
    const { offsetWidth:width, offsetHeight: height} = container;
    let { offsetX: x, offsetY: y} = e;
   
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk/2));
    const yWalk = Math.round((y / height * walk) - (walk/2));

    // Adiciona o efeito nas islands
    for (let item of el) {
        item.style.transform = `translate(${-xWalk}px, ${-yWalk}px)`
    }

    // Adiciona o efeito no background
    bg.style.transform = `translate(${xWalk}px, ${yWalk}px)`
}

container.addEventListener('mousemove', moveEl);