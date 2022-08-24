const smtBtn = document.querySelector('.smt-btn'),
ratInps = document.querySelectorAll('.rating input');

ratInps.forEach((e)=>{
    e.addEventListener('click',(e)=>{
        e.target.classList.add('slc');
        document.querySelector('.rat').innerText = e.target.value;
    })
})
smtBtn.addEventListener('click',()=>{
document.querySelector('.wrapper').classList.add('done')
})