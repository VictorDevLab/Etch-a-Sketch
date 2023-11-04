const main = document.getElementById("main");

//a funnction that creates x numbers of divs

function createDivs(x) {
  for (let rows = 0; rows < x; rows++) {
    for (let columns = 0; columns < x; columns++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      main.appendChild(div);
      const heightValue = 600 / x;
      div.style.height = heightValue + "px";
      div.style.width = heightValue + "px";
    }
  }
}

createDivs(16);
