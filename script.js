const Button = () => {
    const button = document.querySelector('#branco');
    
    
    button.addEventListener('click', () => {
        const body = document.querySelector('body')
        body.classList.toggle('bodyWhite')
        
    })
};


Button()