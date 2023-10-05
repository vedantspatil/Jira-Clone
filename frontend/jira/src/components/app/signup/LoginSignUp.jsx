
import "./LoginSignUp.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function LoginSignUp() {
  const [values, setValues] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const routeChange = () =>{ 
      let path = './login'; 
      navigator(path)
  }
  const handleInputChange = (event) => {
    /* event.persist(); NO LONGER USED IN v.17*/
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email && values.username 
        && values.password) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="header">
                <h1 className="text">Signup</h1>
                <div className="underline"></div>
        </div>
        {submitted && valid && (
          <div className="success-message">
            {/* <h3>
              {" "}
              Welcome {values.firstName} {values.lastName}{" "}
            </h3>
            <div> Your registration was successful! </div> */}
            {/* //Move to next page */}
          </div>
        )}
        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Username"
            name="username"
            value={values.username}
            onChange={handleInputChange}
            id="user_name"
          />
        )}

        {submitted && !values.username && (
          <span id="username-error">Please enter a username</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.lastName && (
          <span id="last-name-error">Please enter a last name</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.password && (
          <span id="password-error">Please enter a password</span>
        )}
        {!valid && (
          <button class="form-field" type="submit">
            Register
          </button>
        )}
        
      </form>
      <div class="loginholder">
        <Link to = './login' class="btn-" type="login" onClick={routeChange}>
            Login
        </Link>
      </div>
        
    </div>
  );
}
