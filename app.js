let navigation = document.querySelector('.navigation')
let menuBtn = document.querySelector('.humburger-menu')

menuBtn.addEventListener('click', function () {
  navigation.classList.toggle('hide-navigation')
})

window.addEventListener('resize', function () {
  if (screen.width > 425) {
    navigation.classList.remove('hide-navigation')
  }
})