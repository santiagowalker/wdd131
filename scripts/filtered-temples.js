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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Brasilia, Brazil",
        location: "Brasilia, Brazil",
        dedicated: "2023, September, 12",
        area: 25000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
    },
    {
        templeName: "Buenos Aires, Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "2012, September, 9",
        area: 30659,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
    },
    {
        templeName: "Rome, Italy",
        location: "Rome, Italy ",
        dedicated: "2019, March, 10-12",
        area:41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    }

    // Add more temple objects here...
];
function displayTemples(temples) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    temples.forEach(temple => {
        const card = document.createElement('figure');
        //  Add Name
        const name = document.createElement('h3');
        card.appendChild(name)
        name.textContent = temple.templeName;
        //  Add location
        const location = document.createElement('p');
        card.appendChild(location);
        location.textContent = `Location: ${temple.location}`;
        // Add dedication date
        const dedicationDate = document.createElement('p');
        card.appendChild(dedicationDate);
        dedicationDate.textContent = `Dedicated: ${temple.dedicated}`;
        //  Add total area
        const totalArea = document.createElement('p');
        card.appendChild(totalArea);
        totalArea.textContent = `Size: ${temple.area}`;
        const templeImg = document.createElement('img');
        card.appendChild(templeImg);
        templeImg.src = temple.imageUrl;
        templeImg.alt = temple.templeName;
        templeImg.loading = "lazy";
        container.appendChild(card);
    }
    );  
}

const home = document.getElementById('home');
const old = document.getElementById('old');
const newLink = document.getElementById('new');
const large = document.getElementById('large');
const small = document.getElementById('small');

displayTemples(temples);

home.addEventListener('click',()=>{
    displayTemples(temples);
});

old.addEventListener('click', () => {
    const oldTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.slice(0, 4));
        if (year < 1900) {
            return true;
        }
    });
    displayTemples(oldTemples);
});

newLink.addEventListener('click', () => {
    const newTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.slice(0, 4));
        if (year > 2000) {
            return true;
        }
    });
    displayTemples(newTemples);
});

large.addEventListener('click', () => {
    const largeTemples = temples.filter(temple => {
        if (temple.area > 90000) {
            return true;
        }
    });
    displayTemples(largeTemples);
});

small.addEventListener('click', () => {
    const smallTemples = temples.filter(temple => {
        if (temple.area < 10000) {
            return true;
        }
    });
    displayTemples(smallTemples);
});