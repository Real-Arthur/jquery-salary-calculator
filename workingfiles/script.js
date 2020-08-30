console.log('I am JS')
let employees = [];

$(document).ready(readyNow);

function readyNow() {

console.log(`It's a me. jQuery.`)
addInputForm();
blankTable();

$(document).on('click', '#submitButton', submitInputs);
$(document).on('click', '.deleteBtn', deleteEmployee);

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
    let employeeSalary =  parseInt($('#annualSalary').val());
    $(this).data('mySalary', Math.round(employeeSalary / 12));
    //
//    let newEmployeeInfo = {
//        firstName: $('#firstNameInput').val(),
//        lastName: $('#lastNameInput').val(),
//        id: $('#idNumber').val(),
//        title: $('#jobTitle').val(),
//        salary: $('#annualSalary').val()
//    }   
   
   let newEmployeeInfo = {
       firstName: employeeFirstName,
       lastName: employeeLastName,
       id: employeeId,
       title: employeeTitle,
       salary: employeeSalary
   }

   newEmployeeInfo.monthlySalary = Math.round(employeeSalary / 12);
   
   //Add Employee Info to Array of Employees
   employees.push(newEmployeeInfo);
   //Add Info to Table
   $('table').append(`
   <tr>
   <td>${employeeFirstName}</td>
   <td>${employeeLastName}</td>
   <td>${employeeId}</td>
   <td>${employeeTitle}</td>
   <td class="compensation">${employeeSalary}</td>
   <td class="delete"><td>
   </tr>`
   )
   $('tr:last-child').append(`<button class="deleteBtn">Delete</button>`);
   console.log($(this).data('mySalary'));
   addToExpense($(this).data('mySalary'));
    // calculateMonthlyExpenses();
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


    
    $('html').append(`<footer id="footer" class="footer">Total Monthly: $0</footer>`)
}
function emptyFields() {
    $('#firstNameInput').val("");
    $('#lastNameInput').val("");
    $('#idNumber').val("");
    $('#jobTitle').val("");
    $('#annualSalary').val("");
}
let monthlyExpenses = 0;

function calculateMonthlyExpenses() {
    for(employee of employees) {
        monthlyExpenses += employee.monthlySalary;
    }
    console.log(monthlyExpenses);
    $('footer').data(`monthly`, `${monthlyExpenses}`);
    let salaryData = $('footer').data('monthly');
    $('footer').text(`Total Monthly: $${salaryData}`)
    
    if(salaryData > 20000) {
        $('footer').css('background', 'red');
    }
    return monthlyExpenses;
}

function addToExpense(value) {
    monthlyExpenses += value;

    // might work
    $('footer').data(`monthly`, `${monthlyExpenses}`);
    let salaryData = $('footer').data('monthly');
    $('footer').text(`Total Monthly: $${salaryData}`)
    if(monthlyExpenses > 20000) {
        $('footer').css('background', 'red');
    } else {
        $('footer').css('background', 'white');
    }
    //

    return monthlyExpenses;
}


function deleteEmployee() {
    let inside = parseInt($(this).siblings('.compensation').text());
    let salary = Math.round(-(inside / 12));
    console.log('delete button a go')
    $(this).closest('tr').remove();
    console.log(salary);
    addToExpense(salary);
    
}