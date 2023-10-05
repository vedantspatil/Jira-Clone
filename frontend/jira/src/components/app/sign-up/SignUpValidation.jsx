export default function SignUpValidation(values) {
    let error = {}
    const email_pattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    // const password_pattern = /^(?=.*\d) (?=, * [a-z])(?=. *[A-Z]) [a-zA-Z0-9]{8, }$/

    if(values.username === "") {
        error.username = "Username should not be empty"
    }
    else if(values.username.length <3) {
        error.username = "Invalid Username"
    }else {
        error.username = ""
    }

    if(values.firstname === "") {
        error.firstname = "First name should not be empty"
    }
    else {
        error.firstname = ""
    }

    if(values.lastname === "") {
        error.lastname = "Last name should not be empty"
    }
    else {
        error.lastname = ""
    }

    if(values.email === "") {
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Invalid Email"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(values.password.length < 3) {
        error.password = "Invalid Password"
    } else {
        error.password = ""
    }
    return error;

}
