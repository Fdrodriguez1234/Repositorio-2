let btnId= document.getElementById('btn');
let loginId = document.getElementById('login');
let registerId = document.getElementById('register');

btnId.addEventListener('click',() =>{
    if(loginId.style.display == 'block'){
        loginId.style.display = 'none';
        registerId.style.display = 'block';
    }
});