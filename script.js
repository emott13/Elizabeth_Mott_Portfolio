document.addEventListener('DOMContentLoaded', () => {
    let showProjects = document.getElementById('btn-start-animation')
    showProjects.addEventListener('click', ready);
})

function ready(){
    const buttons = document.querySelectorAll('.projectLinks');
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });

    animate();
}

function handleClick(event){
    const button = event.target;
    const alt = button.alt;

    const links = {
        stated: 'https://emott13.github.io/CSET110_Final_P1/',
        omnifood: 'https://emott13.github.io/CSET110_Lecture_6_Assignment/',
        ticTacToe: 'https://emott13.github.io/CSET115_Final/',
        rockPaperScissors: '',
        grocery: 'https://emott13.github.io/CSET105_Final_1/',
        calculator: 'https://emott13.github.io/CSET115_Weekly_Assignment_2/',
        quiz: 'https://emott13.github.io/CSET105_Final_2/',
        music: 'https://emott13.github.io/CSET110_Weekly_Assignment_2/',
        lavendar: 'https://emott13.github.io/CSET110_project/',
    };

    if (links[alt]) {
        window.open(links[alt]);
    } else {
        alert('Link not found');
    }
}

function animate(){
    const rows = [
        [
            { element: document.getElementById('animation1'), top: 0, left: 26, span: document.querySelector('#animation1 span') },
            { element: document.getElementById('animation2'), top: 0, left: 326, span: document.querySelector('#animation2 span') },
            { element: document.getElementById('animation3'), top: 0, left: 626, span: document.querySelector('#animation3 span') },
        ],
        [
            { element: document.getElementById('animation4'), top: 205, left: 26, span: document.querySelector('#animation4 span') },
            { element: document.getElementById('animation5'), top: 205, left: 326, span: document.querySelector('#animation5 span') },
            { element: document.getElementById('animation6'), top: 205, left: 626, span: document.querySelector('#animation6 span') },],
        [
            { element: document.getElementById('animation7'), top: 410, left: 26, span: document.querySelector('#animation7 span') },
            { element: document.getElementById('animation8'), top: 410, left: 326, span: document.querySelector('#animation8 span') },
            { element: document.getElementById('animation9'), top: 410, left: 626, span: document.querySelector('#animation9 span') },
        ],
    ];

    const rowDelay = 1100; 
        
    rows[0].forEach((item, index) => {
        move(item.element, item.top, item.left, item.span, index * 100);  
    });

    setTimeout(() => {
        rows[1].forEach((item, index) => {
            move(item.element, item.top, item.left, item.span, index * 100);  
        });
    }, rowDelay);

    setTimeout(() => {
        rows[2].forEach((item, index) => {
            move(item.element, item.top, item.left, item.span, index * 100);  
        });
    }, rowDelay * 2);
}

function move(element, targetTop, targetLeft, span, delay = 0) {
    let top = targetTop;  
    let left = window.innerWidth + 10; 
    const speed = 20; 
    
    span.style.visibility = 'hidden';
    span.style.opacity = 0;
    element.style.visibility = 'visible';
    function animateFrame() {
        
        if (left > targetLeft) left -= speed; 

        
        element.style.top = `${top}px`; 
        element.style.left = `${left}px`;

        
        if (left > targetLeft) {
            requestAnimationFrame(animateFrame);
        } else {
            span.style.visibility = 'visible';  
            span.style.opacity = 1
            span.classList.add('visible');  
        }
    }
    animateFrame();
}
