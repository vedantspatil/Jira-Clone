import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignUpValidation from './SignUpValidation';

export default function SignUp() {

    const [values, setValues] = useState({
        username: "",
        firstname:"",
        lastname:"",
        email:"",
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
        setErrors(SignUpValidation(values))
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 w-100' >
      <div className='bg-white p-3 rounded w-25'>
        <div className="header">
                <h2 className="text d-flex justify-content-center align-items-center" >Signup</h2>
        </div>
        <div className="underline"></div>

        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='username'> Username </label>
                <input type='username' placeholder='Enter Username' className='form-control rounded-0'
                name='username' onChange={handleInputChange}
                ></input>
                {errors.username && <span className='text-danger'>{errors.username}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor='firstName'> First Name </label>
                <input type='firstname' placeholder='Enter First Name' className='form-control rounded-0'
                name='firstname' onChange={handleInputChange}
                ></input>
                {errors.firstname && <span className='text-danger'>{errors.firstname}</span>}

            </div>
            <div className='mb-3'>
                <label htmlFor='lastName'> Last Name </label>
                <input type='lastname' placeholder='Enter Last Name' className='form-control rounded-0'
                name='lastname' onChange={handleInputChange}
                ></input>
                {errors.lastname && <span className='text-danger'>{errors.lastname}</span>}

            </div>
            <div className='mb-3'>
                <label htmlFor='email'> Email </label>
                <input type='email' placeholder='Enter Email' className='form-control rounded-0'
                name='email' onChange={handleInputChange}
                ></input>
                {errors.email && <span className='text-danger'>{errors.email}</span>}

            </div>
            <div className='mb-3'>
                <label htmlFor='password'> Password </label>
                <input type='password' placeholder='Enter Password'className='form-control rounded-0'
                name='password' onChange={handleInputChange}
                ></input>
                {errors.password && <span className='text-danger'>{errors.password}</span>}

            </div>
            <button className='btn btn-success w-100 rounded-0'> <strong>Sign Up</strong></button>
            <p></p>
            <Link to='/login' className='btn btn-default border w-100 bg-100 rounded-0'> <strong>Log In</strong> </Link>
        </form>
      </div>
    </div>
  )
}