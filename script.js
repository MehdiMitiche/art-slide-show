gsap.from(".navbar-logo", {duration: .8,y: '-100px', opacity: 0});
gsap.from(".images", {duration: 1.2,x: '-500px', opacity: 0, delay:1});


const ctaBtn = document.querySelector('.cta-btn')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-btn')
const leftIcon = document.querySelector('#left')
const rightIcon = document.querySelector('#right')
const slider = document.querySelector('.images-container')
const sliderContainer = document.querySelector('.slider-container')

const getTranslateX = elem =>{
    const style = window.getComputedStyle(elem)
    const matrix = new WebKitCSSMatrix(style.transform)
    return matrix.m41
}


ctaBtn.addEventListener('click', ()=>{
    overlay.style.zIndex = '999'
    overlay.classList.add('overlay-open')
})

closeBtn.addEventListener('click', ()=>{
    setTimeout(()=>{
    overlay.style.zIndex = '0'
    },650)
    overlay.classList.remove('overlay-open')
})

let sliding = false

leftIcon.addEventListener('click', ()=>{
    if(!sliding){
        sliding = true
        const nbSlides = Math.ceil((slider.clientWidth - sliderContainer.clientWidth)/300)
        if( !(Math.abs(getTranslateX(slider)) > (nbSlides)*300)){
            slider.style.transform = `translateX(${getTranslateX(slider) - 300}px)`
        }
        setTimeout(()=>{
            sliding = false
        },450)
    }
})

rightIcon.addEventListener('click', ()=>{
    if(!sliding){
        sliding = true
        if(getTranslateX(slider) !== 0){
            slider.style.transform = `translateX(${getTranslateX(slider) + 300}px)`
        }
        setTimeout(()=>{
            sliding = false
        },450)
    }
})

window.addEventListener('resize',()=>{
    slider.style.transform = `translateX(0px)`
})