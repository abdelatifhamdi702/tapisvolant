import React from 'react'
import PaymentGateway from '../components/Payment/paymentComponent'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'payment',
      ])),
      // Will be passed to the page component as props
    },
  }
}
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
