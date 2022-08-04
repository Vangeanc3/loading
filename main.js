let btn = document.querySelector(".btn")
let container = document.querySelector(".modal")

function alerta(){
    alert("usuario encontrado")
    container.style.display = "none"
    btn.style.display = "block"
}

btn.onclick = () => {
    btn.style.display = "none"
    container.style.display = "flex"
    setTimeout(alerta, 5000)
}

