const priceList = document.getElementsByClassName("price__list");
const priceTab = document.getElementsByClassName("price__tab");

function openPrice(evt, priceNumber) {

  for (let i = 0; i < priceList.length; i++) {
    priceList[i].style.display = "none";
  }

  for (let i = 0; i < priceTab.length; i++) {
    priceTab[i].className = priceTab[i].className.replace(" active", "");
  }

  document.getElementById(priceNumber).style.display = "grid";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultPriceOpen").click();