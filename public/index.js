const menu = document.getElementById('menu')
const burger = document.getElementById('hamburger')

burger.addEventListener('click', (event) => {
  if(menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
  } else {
    menu.classList.add('hidden')
  }
})