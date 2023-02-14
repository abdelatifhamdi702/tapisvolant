import { useEffect, useState } from 'react'

import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'

import { loadStripe } from '@stripe/stripe-js'

const PaymentComponent = ({ price }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState('')

  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    if (price === 0) return

    if (paymentStatus !== 'succeeded') return
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (price <= 0) return

    if (!stripe || !elements) return

    const cardEl = elements.getElement(CardElement)

    setIsProcessing(true)

    try {
      const headersList = {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGUxdm4yNG8wMDAwb2hzZG5pcHBydzIwIiwiZW1haWwiOiJhZG1pbi0xQGVrY3NvZnQuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjc2Mzc1NzA3LCJleHAiOjE2NzY5ODA1MDd9.FBIkDSIP5-cIgABC9rS0F2X21kS7Acp0Of5DS0N34w8'
      }

      const bodyContent = JSON.stringify({
        price
      })

      const res = await fetch(`http://localhost:3000/payment/pay`, {
        method: 'POST',
        body: bodyContent,
        headers: headersList
      })
      const jsonRes = await res.json()

      const { client_secret: clientSecret } = jsonRes.data

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardEl
        }
      })

      if (!paymentIntent) {
        setPaymentStatus('Payment failed!')
      } else {
        setPaymentStatus(paymentIntent.status)
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
        color: '#32325d'
      }
    },
    invalid: {
      fontFamily: 'Arial, sans-serif',
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }

  return (
    <>
      <form className="payment-form" onSubmit={handleSubmit} id="payment-form">
        <CardElement options={{ style: STYLE }}></CardElement>
        {isProcessing && <div class="spinner" id="spinner"></div>}
        {!isProcessing && (
          <button className="payment-btn" id="submit">
            Pay now
            <i
              style={{
                marginTop: '5px',
                marginLeft: '5px'
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
              {paymentStatus == 'Payment failed!' ? 'Oops!' : 'thanks'}
            </a>
          </p>
        )}
      </form>
    </>
  )
}

const PaymentGateway = ({ amount }) => {
  // const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_API_KEY)
  const stripePromise = loadStripe(
    'pk_test_51MYrG3IiBauyueh2CTnhDg1my0ZpNCxqv41OHp5SHglle3ez8G495KZuXbBt6pbwXzQkaiYV0Kn5ozuMDioktomk00VD8PTa5m'
  )
  return (
    <Elements stripe={stripePromise}>
      <PaymentComponent price={amount} />
    </Elements>
  )
}

export default PaymentGateway
