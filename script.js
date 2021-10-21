const firstElement = document.querySelector('h1');
firstElement.style.backgroundColor = "#7FFF00";
firstElement.style.width = "350px";

const pElements = document.getElementById('myDiv');
pElements.children[0].style.fontWeight = "800";
pElements.children[1].style.color = "red";
pElements.children[2].style.textDecoration = "underline";
pElements.children[3].style.fontStyle = "oblique";

const liElements = document.getElementById('myList');
liElements.style.listStyleType = "none";
liElements.style.display = "flex";

const spanElement = document.querySelector('span');
spanElement.style.opacity = "0";