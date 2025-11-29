
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});


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
    templeName: "Pittsburgh Pennsylvania",
    location: "Pittsburgh, Pennsylvania",
    dedicated: "2021, August, 21",
    area: 32240,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/pittsburgh-pennsylvania-temple/pittsburgh-pennsylvania-temple-53458.jpg"
  },
  {
    templeName: "Seattle Washington",
    location: "Seattle, Washington",
    dedicated: "1978, May 27",
    area: 110000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-66152.jpg"
  },
  {
    templeName: "San Antonio Texas",
    location: "San Antonio, Texas",
    dedicated: "2003, March 29",
    area: 116642,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/san-antonio-texas-temple/san-antonio-texas-temple-55647-main.jpg"
  }
];

function createTempleCard(temple) {
  let card = document.createElement('section');
  let name = document.createElement('h3');
  let location = document.createElement('p');
  let dedicated = document.createElement('p');
  let area = document.createElement('p');
  let image = document.createElement('img');

  name.textContent = temple.templeName;
  location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
  dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
  area.innerHTML = `<span class="label">Square Footage:</span> ${temple.area} sq ft`;

  image.src = temple.imageUrl;
  image.alt = `${temple.templeName} Temple`;
  image.loading = 'lazy';

  card.classList.add('temple-card');

  card.append(name, location, dedicated, area, image);
  document.querySelector(".res-grid").appendChild(card);
}

function filterTemples(criteria) {
  document.querySelector(".res-grid").innerHTML = "";
  let filtered = temples;

  switch (criteria) {
    case "old":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      break;

    case "new":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      break;

    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;

    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;

    default:
      filtered = temples;
  }

  filtered.forEach(createTempleCard);
}

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    
    let page = e.target.textContent.toLowerCase();

    if (page === "home") filterTemples("home");
    else if (page === "old") filterTemples("old");
    else if (page === "new") filterTemples("new");
    else if (page === "large") filterTemples("large");
    else if (page === "small") filterTemples("small");
  });
});

filterTemples("home");
