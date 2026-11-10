const btn = document.querySelector('#btn');
const file_inp = document.querySelector('#file-inp');
btn.addEventListener('click',function(){
    file_inp.click();
});

file_inp.addEventListener('change',function(evt){
    console.log(evt.target.files[0].name);
    btn.textContent = evt.target.files[0].name;
});