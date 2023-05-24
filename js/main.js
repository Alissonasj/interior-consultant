const checkBox = document.querySelector('.checkbox');
const menu = document.querySelector('#menu')

checkBox.addEventListener('change', () => {
    checkBox.checked ? menu.style.top = '0%' : menu.style.top = '-200%'
});