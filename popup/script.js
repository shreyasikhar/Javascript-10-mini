const container = document.getElementById('container');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', () => {
    container.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    container.classList.remove('active');
});