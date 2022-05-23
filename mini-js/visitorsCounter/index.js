const contel=document.querySelector(".count")

counting()

function counting(){
    fetch('https://api.countapi.xyz/update/visitorCounter/count/?amount=1')
    .then(res=>res.json())
    .then(data=>{
        contel.innerHTML=data.value
    })
}