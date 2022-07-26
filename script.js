//Travail 1

const ol = document.querySelector('ol');
const a = ol.children[0];
const b = ol.children[1];
const c = ol.children[2];
const d = ol.children[3];
const e = ol.children[4];

e.appendChild(a);
a.appendChild(b);
b.appendChild(c);
c.appendChild(d);

//Travail 2

const allSection = document.querySelectorAll('section');
const sectionTwo = allSection[1];
const sectionThree = allSection[2];
const allH2 = document.querySelectorAll('h2');
const h2Two = allH2[1];
const h2Three = allH2[2];
const allP = document.querySelectorAll('p');
const p3 = allP[2];
const p4 = allP[3];

sectionTwo.appendChild(h2Three);
h2Three.appendChild(p3);
sectionThree.appendChild(h2Two);
h2Two.appendChild(p4);

// Travail 3

const footer = document.querySelector('footer');
footer.style.display = 'none';