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
<<<<<<< HEAD
}
=======
} 
>>>>>>> e820aff1e17486f3eb31db6fcae5394d798ce76d

document.getElementById("defaultPriceOpen").click();

function openAnswers(evt, answersContent) {
  var i, answersList, faqTab;

<<<<<<< HEAD
  // Скрываем все списки ответов
=======
>>>>>>> e820aff1e17486f3eb31db6fcae5394d798ce76d
  answersList = document.getElementsByClassName("faq__answers-list");
  for (i = 0; i < answersList.length; i++) {
    answersList[i].style.display = "none";
  }

<<<<<<< HEAD
  // Убираем класс "active" у всех табов
  faqTab = document.getElementsByClassName("faq__tab");
  for (i = 0; i < faqTab.length; i++) {
    faqTab[i].classList.remove("active");
  }

  // Показываем выбранный список
  var activeList = document.getElementById(answersContent);
  activeList.style.display = "block";

  // Делаем текущий таб активным
  evt.currentTarget.classList.add("active");

  // Открываем первый аккордеон в активном табе
  var firstAccordion = activeList.querySelector(".answer button");
  if (firstAccordion) {
    openAccordion(firstAccordion);
  }
}

// Функция для открытия аккордеона
function openAccordion(button) {
  var panel = button.nextElementSibling;
  button.classList.add("active");
  panel.style.maxHeight = panel.scrollHeight + "px";
}

// Функция для переключения аккордеона (открытие/закрытие)
function toggleAccordion(button) {
  var panel = button.nextElementSibling;
  var isActive = button.classList.contains("active");

  if (isActive) {
    button.classList.remove("active");
    panel.style.maxHeight = null;
  } else {
    openAccordion(button);
  }
}

// Обработчик событий для аккордеонов
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq__answers-list").forEach((list) => {
    list.addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        toggleAccordion(event.target);
      }
    });
  });

  // Открываем вкладку по умолчанию
  document.getElementById("defaultAnswersOpen").click();
});

const videoButton = document.querySelector('.video__button');

videoButton.addEventListener("click", loadVideo);

function loadVideo() {
  const videoContainer = document.querySelector('.video__container');
  const videoWrapper = document.querySelector('.video');

  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1&enablejsapi=1';
  Object.assign(iframe, {
    frameBorder: '0',
    allowFullscreen: true,
    width: '100%',
    height: '100%',
  });

  videoWrapper.classList.add("video--playing");
  videoWrapper.style.background = "none";
  videoButton.remove();

  iframe.onload = () => {
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  };

  videoContainer.appendChild(iframe);
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,

  navigation: {
    nextEl: '.juri__swiper-button-next',
    prevEl: '.juri__swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 40
    },
    1366: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 40
    }
  }
});
=======
  faqTab = document.getElementsByClassName("faq__tab");
  for (i = 0; i < faqTab.length; i++) {
    faqTab[i].className = faqTab[i].className.replace(" active", "");
  }

  document.getElementById(answersContent).style.display = "block";
  evt.currentTarget.className += " active";
} 

document.getElementById("defaultAnswersOpen").click();
>>>>>>> e820aff1e17486f3eb31db6fcae5394d798ce76d

