const answersList = document.getElementsByClassName("faq__answers-list");
const faqTab = document.getElementsByClassName("faq__tab");

function openAnswers(evt, answersContent) {
  // Скрываем все списки ответов
  for (let i = 0; i < answersList.length; i++) {
    answersList[i].style.display = "none";
  }

  // Убираем класс "active" у всех табов
  for (let i = 0; i < faqTab.length; i++) {
    faqTab[i].classList.remove("active");
  }

  // Показываем выбранный список
  const activeList = document.getElementById(answersContent);
  activeList.style.display = "block";

  // Делаем текущий таб активным
  evt.currentTarget.classList.add("active");

  // Открываем первый аккордеон в активном табе
  const firstAccordion = activeList.querySelector(".answer button");
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