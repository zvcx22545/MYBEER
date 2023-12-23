const menuLink = document.querySelectorAll('.menu-item');

menuLink.forEach(menusLink => {
    menusLink.addEventListener('click',() => 
    {
        document.querySelector('.active')?.classList.remove('active');
        menusLink.classList.add('active');
    })
});