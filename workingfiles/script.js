console.log('I am JS')
// GLOBALS!
let employees = [];
let monthlyExpenses = 0;
// END OF GLOBALS!
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
    $('body').append(`
    <h1>
        Salary Calculator
    </h1>
    `)
    $('body').append(`
    <h2>
        Add Employee
    </h2>
    `)
    console.log('this is doing something');
    //add input fields
    $('body').append(`<input id="firstNameInput" placeholder="First Name"></input>`);
    $('body').append(`<input id="lastNameInput" placeholder="Last Name"></input>`);
    $('body').append(`<input id="idNumber" placeholder="ID"></input>`);
    $('body').append(`<input id="jobTitle" placeholder="Title"></input>`);
    $('body').append(`<input id="annualSalary" placeholder="Salary"></input>`);
    //add submit button
    $('body').append(`<button id="submitButton">Submit</button>`);
}

function submitInputs() {
    // Reassign input values to english
    let employeeFirstName = $('#firstNameInput').val()
    let employeeLastName = $('#lastNameInput').val();
    let employeeId = $('#idNumber').val();
    let employeeTitle = $('#jobTitle').val();
    // Make salary into number
    let employeeSalary = parseInt($('#annualSalary').val());
    // Calculate salary per month of 'this' employee
    $(this).data('mySalary', Math.round(employeeSalary / 12));
    // Make employees into objects
    let newEmployeeInfo = {
        firstName: employeeFirstName,
        lastName: employeeLastName,
        id: employeeId,
        title: employeeTitle,
        salary: employeeSalary
    }
    // Calculate monthly salary
    newEmployeeInfo.monthlySalary = Math.round(employeeSalary / 12);
    //Add Employee Info to Array of Employees
    employees.push(newEmployeeInfo);
    //Add Info to Table
    $('table').append(`
   <tr>
   <td>
        ${employeeFirstName}
   </td>
   <td>
        ${employeeLastName}
   </td>
   <td>
        ${employeeId}
   </td>
   <td>
        ${employeeTitle}
   </td>
   <td class="compensation">
        ${employeeSalary}
   </td>
   <td class="delete">
   </td>
   </tr>
   `) // End of table info
    // Add delete button to row as needed
    $('.delete').empty().append(`<button class="deleteBtn">Delete</button>`);
    // Plug 'this' employees monthly salary into addToExpenses function
    console.log(`Monthly salary is: $${$(this).data('mySalary')}`);
    addToExpense($(this).data('mySalary'));
    //Clear Fields
    emptyFields();
}

function blankTable() {
    // Table framework made on document load
    $('body').append(`<h2>
    Employees
    </h2>`)
    $('body').append(`<table></table>`)
    $('table').append(`<tr></tr>`)
    $('tr').append(`
    <th>
        First Name
    </th>`)
    $('tr').append(`
    <th>
        Last Name
    </th>`)
    $('tr').append(`
    <th>
        ID
    </th>`)
    $('tr').append(`
    <th>
        Title
    </th>`)
    $('tr').append(`
    <th>
        Salary
    </th>`)
    $('tr').append(`<th></th>`)
    // Monthly earnings footer
    $('html').append(`
    <footer id="footer" class="footer">
        Total Monthly: $0
    </footer>`)
}

function emptyFields() {
    $('#firstNameInput').val("");
    $('#lastNameInput').val("");
    $('#idNumber').val("");
    $('#jobTitle').val("");
    $('#annualSalary').val("");
}

function calculateMonthlyExpenses() {
    // Add employees monthly costs together
    for (employee of employees) {
        monthlyExpenses += employee.monthlySalary;
    }
    console.log(monthlyExpenses);
    // Update footer info
    $('footer').data(`monthly`, `${monthlyExpenses}`);
    let salaryData = $('footer').data('monthly');
    $('footer').text(`Total Monthly: $${salaryData}`)
    // Change DOM if salaries are too high
    if (salaryData > 20000) {
        $('footer').css('background', 'red');
    }
    return monthlyExpenses;
}

function addToExpense(value) {
    // Add inputted values to monthly expenses
    monthlyExpenses += value;
    // Update footer info
    $('footer').data(`monthly`, `${monthlyExpenses}`);
    // Set monthly salary for accessibility
    let salaryData = $('footer').data('monthly');
    // Modify footer output
    $('footer').text(`Total Monthly: $${salaryData}`)
    // Change DOM if salaries are too high
    if (monthlyExpenses > 20000) {
        $('footer').addClass('overMax');
    } else {
        $('footer').removeClass('overMax');
    }
    //
    return monthlyExpenses;
}

function deleteEmployee() {
    // Find 'this' elements annual salary
    let inside = parseInt($(this).parent().siblings('.compensation').text());
    console.log('inside', inside)
    // Calculate monthly salary
    let salary = Math.round(-(inside / 12));
    console.log('delete button a go')
    // Delete row  
    $(this).closest('tr').remove();
    console.log('salary is', salary);
    // Modify expenses with monthly salary value
    addToExpense(salary);
}