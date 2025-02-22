//Kreiranje nove todo stavke
function createTask(task, number) {
  //Kreiranje elementa
  const element = document.createElement("div");
  //Dodavanje datuma kreiranja
  const date = getFormattedDate();
  element.innerHTML = `
        <input type="checkbox">
        <span>${task}</span>
        <span>Datum ${date}</span>
        <span>Ocjena od 1 do 10 = ${number}</span>
        <button class="remove-button">Remove</button>
    `;

  //Selektiranje buttona za brisanje i dodavanje eventa
  const button = element.querySelector("button");
  button.addEventListener("click", () => {
    element.remove();
  });

  //Selektiranje inputa sa chackboxom i mjenjanje klase
  const input = element.querySelector("input");
  input.addEventListener("change", (event) => {
    element.classList.toggle("task-complete", event.target.checked);
  });

  return element;
}

// Selektiranje forme i selektiranje liste
const form = document.querySelector("form");
const list = document.querySelector("#taskList");

// Listiner za submit
function submitForm(event) {
  // Dodavanje prevent default kako se ne bi osvjezila stranica
  event.preventDefault();

  // Kreiranje stavke kad se klikne na submit
  const formData = new FormData(form);

  if (formData.get("addTask") === "") {
    alert("Morate dodati stavku");

    return;
  }
  const task = createTask(formData.get("addTask"), formData.get("addNumber"));

  // Dodavanje stavke na listu
  list.appendChild(task);
}

//Dodavanje event listenera za submit
form.addEventListener("submit", submitForm);

// Funkcija za kreiranje datuma u formatu DD-MM-YYYY HH:MM
function getFormattedDate() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year} ${hours}:${minutes}`;
}
