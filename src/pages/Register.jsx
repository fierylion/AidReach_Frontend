import React, { useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { BsChatQuote } from 'react-icons/bs'
const schema = yup
  .object({
    //email
    email: yup
      .string('Please enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    //password
    password: yup
      .string('Please enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    name: yup.string().required('Name is required'),
  })
  .required()

const Register = () => {
  const navigate = useNavigate()
  const [category, setCategory] = useState('donor')
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const email = watch('email')
  const password = watch('password')
  const name = watch('name')
  const onSubmit = (data) => {
    console.log(data)
    navigate('/donor')
  }
  return (
    <section>
      <div className='container w-75 h-75'>
        <div>
          <div>
            <h2>Register</h2>
            <small>Be part of our movement to help the needy</small>
            <div className='my-3'>
              Register as {category === 'ngo' ? 'an organization' : 'a donor'}
            </div>
            <div className='d-flex flex-column '>
              <button
                className={`btn ${
                  category === 'donor' ? 'bg-success' : 'btn-outline-dark'
                } my-3`}
                onClick={() => setCategory('donor')}
              >
                Donor
              </button>
              <button
                className={`btn ${
                  category === 'ngo' ? 'bg-success' : 'btn-outline-dark'
                } my-3`}
                onClick={() => setCategory('ngo')}
              >
                Ngo
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row form-row'>
              <div>
                <label htmlFor='name'></label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder={
                    category === 'ngo' ? 'Organization Name' : 'Your Name'
                  }
                  {...register('name')}
                  value={name}
                />
              </div>
              <div className='col-12'>
                <div className='d-flex'>
                  <span className='bg-success rounded p-2'>
                    <FiMail />
                  </span>

                  <input
                    type='email'
                    className={`d-inline-block rounded border w-100 ${
                      (errors.email && 'is-invalid') || ''
                    }}`}
                    placeholder={
                      category === 'ngo' ? 'Organization Email' : 'Your Email'
                    }
                    {...register('email')}
                    value={email}
                  />
                </div>
                {errors.email ? (
                  <div className='invalid-feedback'>
                    {errors.email?.message}
                  </div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
              <div className='col-12 mt-5 mb-4'>
                <div className='d-flex'>
                  <span className='bg-success p-2 link rounded'>
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={`d-inline-block rounded border w-100 ${
                      (errors.password && 'is-invalid') || ''
                    }}`}
                    placeholder={
                      category === 'ngo'
                        ? 'Organization Password'
                        : 'Your Password'
                    }
                    {...register('password')}
                    value={password}
                  />
                </div>
                {errors.password ? (
                  <div className='text-danger'>{errors.password?.message}</div>
                ) : (
                  <div className='text-success'></div>
                )}
              </div>
            </div>
            <div>
              <button className='btn btn-success w-100' type='submit'>
                Log in
              </button>
            </div>
          </form>
          <div className='text-center mt-4'>
            Don't have an account? <a href='/register'>Sign up</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
