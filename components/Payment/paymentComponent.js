import { useEffect, useState } from 'react'

import { getAccessToken } from './getAccessToken'
import { submitBookingForm } from './submitBooking'

import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import Swal from 'sweetalert2'

import { loadStripe } from '@stripe/stripe-js'
import { useTranslation } from 'react-i18next'

const PaymentComponent = ({ price }) => {
  const { t } = useTranslation('payment')

  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (price <= 0) return

    if (!stripe || !elements) return

    const cardEl = elements.getElement(CardElement)

    setIsProcessing(true)

    try {
      let accessToken = await getAccessToken()
      const headersList = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      }

      const bodyContent = JSON.stringify({
        price,
      })

      const res = await fetch(
        `http://${process.env.host}:${process.env.port}/payment/pay`,
        {
          method: 'POST',
          body: bodyContent,
          headers: headersList,
        }
      )
      const jsonRes = await res.json()

      console.log(jsonRes)

      const { client_secret: clientSecret } = jsonRes.data

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardEl,
        },
      })

      if (!paymentIntent) {
        setPaymentStatus('Payment failed!')
      } else {
        setPaymentStatus(paymentIntent.status)
        // submit booking
        await submitBookingForm()
      }
    } catch (error) {
      console.error(error)
      setPaymentStatus('Payment failed!')
    }
    setIsProcessing(false)
  }

  const STYLE = {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#32325d',
      },
    },
    invalid: {
      fontFamily: 'Arial, sans-serif',
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  }

  return (
    <>
      <form className="payment-form" onSubmit={handleSubmit} id="payment-form">
        <h5>{t('title')}</h5>
        <br />
        <CardElement options={{ style: STYLE }}></CardElement>
        {isProcessing && <div className="spinner" id="spinner"></div>}
        <br />
        {!isProcessing && (
          <button className="payment-btn" id="submit">
            {t('btn')}
            <i
              style={{
                marginTop: '5px',
                marginLeft: '5px',
              }}
              className="ri-logout-circle-r-line"
            ></i>
          </button>
        )}
        <p id="card-error" role="alert"></p>
        {!isProcessing && paymentStatus && (
          <p class={'result-message'}>
            {paymentStatus} ,
            <a href="" target="_blank">
              {paymentStatus == 'Payment failed!'
                ? t('errormessage')
                : t('successmessage')}
            </a>
          </p>
        )}
      </form>
    </>
  )
}

const PaymentGateway = () => {
  const [amount, setAmount] = useState(0)
  const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_API_KEY)
  useEffect(() => {
    setAmount(parseFloat(localStorage.getItem('amount')))
  })

  return (
    <>
      {amount > 0 ? (
        <Elements stripe={stripePromise}>
          <PaymentComponent price={amount} />
        </Elements>
      ) : (
        'Loading...'
      )}
    </>
  )
}

export default PaymentGateway
