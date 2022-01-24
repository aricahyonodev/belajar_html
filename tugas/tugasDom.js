const data = [
  { color: "#FFFFFF", title: "White" },
  { color: "#DA1212", title: "Lava" },
  { color: "#DACC96", title: "Winter Hazel" },
  { color: "#064635", title: "Evergreen" },
];

const box = document.getElementsByClassName("box");
for (let i = 0; i < box.length; i++) {
  box[i].classList.add("box-style");
  box[i].innerHTML        = data[i].title.toUpperCase();
  box[i].style.background = data[i].color;
  if(i === 0){
    box[i].classList.add("box-style-spesial");
  }
}




