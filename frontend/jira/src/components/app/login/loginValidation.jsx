export default function loginValidation(values) {
    let error = {}
    // const email_pattern = /^[^\s@]+@[^\s@]+\. [^\s@]+$/
    // const password_pattern = /^(?=.*\d) (?=, * [a-z])(?=. *[A-Z]) [a-zA-Z0-9]{8, }$/

    if(values.username === "") {
        error.username = "Username should not be empty"
    }
    else if(values.username.length <3) {
        error.username = "Invalid Username"
    }else {
        error.username = ""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(values.username.length < 3) {
        error.password = "Invalid Password"
    } else {
        error.password = ""
    }
    return error;

}
