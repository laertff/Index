const Buttons = () => {
    const button = document.querySelector('#branco');
    
    
    button.addEventListener('click', () => {
        const body = document.querySelector('body')
        body.classList.remove('bodyBlack')
        body.classList.toggle('bodyWhite')
        
    })
};

Buttons();