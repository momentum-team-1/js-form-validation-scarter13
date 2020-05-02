let form = document.querySelector('#parking-form')
// let formIsValid



form.addEventListener('submit', function(event){
    event.preventDefault()
    // removeErrorMessage()
    formIsValid = true
    console.log ("button was clicked")

    validateName()
    // validateCarYear ()
    // validateCarMake ()
    // validateCarModel ()
    // validateDate ()
    // validateDuration ()
    // validateCreditCard ()
    // validateCVV ()
    // validateExpiry ()
   
})

function validateName() {
let nameInput = document.querySelector('#name');
let nameValue = nameInput.value;
console.log (nameValue)
let nameField = nameInput.parentElement
let nameLabel = document.querySelector("name-label")
if (nameValue !== ""){
    nameField.classList.remove("input-invalid");
    nameField.classList.add("input-valid");
    // nameLabel.textContent="Name";
} else {
    nameField.classList.remove("input-valid");
    nameField.classList.add("input-invalid");
    // nameLabel.textContent="Name is Required"
    }
}

    



// set up variable for one field
//set up variable to grab content of that field
// create function to console log value of variable
// set up variables for all fields






