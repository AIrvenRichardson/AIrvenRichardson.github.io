document.addEventListener("DOMContentLoaded", () => {

const button = document.querySelector("button");
const bodyText = document.querySelector("h1")
let ttd = "LKEAVE MESSAHE FGOR THE LENSE";

button.addEventListener("click", updateName);
button.addEventListener("mouseover", hovered);

function updateName() {
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      } 
      bodyText.textContent = txt;
}
});
