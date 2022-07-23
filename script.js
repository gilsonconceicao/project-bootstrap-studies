
window.sr = ScrollReveal({
    reset: true, 
    distance: '200px'
})

/* index reveal */

sr.reveal('#intro', {
    duration: 2000, 
    rotate: {
        x: 20, y: 100, z: 10
    }
})

sr.reveal('.title-init', {
    duration: 3000, 
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
