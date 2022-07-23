
window.sr = ScrollReveal({
    reset: true, 
    distance: '200px'
})

/* index reveal */

sr.reveal('#intro img', {
    duration: 1500, 
    origin: 'bottom'
})

sr.reveal('.title-init', {
    duration: 1500, 
    origin: 'left'
})


sr.reveal('.item-card', {
    duration: 2000, 
    origin: 'bottom'
})

sr.reveal('.list-group p', {
    duration: 1000, 
    origin: 'bottom'
})
