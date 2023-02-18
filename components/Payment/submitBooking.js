import Swal from 'sweetalert2'
import { getAccessToken } from './getAccessToken'

export const submitBookingForm = async () => {
  const res = await createBooking()
  console.log(res)
  if (res.data) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre réservation a été effectuée avec succès',
      showConfirmButton: false,
      timer: 1500
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
      timer: 1500
    })
  }
  let accessToken = await getAccessToken()
  let headersList = {
    authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
    'Cross-Origin-Resource-Policy': 'cross-origin'
  }
  let bodyContent = JSON.stringify({
    tourId: tour.id,
    status: 'accepté'
  })
  let response = await fetch(
    `http://${process.env.host}:${process.env.port}/booking`,
    {
      method: 'POST',
      headers: headersList,
      body: bodyContent
    }
  )
  return await response.json()
}
