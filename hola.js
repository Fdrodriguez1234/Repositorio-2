let btnId= document.getElementById('btn');
let loginId = document.getElementById('login');
let registerId = document.getElementById('register');

btnId.addEventListener('click',() =>{
    if(registerId.style.display == 'none'){
        loginId.style.display = 'none';
        registerId.style.display = 'block';
    }
});