var drums=document.querySelectorAll(".drum")

var audio_volume=0.6;

for(let i=0;i<drums.length;i++){
    drums[i].addEventListener('click',btn)
}

function btn(e){
    let inner=e.target.innerHTML;                             //mouseprss
   makemusic(inner)
}

document.addEventListener("keypress",(event)=>{     
    animateKey(event.key)                                                           //keypress
    makemusic(event.key)
})

const slider=document.getElementById('volume_slider')

slider.oninput=(event)=>{                                         //slider
    audio_volume=event.target.value/100
}

let startauto_on=false;
let strat;

const startmusic=()=>{
   const letters=['w','s','a','d','j','k','l']
  strat= setInterval(()=>{
          const current=letters[Math.floor(Math.random()*letters.length)]
          makemusic(current)                                                //for auto music using set interval
          animateKey(current)
   },100)
  
}

const aut=document.querySelector('.auto')
aut.addEventListener('click',()=>{
   if(startauto_on){
       clearInterval(strat)
       startauto_on=false
       aut.innerHTML="start auto music"
       aut.classList.remove('automatic')
   }                                                   //by using innerhtml we changeing                     the                           text in the button
   else{
       startmusic()
       startauto_on=true
       aut.innerHTML="stop auto music"
       aut.classList.add('automatic')
   }
    
})


let makemusic=(k)=>{
    switch(k){
        case 'w':playmusic('sounds/sounds_sound-1.mp3');
                  break;
        case 'a':playmusic('sounds/sounds_sound-2.mp3');
                 break;
        case 's':playmusic('sounds/sounds_sound-3.mp3');
                  break;
        case 'd':playmusic('sounds/sounds_sound-4.mp3');
                  break;
        case 'j':playmusic('sounds/sounds_sound-5.mp3');
                  break;
        case 'k':playmusic('sounds/sounds_sound-6.mp3');
                  break;
        case 'l':playmusic('sounds/sounds_sound-7.mp3');
                  break;
    }  
}

function playmusic(path){
    const audio=new Audio(path)
    audio.volume=audio_volume
    audio.play()
  }
  
  const animateKey=(e)=>{
     const s= document.querySelector(`.${e}`)
     s.classList.add('clicking')
     setTimeout(()=>{
         s.classList.remove('clicking')
     },300)
  }
  