
"use strict"

const navbar = document.querySelector('#navbar__clone')
const navbarFirst = document.querySelector('.navbar')
const mobileMenu = document.querySelector('.mobile__view-body')

let navbarClone = function () {
    navbar.setAttribute('class', 'navbar-nav ms-auto mb-2 mb-lg-0 mobile__clone-view')
    const clone = navbar.cloneNode(true)
    mobileMenu.after(clone)
}
navbarClone()

// show menu
const body = document.querySelector('body')
const navbarToggler = document.querySelectorAll('.navbar__toggler')

for (let index = 0; index < navbarToggler.length; index++) {
    navbarToggler[index].addEventListener('click', function (e) {
        e.preventDefault()
        let $this = this
        if (body.classList.contains('body__view-off')) {
            body.classList.remove('body__view-off')
        } else {
            body.classList.add('body__view-off')
        }
    })
}

window.addEventListener('resize', function (e) {
    let $this = this,
        w = $this.innerWidth

    if (w > 768) {
        if (body.classList.contains('body__view-off')) {
            body.classList.remove('body__view-off')
        }
    }
})

window.addEventListener('scroll', function () {
    // navbarFirst.classList.toggle('fixed-top', window.scrollY <= 5)
    // if (this.scrollY > 0) {
    //     if (!navbar.classList.contains('fixed-top')) {
    //         navbar.classList.add('fixed-top')
    //     }
    // } else {
    //     navbar.classList.remove('fixed-top')
    // }
})