console.log("Arpit Sharma")
const buttons = document.querySelectorAll("button")
const body =document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = 'green'
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = 'pink'
        }

    })
})