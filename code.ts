const btn = document.querySelector(".form-buuton");



// Circles

const circleSmall:HTMLDivElement = document.querySelector('.circle-small');
const circleMiddle:HTMLDivElement = document.querySelector('.circle-middle');
const circleBig:HTMLDivElement = document.querySelector('.circle-big');


let prevMousePosition;

document.addEventListener("mousemove", (event) => {

if(!prevMousePosition) {
    prevMousePosition = {
        x:event.clientX,
        y:event.clientY

    }
}

    const diff = {
        x: prevMousePosition.x - event.clientX,
        y: prevMousePosition.y - event.clientY
    }

    const circleTopSmall = circleSmall.getBoundingClientRect().top;
    const circleLeftSmall = circleSmall.getBoundingClientRect().left;

    circleSmall.style.setProperty('top', `${circleTopSmall + diff.y / 25}px`);
    circleSmall.style.left = `${circleLeftSmall + diff.x / 25}px`; 

    const circleTopMiddle = circleMiddle.getBoundingClientRect().top;
    const circleLeftMiddle = circleMiddle.getBoundingClientRect().left;

    circleMiddle.style.setProperty('top', `${circleTopMiddle - diff.y / 28}px`);
    circleMiddle.style.left = `${circleLeftMiddle - diff.x / 28}px`;

    const circleTopBig = circleBig.getBoundingClientRect().top;
    const circleLeftBig = circleBig.getBoundingClientRect().left;

    circleBig.style.setProperty('top', `${circleTopBig + diff.y / 30}px`);
    circleBig.style.left = `${circleLeftBig + diff.x / 30}px`;






    prevMousePosition.x = event.clientX;
    prevMousePosition.y = event.clientY;
});

// Form

const form = document.querySelector('.form');
const formBtn = document.querySelector('.form-button');
const emailInput: HTMLInputElement = document.querySelector('.form-input-email');
const passwordInput: HTMLInputElement = document.querySelector('.form-input-password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    
    if(!isPasswordValid(passwordValue)){
       passwordInput.classList.add('invalid');
    }
})

passwordInput.addEventListener('input',(event) => {
    const passwordValue = passwordInput.value;
    if(isPasswordValid(passwordValue)){
        passwordInput.classList.remove('invalid');
     }
})

function isPasswordValid(value: string) : boolean {
    return isPasswordLengthValid(value) && isPasswordValidLetter(value) && isPasswordValidLetterLatin(value)   
}

function isPasswordValidLetter (value: string) : boolean {
    if(value === value.toUpperCase() || value === value.toLowerCase()) {
        return false
    }
    return true
}

function isPasswordLengthValid (value : string) : boolean {
    return value.length > 3 && value.length < 8 
}



function isPasswordValidLetterLatin(value : string) : boolean {
    return value === (/[A-Za-z0-9]+$/ig).test(value);
}

// function isPasswordValidLetterLatin(value : string) : boolean {
//     return value === value.match(/[A-Za-z0-9]+$/ig).join('');
// }




// Сделать правила валидации для пароля
/*

 1. Длина больше 3 и меньше 8
 2. Должна быть 1 заглавная буква
 3. Должна быть 1 строчная бука
 4. Бонус пункт: должны быть только латинские символы

*/