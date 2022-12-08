const btn = document.querySelector("button");
const pwInput = document.querySelector("input");

/*btn.addEventListener("click", function () {
  pwInput.setAttribute("value", text);
});*/

btn.addEventListener("click", function () {
  if (pwInput.type === "password") {
    pwInput.type = "text";
    // change button text to Hide Password
    btn.innerText = "Hide Password";
  } else {
    pwInput.type = "password";
    btn.innerText = "Show Password";
  }
});

/*
Start: Input Feld und Button
Was: bei Button geklickt, Wechsel zw. Show Password und Hide Password im Button und Input Feld soll demnach reagieren
Wie: addEventlistener, setAttribute mit value


*/
