/*=============== Show Menu ========*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/*============= Toggle validate ===========*/

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu'), navToggle.classList.add('remove-toggle')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu'),
      navToggle.classList.remove('remove-toggle')
  })
}

/*============== Remove Toggle With Click ==============*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click',  () => {
    navMenu.classList.remove('show-menu'),
    navToggle.classList.remove('remove-toggle')
  })
}

/*===================== Show Scroll Up ==================*/

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scroll')
  } else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=========== SCROLL SECTIONS ACTIVE LINK ============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*======================== SCROLL REVEAL ===================*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  //reset: true
})

/*========= HOME REVEAL ======*/
sr.reveal(`.home-header, .section-title`, {delay: 600})
sr.reveal(`.home-content, .home-title-description`, {delay: 700})
sr.reveal(`.home-img`, {delay: 900, origin: 'top'})

/*========= SPONSOR REVEAL ======*/
sr.reveal(`.sponsor-img`, {origin: 'top', interval: 100})

/*========= SPECS REVEAL ========*/
sr.reveal(`.specs-data`, {origin: 'left', interval: 100})
sr.reveal(`.specs-img`, {origin: 'right'})

/*========= MixAmp REVEAL ========*/
sr.reveal(`.mix-img`, {origin: 'top'})
sr.reveal(`.mix-data, .mix-description`)

/*========= MixAmp REVEAL ========*/
sr.reveal(`.discount-animation`, {origin: 'left', interval: 100})
sr.reveal(`.discount-img`, {origin: 'right', interval: 100})

/*========= Products REVEAL ========*/
sr.reveal(`.products-card`, {origin: 'top', interval: 100})

/*========= Footer REVEAL ========*/
sr.reveal(`.footer-logo`, {origin: 'top', interval: 100})
sr.reveal(`.footer-content, .footer-copy`, {origin: 'top', interval: 150})




 
/*============================= Change Background Header =======================*/
/*function scrollHeader () {
  const Header = document.getElementById('header')
  if(this.scrollY >= 50) {
    Header.classList.add('scroll-header')
  }else {
    Header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)*/
window.pageYOffset