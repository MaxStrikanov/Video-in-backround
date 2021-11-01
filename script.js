const dayNight = document.querySelector('.dayNight');
const menuToggle = document.querySelector('.menuToggle');
const body = document.querySelector('body');
const navigation = document.querySelector('.navigation');

dayNight.onclick = () => {
  body.classList.toggle('dark');
  dayNight.classList.toggle('active')
}

menuToggle.onclick = () => {
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}