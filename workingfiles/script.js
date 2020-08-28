console.log('I am JS')

$(document).ready(readyNow);

function readyNow() {
console.log(`It's a me. jQuery.`)
addInputForm();
}

// Add form to html
function addInputForm() {
    //Add form
    $('body').append(`<form></form>`);
    console.log('this is doing something');
    //add first name to form
    $('form').append(`<label for="firstName">First Name</label>
    <input id="firstNameInput" name="firstName"></input>`);
    
    $('form').append(`<label for="lastName">Last Name</label>
    <input id="lastNameInput" name="lastName"></input>`);
    
    $('form').append(`<label for="idNumber">ID</label>
    <input id="idNumberInput" name="idNumber"></input>`);
    
    $('form').append(`<label for="jobTitle">Title</label>
    <input id="jobTitleInput" name="jobTitle"></input>`);
    
    $('form').append(`<label for="annualSalary">Annual Salary</label>
    <input id="AnnualSalaryInput" name="annualSalary"></input>`);

    $('form').append(`<input type="submit" value="Submit"`)
}