let form = document.querySelector('#parking-form')
let formIsValid



form.addEventListener('submit', function(event){
    event.preventDefault()
    removeErrorMessage()
    formIsValid = true
//these 3 lines will remove the error messages and reset the form when it is being used.  Does it reset the form every time?  

//next, here are all of the functions you will need to create to validate each line of input for the form
    validateName()
    validateCarYear ()
    validateCarMake ()
    validateCarModel ()
    validateDate ()
    validateDuration ()
    validateCreditCard ()
    validateCVV ()
    validateExpiry ()
   
})

//now, write each function sequentially, naming them as you have named them above, so that the eventListener can call these functions in the code above

// console.log('Add validation!')
// document.getElementById("submit-button")
let nameInput = document.querySelector("#name");
let givenName = nameInput.value;
// set up variable for one field
//set up variable to grab content of that field
// create function to console log value of variable
// set up variables for all fields







