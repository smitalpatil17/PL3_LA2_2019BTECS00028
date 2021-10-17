console.log("Reached");
let alert = document.getElementById("alertBar");
function submitForm() {
    console.log(alert);
    if (validate()) {
        alert.innerHTML = `    <div class="alert alert-success" role="alert">
        Congratulations!!  Your form is successfully submitted!!
        </div>`
    }
    else {
        alert.innerHTML = `    <div class="alert alert-danger" role="alert">
        Oops!! Something went wrong.
        </div>`
    }
    setTimeout(() => {
        alert.innerHTML = '';
    }, 3000);
}

let
function validate() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let number = document.getElementById('number');
    let emailId = email.value.toString()
    
    if (fname.value.length > 2 && lname.value.length > 2 && emailId.includes('@gmail.com'))
        return true;
    else
        return false;
}

