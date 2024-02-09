const form = document.querySelector('.form');
const input = document.querySelector('#input');

const captcha = document.querySelector('.captcha-input');

const loadingGif = document.querySelector('.loading');

const errorSpan = document.querySelector('.error-span');

const resultImg = document.querySelector('.result-link');

form.addEventListener('submit', (e) => {
    if(input.value){
        errorSpan.classList.remove('visible');
        localStorage.setItem('send', input.value);
        form.submit()
    }else{
        resultImg.classList.remove('visible');
        errorSpan.classList.add('visible');
        captcha.checked = false;
    }
})

function general () {
    if(localStorage.getItem('send')){
        localStorage.removeItem('send');
        captcha.checked = true;
        
        loadingGif.classList.add('visible');

        setTimeout(() => {
            loadingGif.classList.remove('visible');
            resultImg.classList.add('visible');
        },1500)
    }
}

general()