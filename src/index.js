import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

const navigator = document.querySelector(".nav");
navigator.addEventListener("mouseover", (event) => {
  if (event.target.matches("a")) {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
    navigator.style.backgroundColor = "gray";
  }
});

navigator.addEventListener("mouseout", (event) => {
  if (event.target.matches("a")) {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
    navigator.style.backgroundColor = "white";
  }
});

const footer = document.querySelector(".footer");
footer.addEventListener("mousedown", (event) => {
  if (event.target.matches("p")) {
    let newAnchor = document.createElement("a");
    newAnchor.textContent = "Bize ulaşın";
    newAnchor.setAttribute("href", "www.google.com");
    newAnchor.style.textAlign = "center";
    newAnchor.style.textDecoration = "none";
    newAnchor.style.color = "black";
    newAnchor.style.fontSize = "2rem";
    newAnchor.style.display = "block";
    newAnchor.style.margin = "0 auto 1rem auto";
    footer.appendChild(newAnchor);
    footer.style.paddingBottom = "1rem";
  }
});

const destinations = document.getElementsByClassName("destination");
const parags = document.querySelectorAll(".destination p");
const h4 = document.querySelectorAll(".destination h4");
const btn = document.querySelectorAll(".destination .btn");

btn.forEach((array) => {
  array.addEventListener("click", (event) => {
    event.preventDefault();
    array.focus();
  });
  array.addEventListener("dblclick", (event) => {
    array.blur();
  });
});

for (let i = 0; i < destinations.length; i++) {
  let destinationDiv = document.createElement("div");
  destinationDiv.className = "destination-div";
  destinationDiv.id = `destination-div ${i + 1}`;
  destinationDiv.draggable = "true";
  destinationDiv.append(h4[i]);
  destinationDiv.append(parags[i]);
  destinationDiv.append(btn[i]);
  destinations[i].append(destinationDiv);
}

const destinationDivs = document.querySelectorAll(".destination-div");
const newDestination = document.querySelectorAll(".destination");
let dragItem = null;
destinationDivs.forEach((array) => {
  array.addEventListener("dragstart", (event) => {
    dragItem = array;
    setTimeout(() => {
      event.target.style.display = "none";
    }, 0);
  });

  array.addEventListener("dragend", (event) => {
    setTimeout(() => {
      event.target.style.display = "block";
      dragItem = null;
    }, 0);
  });

  newDestination.forEach((array) => {
    array.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    array.addEventListener("dragenter", (event) => {
      event.preventDefault();
    });

    array.addEventListener("drop", (event) => {
      array.appendChild(dragItem);
    });
  });
});

const sections = document.querySelectorAll(".content-section");

sections.forEach((array, index) => {
  array.addEventListener("click", (event) => {
    array.classList.toggle("content-section");
    array.classList.toggle("section-content-left");
  });
});

let fotoDiv = document.createElement("div");
const fotograf = document.querySelector("img");
fotoDiv.className = "big-img-div";
fotoDiv.appendChild(fotograf);
let baslik = document.querySelector(".intro");
baslik.insertBefore(fotoDiv, baslik.children[0]);

let fotograflarDiv = document.createElement("div");
for (let i = 0; i < 3; i++) {
  let yeniFoto = document.createElement("img");
  yeniFoto.src = `https://picsum.photos/20${i}`;
  yeniFoto.id = `new-photo-${i + 1}`;
  yeniFoto.draggable = "true";
  fotograflarDiv.appendChild(yeniFoto);
}
fotograflarDiv.style.textAlign = "center";
fotograflarDiv.className = "drag-photo-div";
baslik.appendChild(fotograflarDiv);

let dragPhotos = document.querySelector(".drag-photo-div");

let dragPhotoItem = null;
let dragPhotoItem2 = document.querySelector(".big-img-div img");
dragPhotoItem2.draggable = "true";

dragPhotos.addEventListener("dragstart", (event) => {
  if (event.target.matches("img")) {
    console.log("dragstart");
    dragPhotoItem = event.target;
    dragPhotoItem2 = document.querySelector(".big-img-div img");
    console.log(dragPhotoItem2);
    dragPhotoItem.style.maxWidth = "100%";
    dragPhotoItem.style.height = "auto";
    /* setTimeout(() => {
      event.target.style.display = "none";
    }, 0);*/
  }
});

dragPhotos.addEventListener("dragend", (event) => {
  if (event.target.matches("img")) {
    console.log("dragout");
    /* setTimeout(() => {
        event.target.style.display = block;
        dragPhotoItem = null;
      }, 0);*/
  }
});

let dropArea = document.querySelector(".big-img-div");
let dropArea2 = document.querySelector(".drag-photo-div");

dropArea.style.width = "100%";
dropArea.style.height = "auto";
dropArea.style.minHeight = "5vh";
dropArea.style.border = "solid 0.5rem black";
dropArea.style.textAlign = "center";
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropArea.addEventListener("dragenter", (event) => {
  event.preventDefault();
});

dropArea.addEventListener("drop", (event) => {
  dropArea.appendChild(dragPhotoItem);
  dragPhotoItem = null;
  dropArea2.appendChild(dragPhotoItem2);
  dragPhotoItem2 = null;
});

dropArea2.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropArea2.addEventListener("dragenter", (event) => {
  event.preventDefault();
});
