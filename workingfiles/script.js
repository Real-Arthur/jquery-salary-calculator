console.log('I am JS')
let employees = [];

$(document).ready(readyNow);

function readyNow() {

console.log(`It's a me. jQuery.`)
addInputForm();
blankTable();
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
    let employeeFirstName =  $('#firstNameInput').val()
    let employeeLastName =  $('#lastNameInput').val();
    let employeeId =  $('#idNumber').val();
    let employeeTitle =  $('#jobTitle').val();
    let employeeSalary =  $('#annualSalary').val();
    //
   let newEmployeeInfo = {
       firstName: $('#firstNameInput').val(),
       lastName: $('#lastNameInput').val(),
       id: $('#idNumber').val(),
       title: $('#jobTitle').val(),
       salary: $('#annualSalary').val()
   }
   //Add Employee Info to Array of Employees
   employees.push(newEmployeeInfo);
   //Add Info to Table
   $('table').append(`<tr>
   <td>${employeeFirstName}</td>
   <td>${employeeLastName}</td>
   <td>${employeeId}</td>
   <td>${employeeTitle}</td>
   <td>${employeeSalary}</td>
   </tr>`)
   //Clear Fields
   emptyFields();
}
function blankTable() {
    $('body').append(`<h2>Employees</h2>`)
    $('body').append(`<table></table>`)
    $('table').append(`<tr></tr>`)
    $('tr').append(`<th>First Name</th>`)
    $('tr').append(`<th>Last Name</th>`)
    $('tr').append(`<th>ID</th>`)
    $('tr').append(`<th>Title</th>`)
    $('tr').append(`<th>Salary</th>`)
    $('tr').append(`<th></th>`)
}
function emptyFields() {
    $('#firstNameInput').val("");
    $('#lastNameInput').val("");
    $('#idNumber').val("");
    $('#jobTitle').val("");
    $('#annualSalary').val("");
}
