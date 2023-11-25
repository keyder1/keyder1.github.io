const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const loginForm = document.querySelector('#loginform')
console.log(JSON.parse(localStorage.getItem('users')))

loginForm.addEventListener('submit', (e)=>{

    e.preventDefault()


    const email = document.querySelector('#email-login').value
    const password = document.querySelector('#password-login').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'index.html'   

})

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