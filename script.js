let form = document.querySelector('#parking-form')
// let formIsValid



form.addEventListener('submit', function(event){
    event.preventDefault()
    // removeErrorMessage()
    // formIsValid = true
    console.log ("button was clicked")

    validateName()
    validateCar()
    validateDate()
    validateDays()
    validateCC()
    validateCvv()
    validateExpiry()
   
})

// the variable assignments for 'something -label' are, for now, placeholders to create text on the appropriate fields if that field is evaluated as invalid.  The variable definitions are not commented out, but their assignments are.

function validateName() {
let nameInput = document.querySelector('#name');
let nameValue = nameInput.value;
let nameLabel = document.getElementsByTagName("label") [0]
console.log (nameLabel)
console.log (nameValue)
let nameField = nameInput.parentElement
if (nameValue !== ""){
    nameField.classList.remove("input-invalid");
    nameField.classList.add("input-valid");
    nameLabel.textContent="Name";
} else {
    nameField.classList.remove("input-valid");
    nameField.classList.add("input-invalid");
    nameLabel.textContent="Name is Required"
    }
}

// to do: make the car and car error message turn red; add the class valid or invalid to that grandparent element somehow.  call it gpCarLabel

function validateCar() {
    let carYearInput = document.querySelector('#car-year');
    let carYearValue = carYearInput.value;
    let carMakeInput = document.querySelector('#car-make');
    let carMakeValue = carMakeInput.value;
    let carModelInput = document.querySelector('#car-model');
    let carModelValue = carModelInput.value;
    let carLabel = document.getElementsByTagName("label") [1]

    console.log (carLabel)
    console.log (carYearValue)
    console.log (carMakeValue)
    console.log (carModelValue)
    let inputGroupField = carYearInput.parentElement
    let gpCarLabel = inputGroupField.parentElement
    // let carYearLabel = document.querySelector("car-year-label")
    // let carMakeLabel = document.querySelector("car-make-label")    
    // let carModelLabel = document.querySelector("car-model-label")
    if (carYearValue !== "" && carMakeValue !== "" && carModelValue !== "") {
        inputGroupField.classList.remove("input-invalid");
        gpCarLabel.classList.remove("input-invalid");
        inputGroupField.classList.add("input-valid");
        gpCarLabel.classList.add("input-valid");
        carLabel.textContent="Car";
    } else {
        inputGroupField.classList.remove("input-valid");
        gpCarLabel.classList.remove("input-valid");
        inputGroupField.classList.add("input-invalid");
        gpCarLabel.classList.add("input-invalid");
        carLabel.textContent="Car Year, Make, and Model are required";

        }
    }

function validateDate() {
    let dateInput = document.querySelector('#start-date');
    let dateValue = dateInput.value;
    console.log (dateValue)
    let dateField = dateInput.parentElement
    let dateLabel = document.querySelector("start-date-label")
    if (dateValue !== ""){
        dateField.classList.remove("input-invalid");
        dateField.classList.add("input-valid");
        // dateLabel.textContent="Date parking";
    } else {
        dateField.classList.remove("input-valid");
        dateField.classList.add("input-invalid");
        // dateLabel.textContent="Date parking is Required"
        }
    }

function validateDays() {
    let daysInput = document.querySelector('#days');
    let daysValue = daysInput.value;
    console.log (daysValue)
    let daysField = daysInput.parentElement
    let daysLabel = document.querySelector("days-label")
    if (daysValue !== ""){
        daysField.classList.remove("input-invalid");
        daysField.classList.add("input-valid");
        // daysLabel.textContent="Number of Days";
    } else {
        daysField.classList.remove("input-valid");
        daysField.classList.add("input-invalid");
        // daysLabel.textContent="Number of Days is Required"
        }
    }

function validateCC() {
    let CCInput = document.querySelector('#credit-card');
    let CCValue = CCInput.value;
    console.log (CCValue)
    let CCField = CCInput.parentElement
    let CCLabel = document.querySelector("credit-card-label")
    if (CCValue !== ""){
        CCField.classList.remove("input-invalid");
        CCField.classList.add("input-valid");
        // CCLabel.textContent="Credit Card";
    } else {
        CCField.classList.remove("input-valid");
        CCField.classList.add("input-invalid");
        // CCLabel.textContent="Credit Card is Required"
        }
    }
    
function validateCvv() {
    let cvvInput = document.querySelector('#cvv');
    let cvvValue = cvvInput.value;
    console.log (cvvValue)
    let cvvField = cvvInput.parentElement
    let cvvLabel = document.querySelector("cvv-label")
    if (cvvValue !== ""){
        cvvField.classList.remove("input-invalid");
        cvvField.classList.add("input-valid");
        // cvvLabel.textContent="CVV";
    } else {
        cvvField.classList.remove("input-valid");
        cvvField.classList.add("input-invalid");
        // cvvLabel.textContent="CVV is Required"
        }
    }

function validateExpiry() {
    let expiryInput = document.querySelector('#expiration');
    let expiryValue = expiryInput.value;
    console.log (expiryValue)
    let expiryField = expiryInput.parentElement
    let expiryLabel = document.querySelector("expiration-label")
    if (expiryValue !== ""){
        expiryField.classList.remove("input-invalid");
        expiryField.classList.add("input-valid");
        // expiryLabel.textContent="Expiration";
    } else {
        expiryField.classList.remove("input-valid");
        expiryField.classList.add("input-invalid");
        // expiryLabel.textContent="Expiration is Required"
        }
    }
    


// yourVariableLabel.textContent="thing";
// yourVariableLabel.textContent="thing is Required"


// set up variable for one field
//set up variable to grab content of that field
// create function to console log value of variable
// set up variables for all fields






