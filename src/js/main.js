const myPortFolio = (() => {
  const menuButton = document.querySelector('#menu-button')
  const menuIcon = menuButton.querySelector('i')
  const sideMenu = document.querySelector('#side-menu')
  let isOpen = false

  const changeIcon = () => {
    isOpen = !isOpen
    if (isOpen) {
      menuIcon.classList.remove('fa-bars')
      menuIcon.classList.add('fa-times')
    } else {
      menuIcon.classList.remove('fa-times')
      menuIcon.classList.add('fa-bars')
    }
  }

  menuButton.addEventListener('click', () => {
    sideMenu.classList.toggle('collapsed')
    changeIcon()
  })

  sideMenu.addEventListener('click', (event) => {
    const targetClass = event.target.className
    if (targetClass.includes('nav__link')) {
      sideMenu.classList.toggle('collapsed')
      changeIcon()
    }
  })
})()
