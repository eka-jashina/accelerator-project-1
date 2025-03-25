function openAccordion(button) {
  const panel = button.nextElementSibling;
  button.classList.add("active");
  panel.style.maxHeight = panel.scrollHeight + "px";
}

function toggleAccordion(button) {
  const panel = button.nextElementSibling;
  const isActive = button.classList.contains("active");

  if (isActive) {
    button.classList.remove("active");
    panel.style.maxHeight = null;
  } else {
    openAccordion(button);
  }
}

export {toggleAccordion, openAccordion}
