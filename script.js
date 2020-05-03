let form = document.querySelector('#parking-form')
// let formIsValid



form.addEventListener('submit', function(event){
    event.preventDefault()
    // removeErrorMessage()
    // formIsValid = true
    console.log ("button was clicked")
    let qCar

    validateName()
    validateCar()
    validateDate()
    // qualifyDate()
    validateDays()
    validateCC()
    validateCvv()
    validateExpiry()
   
})

function validateName() {
    let nameInput = document.querySelector('#name');
    let nameValue = nameInput.value;
    let nameLabel = document.getElementsByTagName("label") [0]
    // console.log (nameValue)
    let nameField = nameInput.parentElement
    if (nameValue === ""){
        nameField.classList.remove("input-valid");
        nameField.classList.add("input-invalid");
        nameLabel.textContent="Name is Required"
    } else {        
        nameField.classList.remove("input-invalid");
        nameField.classList.add("input-valid");
        nameLabel.textContent="Name";
        }
    }



function validateCar() {
    let carYearInput = document.querySelector('#car-year');
    let carYearValue = carYearInput.value;
    let carMakeInput = document.querySelector('#car-make');
    let carMakeValue = carMakeInput.value;
    let carModelInput = document.querySelector('#car-model');
    let carModelValue = carModelInput.value;
    let carLabel = document.getElementsByTagName("label") [1]
    console.log (carYearValue)
    console.log (carMakeValue)
    console.log (carModelValue)
    let inputGroupField = carYearInput.parentElement;
    let gpCarLabel = inputGroupField.parentElement;
    let currentYear = new Date().getFullYear();
    if (carYearValue === "" || carMakeValue === "" || carModelValue === "") {
        inputGroupField.classList.remove("input-valid");
        gpCarLabel.classList.remove("input-valid");
        inputGroupField.classList.add("input-invalid");
        gpCarLabel.classList.add("input-invalid");
        carLabel.textContent="Car Year, Make, and Model are required fields";
    } else if (isNaN(carYearValue) || carYearValue < 1901 || carYearValue > currentYear){
        inputGroupField.classList.remove("input-valid");
        gpCarLabel.classList.remove("input-valid");
        inputGroupField.classList.add("input-invalid");
        gpCarLabel.classList.add("input-invalid");
        carLabel.textContent="Year is not a valid number";
    }
    else { 
        inputGroupField.classList.remove("input-invalid");
        gpCarLabel.classList.remove("input-invalid");
        inputGroupField.classList.add("input-valid");
        gpCarLabel.classList.add("input-valid");
        carLabel.textContent="Car";
        }
    }


function validateDate() {
    let dateInput = document.querySelector('#start-date');
    let dateValue = dateInput.value;
    let dateLabel = document.getElementsByTagName("label") [2]
    console.log (dateValue)
    let dateField = dateInput.parentElement
    if (dateValue === ""){
        dateField.classList.remove("input-valid");
        dateField.classList.add("input-invalid");
        dateLabel.textContent="Date parking is a required field"
    } else {
        dateField.classList.remove("input-invalid");
        dateField.classList.add("input-valid");
        dateLabel.textContent="Date parking";
        }
    }

// function qualifyDate () {
//     let dateInput = document.querySelector('#start-date');
//     let dateValue = dateInput.value;
//     let dateLabel = document.getElementsByTagName("label") [2]
//     let dateField = dateInput.parentElement
//     let currentDate = new Date
   
//     console.log ("today's date is ", currentDate)
//     console.log ("parking date is ", dateValue)

//     if (dateValue.getTime() <= currentDate.getTime()) {
//         dateField.classList.remove("input-valid");
//         dateField.classList.add("input-invalid");
//         dateLabel.textContent="Date must be in the future"
//     } else {
//         dateField.classList.remove("input-invalid");
//         dateField.classList.add("input-valid");
//         dateLabel.textContent="Date parking";
//     }
// }

function validateDays() {
    let daysInput = document.querySelector('#days');
    let daysValue = daysInput.value;
    // console.log (daysValue)
    let daysField = daysInput.parentElement
    let daysLabel = document.getElementsByTagName("label") [3]
    if (daysValue === ""){
        daysField.classList.remove("input-valid");
        daysField.classList.add("input-invalid");
        daysLabel.textContent="Number of Days is Required"
    } else if(isNaN(daysValue) || daysValue > 30){
        daysField.classList.remove("input-valid");
        daysField.classList.add("input-invalid");
        daysLabel.textContent="Days must be a number between 1 and 30"  
    } else {
        daysField.classList.remove("input-invalid");
        daysField.classList.add("input-valid");
        daysLabel.textContent="Number of Days";
        }
    }

function validateCC() {
    let CCInput = document.querySelector('#credit-card');
    let CCValue = CCInput.value;
    // console.log (CCValue)
    let CCField = CCInput.parentElement
    let CCLabel = document.getElementsByTagName("label") [4]
    if (CCValue === ""){
        CCField.classList.remove("input-valid");
        CCField.classList.add("input-invalid");
        CCLabel.textContent="Credit Card is Required"
    } else {
        CCField.classList.remove("input-invalid");
        CCField.classList.add("input-valid");
        CCLabel.textContent="Credit Card";
        }
    }
    
function validateCvv() {
    let cvvInput = document.querySelector('#cvv');
    let cvvValue = cvvInput.value;
    // console.log (cvvValue)
    let cvvField = cvvInput.parentElement
    let cvvLabel = document.getElementsByTagName("label") [5]
    if (cvvValue === ""){
        cvvField.classList.remove("input-valid");
        cvvField.classList.add("input-invalid");
        cvvLabel.textContent="CVV is Required";
    } else if (cvvValue < 99 || cvvValue > 999){
        cvvField.classList.remove("input-valid");
        cvvField.classList.add("input-invalid");
        cvvLabel.textContent="CVV should be a 3-digit number"
    } else {
        cvvField.classList.remove("input-invalid");
        cvvField.classList.add("input-valid");
        cvvLabel.textContent="CVV";
        }
    }


function validateExpiry() {
    let expiryInput = document.querySelector('#expiration');
    let expiryValue = expiryInput.value;
    // console.log (expiryValue)
    let expiryField = expiryInput.parentElement
    let expiryLabel = document.getElementsByTagName("label") [6]
    if (expiryValue === ""){
        expiryField.classList.remove("input-valid");
        expiryField.classList.add("input-invalid");
        expiryLabel.textContent="Expiration is Required";
    } else {
        expiryField.classList.remove("input-invalid");
        expiryField.classList.add("input-valid");
        expiryLabel.textContent="Expiration";
        }
    }
    


// yourVariableLabel.textContent="thing";
// yourVariableLabel.textContent="thing is Required"


// set up variable for one field
//set up variable to grab content of that field
// create function to console log value of variable
// set up variables for all fields






