const accordeonContainer = document.querySelector('.accordeon__container');
let accordeonItems = document.querySelectorAll('.accordeon__item');

if(accordeonItems){
    for(item of accordeonItems){
        item.addEventListener('click', function(){

            this.classList.toggle('active')

        });
    };
}