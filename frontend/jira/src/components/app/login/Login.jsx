import React from 'react'
import { useState, setErrors } from 'react';
import { Link } from 'react-router-dom'
import loginValidation from './loginValidation';
export default function Login() {
    const [values, setValues] = useState({
        username: "",
        password: ""
        
      }
    );
    const handleInputChange = (event) => {
        const { name, value } = event.target;
            setValues((values) => ({
                ...values,
                [name]: value
            }));
        
    };
    const [errors,setErrors] = useState({

    })
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(loginValidation(values))
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 w-100' >
      <div className='bg-white p-3 rounded w-25'>
        <div className="header">
                <h2 className="text d-flex justify-content-center align-items-center" >Login</h2>
        </div>
        <div className="underline"></div>

        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='username'> Username </label>
                <input type='username' name = 'username' placeholder='Enter Username' className='form-control rounded-0'
                    onChange={handleInputChange} 
                ></input>
                {errors.username && <span className='text-danger'>{errors.username}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor='password'> Password </label>
                <input type='password' name = 'password' placeholder='Enter Password'className='form-control rounded-0'
                    onChange={handleInputChange} 
                ></input>
                {errors.password && <span className='text-danger'>{errors.password}</span>}

            </div>
            <button className='btn btn-success w-100 rounded-0'> <strong>Log In</strong></button>
            <p></p>
            <Link to='/signup' className='btn btn-default border w-100 bg-100 rounded-0'> <strong>Create Account</strong> </Link >
        </form>
      </div>
    </div>
  )
}