
var slideshow = document.getElementById('slideshow')
var slides = document.querySelectorAll('.slides')
let slide = 0
var ham = document.getElementById('hamburger')
var list = document.querySelector('.list-group')

function init(){
   clear()
   slides[slide].style.display = 'block'
}

function clear(){
 slides.forEach(slide =>{
      slide.style.display = 'none'
   })
}

function start(){
   init()
   setInterval(() => {
    if (slide < 2) {
        init()
      slide ++
      console.log(slide)
      init()
    }else{
      slide = 0
      init()
      console.log(slide)
    }
      
   }, 5000);
}



// init()









start()
