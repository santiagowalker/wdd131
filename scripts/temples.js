// hamburger menu





// footer date
const currentyear = new Date().getFullYear();
const year = document.getElementById("currentyear");
year.textContent = currentyear;

const lastdate = document.getElementById("lastModified");
const lastmodified = document.lastModified;
lastdate.textContent = lastmodified;

const hambButton = document.querySelector('#menu');
const navigation = document.querySelector('ul');

hambButton.addEventListener('click', () => {
    hambButton.classList.toggle('open');
    navigation.classList.toggle('open');
})
