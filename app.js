window.onload=function(){document.getElementById('loader').style.display='none'}

document.getElementById("chat-button").onclick=function(){
let box=document.getElementById("chat-box")
box.style.display=box.style.display==="flex"?"none":"flex"
}

function sendMessage(){
let input=document.getElementById("userInput").value
let chat=document.getElementById("chat-messages")

chat.innerHTML+=`<p>You: ${input}</p>`

let reply="APT GOD AI: I can help with Greebit, CEO, or businesses"

if(input.toLowerCase().includes("greebit")) reply="Greebit is APT GOD blockchain system"

chat.innerHTML+=`<p>${reply}</p>`
document.getElementById("userInput").value=""
}
