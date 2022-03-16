let sub = document.querySelector('.sub');
let add = document.querySelector('.add');
let qtde = document.querySelector('.qtde');

sub.addEventListener('click', e => {
    e.preventDefault();
    if(qtde.value > 1){
        qtde.value--;
    };
});

add.addEventListener('click', e => {
    e.preventDefault();
    qtde.value++;
});