let form = document.querySelector('#parking-form')
// let formIsValid



form.addEventListener('submit', function(event){
    event.preventDefault()
    // removeErrorMessage()
    formIsValid = true
    console.log ("button was clicked")

    validateName()
    validateCarYear ()
    validateCarMake()
    // validateCarModel ()
    // validateDate ()
    // validateDuration ()
    // validateCreditCard ()
    // validateCVV ()
    // validateExpiry ()
   
})

// the variable assignments for 'something -label' are, for now, placeholders to create text on the appropriate fields if that field is evaluated as invalid.  The variable definitions are not commented out, but their assignments are.

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

function validateCarYear() {
    let carYearInput = document.querySelector('#car-year');
    let carYearValue = carYearInput.value;
    console.log (carYearValue)
    let inputGroupField = carYearInput.parentElement
    let carYearLabel = document.querySelector("car-year-label")
    if (carYearValue !== ""){
        inputGroupField.classList.remove("input-invalid");
        inputGroupField.classList.add("input-valid");
    // carYearLabel.textContent="Car Year";
    } else {
        inputGroupField.classList.remove("input-valid");
        inputGroupField.classList.add("input-invalid");
    // carYearLabel.textContent="Car Year is Required"
        }
    }

    function validateCarMake() {
    let carMakeInput = document.querySelector('#car-make');
    let carMakeValue = carMakeInput.value;
    console.log (carMakeValue)
    let inputGroupField = carMakeInput.parentElement
    let carMakeLabel = document.querySelector("car-make-label")
    if (carMakeValue !== ""){
        inputGroupField.classList.remove("input-invalid");
        inputGroupField.classList.add("input-valid");
    // carMakeLabel.textContent="Car Make";
    } else {
        inputGroupField.classList.remove("input-valid");
        inputGroupField.classList.add("input-invalid");
    // carmakeLabel.textContent="Car Make is Required"
        }
    }


    


// yourVariableLabel.textContent="thing";
// yourVariableLabel.textContent="thing is Required"


// set up variable for one field
//set up variable to grab content of that field
// create function to console log value of variable
// set up variables for all fields






