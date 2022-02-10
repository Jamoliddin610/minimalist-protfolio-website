let elheadbtn = document.getElementById('headBtn');
let modal = document.getElementById('modal');

elheadbtn.addEventListener('click',function(){
    modal.classList.toggle('show');
    elheadbtn.classList.toggle('close');
})