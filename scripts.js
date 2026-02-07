
let menu = document.querySelector('.menu-mobile')

function toggleMenu() {
    menu.classList.toggle('active')
}

function openWhatsOfForm() {
    let name = document.getElementById('name')
    let phone = document.getElementById('phone')
    let service = document.getElementById('service')
    let message = document.getElementById('message')
    
    let messageFormated = `Nome: ${name.value},\nServiço: ${service.value},\nMensagem: ${message.value}`
    
    let link = encodeURI(`https://wa.me/244944255241?text=${messageFormated}`)
    window.open(link, '_blank')
}