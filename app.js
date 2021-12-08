
//profile page input fields
const hide = document.getElementById('hide');
const change = document.getElementById('change');

function myFunction() {

if (change.style.display === "none") {
    const nameValue = document.getElementById("name").value;
    const surnameValue = document.getElementById("surname").value;
    change.innerHTML = `Hello ${nameValue} ${surnameValue} `;
    change.style.display = "block";
}
    hide.style.visibility = "hidden";
    return false;
}