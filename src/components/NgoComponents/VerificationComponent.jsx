import React from 'react'

const VerificationComponent = ({status}) => {
 const info =
   status === 'pending'
     ? [
         'Pending',
         'warning',
         'Your submission is pending approval by the admin. We appreciate your contribution! Our team will review your proposal in less than a week. Thank you for your patience!',
       ]
     : [
         'Unsubmitted',
         'danger',
         'Please submit your details for  KYC verification. Take the opportunity to share your ideas with us! Once submitted, your proposal will be reviewed in less than a week.',
       ]
  return (
    <section>
      <div className='w-75 mx-auto shadow border p-5 rounded flex-column d-flex'>
        <div className='d-flex '>
          <h3 className='d-inline-block me-2 text-muted'>KYC status: </h3>
          <span
            className={`small_text text-primary bg-${info[1]} p-1 rounded h-50 `}
          >
            {info[0]}
          </span>{' '}
        </div>
        <div>
         <p className='fs-6 text-muted'>{info[2]}</p>
        </div>
      </div>
    </section>
  )
}

export default VerificationComponent