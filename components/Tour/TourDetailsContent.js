import React, { useState } from 'react'
import Activity from '../common/Activity'
import Comment from '../common/Comment'
import Swal from 'sweetalert2'
import RatingInput from '../common/RatingInput'

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

const TourDetailsContent = ({ activities, tour, comments }) => {
  const [clicked, setClicked] = useState(false)
  const [toggleState, setToggleState] = useState(1)
  const [rating, setRating] = useState(0)

  const getRatingData = (value) => {
    let converted = parseInt(value)
    setRating(converted)
  }
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }

  const toggleTab = (index) => {
    setToggleState(index)
  }

  const createComment = async () => {
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
      rating: rating,
      content: document.getElementById('review-msg').value,
    })
    let totalReview = parseInt(tour.totalReview) + 1
    let newRating =
      parseFloat(tour.rating) +
      (rating - parseFloat(tour.rating)) * (1 / totalReview)
    let bodyContentTour = JSON.stringify({
      id: tour.id,
      rating: newRating,
      totalReview: totalReview,
    })
    let response2 = await fetch(
      `http://${process.env.host}:${process.env.port}/tour`,
      {
        method: 'PATCH',
        body: bodyContentTour,
        headers: headersList,
      }
    )

    const res2 = await response2.json()
    console.log(res2)
    let response = await fetch(
      `http://${process.env.host}:${process.env.port}/comment`,
      {
        method: 'POST',
        headers: headersList,
        body: bodyContent,
      }
    )
    return await response.json()
  }

  const submitCommentForm = async (e) => {
    e.preventDefault()
    const res = await createComment()
    console.log(res)
    if (res.data) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Votre commentaire est envoyé avec succès',
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }

  const uploadBooking = async () => {
    let accessToken = await getAccessToken()
    let headersList = {
      authorization: 'Bearer ' + accessToken,
    }
    let formData = new FormData()

    formData.append('imgUrl', document.getElementById('receiptImg').files[0])
    formData.append('tourId', tour.id)

    let response = await fetch(
      `http://${process.env.host}:${process.env.port}/upload/booking`,
      {
        method: 'POST',
        headers: headersList,
        body: formData,
      }
    )

    return await response.json()
  }

  const submitBookingForm = async (e) => {
    e.preventDefault()
    const res = await createBooking()
    console.log(res)
    const res2 = await uploadBooking()
    console.log(res2)
    if (res.data && res2.data) {
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
      status: 'En attendant',
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

  const pay = () => {
    localStorage.setItem('amount', tour.price)
    document.location.href = '/payment'
  }
  return (
    <>
      <div className="container pt-100">
        <div className="row gx-5">
          <div className="col-xl-9 col-lg-8 col-md-12 col-12">
            <div className="tour-details-info">
              <p>{tour.introduction}</p>
              {activities.map((item, index) => (
                <Activity
                  key={item.id}
                  title={item.title}
                  imgURL={item.imgURL}
                  description={item.description}
                />
              ))}
            </div>
            <div className="post-comment-wrap">
              <h4 className="comment-title">{comments.length} Commentaires</h4>
              {comments.map((item, index) => (
                <Comment
                  key={index}
                  userName={item.username}
                  commentContent={item.content}
                  userImgURL={item.profileImg}
                  rating={item.rating}
                />
              ))}
            </div>
            <div className="comment-form-wrap">
              <div className="comment-form-title">
                <h4>Écrivez votre commentaire</h4>
              </div>
              <form onSubmit={submitCommentForm} className="comment-form">
                <div className="row gx-3">
                  <div className="col-lg-12">
                    <div className="form-group v1">
                      <textarea
                        name="review-msg"
                        id="review-msg"
                        cols="30"
                        rows="10"
                        placeholder="Votre commentaires..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <ul
                      className="rating-star"
                      style={{ marginBottom: '10px' }}
                    >
                      <RatingInput getRating={getRatingData} />
                    </ul>

                    <button type="submit" className="btn v7">
                      Envoyer <i className="ri-logout-circle-r-line"></i>{' '}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-12 col-12">
            <div className="sidebar">
              <div className="sidebar-widget tour-book">
                <h4>Pour Reserver</h4>
                <p>Upload le reçu de paiement</p>
                <input
                  className="form-control"
                  id="receiptImg"
                  name="receiptImg"
                  type="file"
                />
                <button
                  type="button"
                  className="book-btn"
                  onClick={submitBookingForm}
                >
                  Reserver maintenant{' '}
                  <i className="ri-logout-circle-r-line"></i>{' '}
                </button>
                <br />
                <h4>Ou</h4>
                <p>Payez le montant en cliquant sur le bouton ci-dessous</p>

                {/*<div className="input-group">
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Arrival"
                  />
                </div>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Departure"
                  />
                </div>
                <div className="select-person">
                  <select className="tour-filter-one">
                    <option value="1">Person</option>
                    <option value="2">1 Person</option>
                    <option value="3">2 Person</option>
                  </select>
                  <span className="hero-filter-down-arrow">
                    <i className="ri-arrow-down-s-line"></i>
                  </span>
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Destination" />
                </div>*/}
                <button type="button" className="book-btn" onClick={pay}>
                  payer <i className="ri-logout-circle-r-line"></i>{' '}
                </button>
              </div>
              {/*<div className="sidebar-widget tour-map">
                <h4>View Place In Map</h4>
                <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

TourDetailsContent.defaultProps = {
  data: [
    {
      question: 'What languages do you offer tours in?',
      answer:
        'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'Are there any extra fees I have to pay?',
      answer:
        'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'How much does it cost to do a private tour?',
      answer:
        'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ],
}

export default TourDetailsContent
