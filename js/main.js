'use strist'

{
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');
    const project = document.getElementById('project');
    const navRight = document.querySelector('.right');
    const all = document.getElementById('all');
    const study = document.getElementById('study');
    const projectConents = document.getElementById('projectConents');


    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
    });
    
    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    });
    
    all.addEventListener('click', () => {
        navRight.classList.remove('show');
        projectConents.classList.remove('hide');
    });
    
    project.addEventListener('click', () => {
        navRight.classList.add('show');
    });

    study.addEventListener('click', () => {
        navRight.classList.remove('show');
        projectConents.classList.add('hide');
    });

}