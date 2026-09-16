const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '76px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px 6vw';
  nav.style.background = '#fbfcfa';
  nav.style.flexDirection = 'column';
  nav.style.borderBottom = '1px solid #dbe6e3';
});
