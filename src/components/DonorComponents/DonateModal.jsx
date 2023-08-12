import React, { useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useGlobalContext } from '../../context'
import MessageAlerts from '../MessageAlerts'
import useFetch from '../../hooks'
import { useNavigate } from 'react-router-dom'

const schema = yup
  .object({
    //email
    amount: yup
      .string('Please enter your profile information')
      .required('Donation amount is required'),
   
  })
  .required()

const DonateModal = () => {
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
  const amount = watch('amount')

  const { donorData } = useGlobalContext()
  const navigate = useNavigate()

  const { data, isLoading, error, obtainData, contractInstance } = useFetch()
  const onSubmit = (details) => {
   //register donation
   // const {donate} = contractInstance;
   //donate funds
   // const res = donate(amount, 'funds')
    obtainData(
      'contribution',
      'post',
      {
        amount
      },
      {
        headers: {
          Authorization: 'Bearer ' + donorData?.token,
        },
      }
    )
  }
  
  return (
    <section>
      <>
        <div
          className='modal fade'
          id='donateModal'
          tabIndex={-1}
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Donate Now
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body'>
                <div>
                  {data && (
                    <MessageAlerts
                      msg={
                       'Thank you for your donation of ' +amount + ' tFill'
                      }
                      color={'success'}
                    />
                  )}
                  {error && (
                    <MessageAlerts
                      msg={
                        error.response?.data?.msg || error.response?.data?.err
                      }
                      color={'danger'}
                    />
                  )}
                  {isLoading && (
                    <MessageAlerts
                      msg={'Submitting details, Please wait!'}
                      color={'warning'}
                    />
                  )}
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='row form-row'>
                    <div className='col-12 m-2'>
                      <div className='d-flex'>
                        <label htmlFor='title'>Amount</label>

                        <input
                          type='number'
                          className={` mx-2 d-inline-block rounded border w-100 ${
                            (errors.amount && 'is-invalid') || ''
                          }}`}
                          placeholder={'Amount'}
                          {...register('amount')}
                          value={amount}
                        />
                      </div>
                      {errors.amount ? (
                        <div className='text-danger'>
                          {errors.amount?.message}
                        </div>
                      ) : (
                        <div className='text-success'></div>
                      )}
                    </div>

                    <button className='btn btn-success w-100' type='submit'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  )
}

export default DonateModal
