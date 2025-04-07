const elementJoin = document.querySelector('.content-seventh__column-second__switch--element-first')
const elementShare = document.querySelector('.content-seventh__column-second__switch--element-second')
const form = document.querySelector('.content-seventh__column-second__form')
const contacts = document.querySelector('.swiith-opacity--img')

elementJoin.addEventListener('click', () => {
    elementJoin.classList.add('content-seventh__column-second__switch--is-active')
    elementShare.classList.remove('content-seventh__column-second__switch--is-active')
    form.classList.remove('opacity-left')
    contacts.classList.remove('opacity-right')
})

elementShare.addEventListener('click', () => {
    elementShare.classList.add('content-seventh__column-second__switch--is-active')
    elementJoin.classList.remove('content-seventh__column-second__switch--is-active')
    form.classList.add('opacity-left')
    contacts.classList.add('opacity-right')
})

const menuHeader = document.querySelector('.header__menu--list--is-activ')

document.addEventListener('click', (event) => {
    if(event.target.closest('.header__burger-button')) {
        menuHeader.classList.add('menu-aktiv')
    }else {
        menuHeader.classList.remove('menu-aktiv') 
    }
})


