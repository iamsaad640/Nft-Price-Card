function visible() {
  document
    .querySelector(".image-container img")
    .setAttribute("style", "transform:scale(1.2); transition:transform .3s;");

  const attr = document.createAttribute("style");
  attr.value = "visibility: visible; cursor:pointer;";
  document.querySelector(".view-icon").setAttributeNode(attr);
  document
    .querySelector("#overlay")
    .setAttribute("style", "display:block; transition: ease .3s");
}

function invisible() {
  document
    .querySelector(".image-container img")
    .setAttribute("style", "transform:scale(1.05); transition:transform .3s;");
  const attr = document.createAttribute("style");
  attr.value = "visibility: hidden; cursor:auto;";
  document.querySelector(".view-icon").setAttributeNode(attr);
  document
    .querySelector("#overlay")
    .setAttribute("style", "display:none; transition: ease .3s");
}
