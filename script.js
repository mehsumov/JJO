let bars = document.querySelector('.bars')
let close = document.querySelector('.close')
let nav = document.querySelector('.nav-links')


close.addEventListener('click', function (e) {
    nav.style.right = "-500px";
    e.preventDefault()
})

bars.addEventListener('click',function(e){
    nav.style.right = "0";
    console.log(screen.width);
    e.preventDefault()
})