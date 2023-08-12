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
   
    stake: yup
      .string('Amount to stake is required')
      .required('Stake Amount is required'),
    reason: yup
      .string('Stake reason is required')
      .required('Reason is required'),
  })
  .required()

const VotePopup = ({vote }) => {
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
 
  const reason = watch('reason')
  const stake = watch('stake')
  const { donorData } = useGlobalContext()
  const navigate = useNavigate()

  const { data, isLoading, error, obtainData } = useFetch()
  const onSubmit = (details) => {
    
    obtainData(
      '/donor/vote',
      'post',
      {
        vote, reason, stake
      },
      {
        headers: {
          Authorization: 'Bearer ' + donorData?.token,
        },
      }
    )
  }
  if (data) {
    console.log(data)
  }
  return (
    <section>
      <>
        <div
          className='modal fade'
          id='voteModal'
          tabIndex={-1}
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  One more step, Cast your vote
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
                      <h5>Vote: {vote?.cat}</h5> 
                      </div>
                    
                    </div>
                    <div className='col-12 m-2'>
                      <div className='d-flex'>
                        <label htmlFor='title'>Stake</label>

                        <input
                          type='number'
                          className={`d-inline-block ms-2 rounded border w-100 ${
                            (errors.stake && 'is-invalid') || ''
                          }}`}
                          placeholder={'Stake'}
                          {...register('stake')}
                          value={stake}
                        />
                      </div>
                      {errors.stake ? (
                        <div className='text-danger'>
                          {errors.stake?.message}
                        </div>
                      ) : (
                        <div className='text-success'></div>
                      )}
                    </div>
                    <div className='col-12 m-2'>
                      <div className='d-flex'>
                        <label htmlFor='title'>Reason</label>

                        <input
                          type='text'
                          className={`d-inline-block rounded border w-100 ${
                            (errors.reason && 'is-invalid') || ''
                          }}`}
                          placeholder={'Reason'}
                          {...register('reason')}
                          value={reason}
                        />
                      </div>
                      {errors.reason ? (
                        <div className='text-danger'>
                          {errors.reason?.message}
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

export default VotePopup
