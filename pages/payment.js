import React from 'react'
import PaymentGateway from '../components/Payment/paymentComponent'

const Payment = () => {
  return (
    <>
      <div className="container">
        <div
          className="row"
          style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="col-lg-8">
            <PaymentGateway />
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
