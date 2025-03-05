//your JS code here. If required.
let line=document.getElementById("line")
let angle=0
document.addEventListener("DoMContentLoaded", render())

function render(){
    setInterval(()=>{
        angle+=2
        line.style.transform=`rotate(${angle}deg)`
    },20)
}