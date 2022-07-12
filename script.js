const btn = document.querySelector("[data-button]");
const input = document.querySelector("[data-input]");
const list = document.querySelector(".ul-list");

function sendInput(event) {
  event.preventDefault();
  const divUl = document.createElement("div");
  const li = document.createElement("li");
  const buttonUl = document.createElement("button");
  const buttonEdit = document.createElement("button");

  list.appendChild(divUl);
  divUl.appendChild(li);
  divUl.appendChild(buttonUl);
  divUl.appendChild(buttonEdit);

  divUl.classList.add("divItem");
  li.innerText = input.value;
  li.classList.add("liItem");
  buttonUl.innerText = "X";
  buttonEdit.innerText = "Edit";

  buttonUl.addEventListener("click", () => {
    list.removeChild(divUl);
  });

  buttonEdit.addEventListener("click", () => {
    const inputEdit = document.createElement("input");
    inputEdit.setAttribute("class", li.getAttribute("class"));

    while (li.firstChild) {
      inputEdit.appendChild(li.firstChild);
    }
    li.parentNode.replaceChild(inputEdit, li);

    inputEdit.addEventListener("change", () => {
      inputEdit.parentNode.replaceChild(li, inputEdit);
      li.innerText = inputEdit.value;
    });
  });

  if (!input.value) {
    list.removeChild(divUl);
  }
}

btn.addEventListener("click", sendInput);
