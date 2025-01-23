const btn = document.querySelector(".btn")
const container = document.querySelector(".container")

btn.addEventListener("click",(e) =>{
    e.preventDefault()

    if(btn.innerText === "Light"){
        container.style.backgroundColor = "yellow"
        btn.innerText = "Dark"
    } else {
        container.style.backgroundColor = "darkblue"
        btn.innerText = "Light"
    }
})