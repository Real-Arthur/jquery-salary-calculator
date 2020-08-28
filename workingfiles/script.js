console.log('I am JS')
let employees = [];

$(document).ready(readyNow);

function readyNow() {
console.log(`It's a me. jQuery.`)
addInputForm();

$(document).on('click', '#submitButton', submitInputs);
}

// Add form to html
function addInputForm() {
    $('body').append(`<h1>Add Employee</h1>`)
    console.log('this is doing something');
    //add first name
    $('body').append(`<input id="firstNameInput" placeholder="First Name"></input>`);
    
    $('body').append(`<button id="submitButton">Submit</button>`);

}

function submitInputs() {
    console.log($('#firstNameInput').val());
   let newEmployeeInfo = {
       name: $('#firstNameInput').val()
   }
   employees.push(newEmployeeInfo);
}

