let clickbutton = document.querySelector('.button1')

clickbutton.addEventListener('click',function(){
    document.querySelector('.popup').style.display='block'
    
})

let closebutton = document.querySelector('.close')

closebutton.addEventListener('click',function(){
    document.querySelector('.popup').style.display='none'
    
})