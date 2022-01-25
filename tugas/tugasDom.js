const data = [
  { color: "#FFFFFF", title: "White" },
  { color: "#DA1212", title: "Lava" },
  { color: "#DACC96", title: "Winter Hazel" },
  { color: "#064635", title: "Evergreen" },
  { color: "#1572A1", title: "Nice Blue" },
  { color: "#655D8A", title: "Dolphin" },
  { color: "#FC28FB", title: "Bright Neon Pink" },
  { color: "#D9D7F1", title: "Fog" },
  { color: "#FDFF8F", title: "Pale Canary" },
  { color: "#71DFE7", title: "Turquoise Blue" },
  { color: "#3F3351", title: "Ship Grey" },
];

const box = document.getElementsByClassName("box");

for (let i = 0; i < box.length; i++) {
  box[i].classList.add("box-style");
  box[i].innerHTML        = data[i].title.toUpperCase();
  box[i].style.background = data[i].color;

  box[i].addEventListener("click", function () {
    box[0].style.background = data[i].color;
    box[0].innerHTML = data[i].title.toUpperCase();
    console.log(box[i].style.background);
  });
  
  if(i === 0){
    box[i].classList.add("box-style-spesial");
  }
}

// Button Reset
const reset = document.getElementById("reset");
reset.addEventListener("click", function() {
   box[0].style.background = data[0].color;
   box[0].innerHTML = data[0].title.toUpperCase();
})


