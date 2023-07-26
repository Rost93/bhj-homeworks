
const parentCheckboxes = document.querySelectorAll(".interest__check");

function handleParentCheckboxChange(event) {
  const parentCheckbox = event.target;
  const nestedList = parentCheckbox.closest(".interest").querySelector(".interests_active");
  const nestedCheckboxes = nestedList.querySelectorAll(".interest__check");

  for (const nestedCheckbox of nestedCheckboxes) {
    nestedCheckbox.checked = parentCheckbox.checked;
  }
}

for (const parentCheckbox of parentCheckboxes) {
  parentCheckbox.addEventListener("change", handleParentCheckboxChange);
}
