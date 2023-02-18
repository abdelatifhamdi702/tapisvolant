import { useEffect, useState } from 'react'

import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import Swal from 'sweetalert2'

import { loadStripe } from '@stripe/stripe-js'
async function getAccessToken() {
  let headersList = {
    authorization: 'Bearer ' + localStorage.getItem('refreshToken'),
  }

  const res6 = await fetch(`http://localhost:3000/refresh/token`, {
    headers: headersList,
  })
  let response6 = await res6.json()

  return response6.data.accessToken
}
const PaymentComponent = ({ price }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState('')

  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    console.log(price)
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

      const { client_secret: clientSecret } = jsonRes.data

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardEl,
        },
      })
      const submitBookingForm = async () => {
        const res = await createBooking()
        console.log(res)
        if (res.data) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Votre réservation a été effectuée avec succès',
            showConfirmButton: false,
            timer: 1500,
          })
        }
      }

      const createBooking = async () => {
        if (!localStorage.getItem('token')) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Vous devez d'abord connecter a votre compte",
            showConfirmButton: false,
            timer: 1500,
          })
        }
        let accessToken = await getAccessToken()
        let headersList = {
          authorization: 'Bearer ' + accessToken,
          'Content-Type': 'application/json',
          'Cross-Origin-Resource-Policy': 'cross-origin',
        }
        let bodyContent = JSON.stringify({
          tourId: tour.id,
          status: 'accepté',
        })
        let response = await fetch(
          `http://${process.env.host}:${process.env.port}/booking`,
          {
            method: 'POST',
            headers: headersList,
            body: bodyContent,
          }
        )
        return await response.json()
      }
      if (!paymentIntent) {
        setPaymentStatus('Payment failed!')
      } else {
        setPaymentStatus(paymentIntent.status)
        if (paymentIntent.status) {
          submitBookingForm()
        }
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
        <h5>Remplissez les informations de votre carte et payez maintenant</h5>
        <br />
        <CardElement options={{ style: STYLE }}></CardElement>
        {isProcessing && <div class="spinner" id="spinner"></div>}
        <br />
        {!isProcessing && (
          <button className="payment-btn" id="submit">
            Payez maintenant
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
              {paymentStatus == 'Payment failed!' ? 'Oops!' : 'thanks'}
            </a>
          </p>
        )}
      </form>
    </>
  )
}

const PaymentGateway = () => {
  console.log(process.env.STRIPE_PUBLIC_API_KEY)
  const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_API_KEY)
  const amount = ''
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    amount = parseFloat(localStorage.getItem('amount'))
    console.log(amount)
    setIsLoaded(true)
  })
  let comp = 'Loading...'
  if (isLoaded) {
    comp = (
      <Elements stripe={stripePromise}>
        <PaymentComponent price={0.01} />
      </Elements>
    )
  }
  return <>{comp}</>
}

export default PaymentGateway
