const singupForm = document.querySelector('#signupform')


singupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const genero = document.querySelector('#genero').value;
    const password = document.querySelector('#password').value; 


    const USERS = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = USERS.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registado!')
    }

    USERS.push({name: name, email: email, password: password, genero: genero})
    localStorage.setItem('users', JSON.stringify(USERS))
    alert('Registro Exitoso!')
    window.location.href = 'login.html'
    
})