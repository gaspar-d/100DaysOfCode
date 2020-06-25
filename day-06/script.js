const buttons = document.querySelectorAll(".counterBtn");

console.log(buttons[0]);
let counter = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("addBtn")) {
      counter++;
    } else if (button.classList.contains("subBtn")) {
      counter--;
    }

    const setCounter = document.querySelector("#count");
    setCounter.innerText = counter;
  });
});
