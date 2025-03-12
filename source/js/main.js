function openPrice(evt, priceNumber) {
  var i, priceList, priceTab;

  priceList = document.getElementsByClassName("price__list");
  for (i = 0; i < priceList.length; i++) {
    priceList[i].style.display = "none";
  }

  priceTab = document.getElementsByClassName("price__tab");
  for (i = 0; i < priceTab.length; i++) {
    priceTab[i].className = priceTab[i].className.replace(" active", "");
  }

  document.getElementById(priceNumber).style.display = "grid";
  evt.currentTarget.className += " active";
} 

document.getElementById("defaultPriceOpen").click();
