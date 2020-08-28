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
    //add inputs
    $('body').append(`<input id="firstNameInput" placeholder="First Name"></input>`);
    $('body').append(`<input id="lastNameInput" placeholder="Last Name"></input>`);
    $('body').append(`<input id="idNumber" placeholder="ID"></input>`);
    $('body').append(`<input id="jobTitle" placeholder="Title"></input>`);
    $('body').append(`<input id="annualSalary" placeholder="Salary"></input>`);
    //add submit
    $('body').append(`<button id="submitButton">Submit</button>`);
}

function submitInputs() {
    console.log($('#firstNameInput').val());
    console.log($('#lastNameInput').val());
    console.log($('#idNumber').val());
    console.log($('#jobTitle').val());
    console.log($('#annualSalary').val());

   let newEmployeeInfo = {
       firstName: $('#firstNameInput').val(),
       lastName: $('#lastNameInput').val(),
       id: $('#idNumber').val(),
       title: $('#jobTitle').val(),
       salary: $('#annualSalary').val()
   }

   employees.push(newEmployeeInfo);
}

