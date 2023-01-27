//Obtener los elementos del DOM
const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const info = document.getElementById('info')

form.addEventListener('submit', function(evt){
    evt.preventDefault()
    let credential = {
        email : email.value,
        password : password.value
    }
    localStorage.setItem('credential', JSON.stringify(credential))
    let userInfo = JSON.parse(localStorage.getItem('credential'))
    info.innerHTML=`
        <h1>${userInfo.email}</h1>
        <h2>${userInfo.password}</h2>
        <button class='btn btn-danger'onclick="deleteUserInfo()">Eliminar</button>
    `
    evt.target.reset()
})

function deleteUserInfo(){
    localStorage.removeItem('credential')
}