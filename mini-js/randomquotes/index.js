const quoteText= document.querySelector(".quote")

const authorName=document.querySelector(".author .name")

const quoteBtn=document.querySelector("button")

const soundBtn=document.querySelector('.sound')
const copyBtn=document.querySelector('.copy')


function randomQuote(){
    quoteBtn.classList.add('loading')
    quoteBtn.innerText="Loading Quote......"

    fetch('http://api.quotable.io/random').then(res=>res.json())
    .then(result=>{quoteText.innerText=result.content
                    authorName.innerText=result.author
                    quoteBtn.innerText="New Quote"
                    quoteBtn.classList.remove('loading')
    })
}

soundBtn.addEventListener('click',()=>{

//  the SpeechSynthesisUtterance is a web speech API that represents a speech request
    
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} quote written BY ${authorName.innerText}`)
    speechSynthesis.speak(utterance) //speak method of speechsynthesis speaks the utterance

})

copyBtn.addEventListener('click',()=>{
    //copying the quote text on copybtn click
    //writeText() property writes the specified text string to the clipboard
    navigator.clipboard.writeText(quoteText.innerText)
})



quoteBtn.addEventListener('click',randomQuote)