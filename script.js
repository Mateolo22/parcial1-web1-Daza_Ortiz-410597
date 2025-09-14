// SPA Navigation con Vanilla JS
const buttons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('.section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    
    btn.classList.add('active');
    document.getElementById(btn.dataset.section).classList.add('active');
  });
});
