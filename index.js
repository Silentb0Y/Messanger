(function(){
const form =document.querySelector("#message-form")

form.addEventListener('submit',function(e){
    e.preventDefault()
    const message = document.querySelector("#message")
    const feedback = document.querySelector(".feedback")
    const messagecon = document.querySelector(".message-content")
    if(message.value === ''){
        feedback.classList.add('feedshow')
        setTimeout(function(){
            feedback.classList.remove('feedshow')
        }, 4000)
        
    }
    else{
        messagecon.textContent = message.value
        message.value =''
    }
})

 

})()