import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import ToursForSlide from '../Tour/ToursForSlide'
import { useRouter } from 'next/router'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

const options = {
  spaceBetween: 0,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1500,
  loop: true,
  autoHeight: true,
  pagination: {
    type: 'progressbar',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
}

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay])

const TourSlider = () => {
  const [tours, setTours] = useState([])
  var router = useRouter()
  const { locale } = router
  var destination = router.query.destination
  var disability = router.query.disability
  var keyword = router.query.keyword
  let url = ''
  useEffect(() => {
    const fetchTours = async (url) => {
      if (router && router.query && router.query.search) {
        url = `http://${process.env.host}:${process.env.port}/tour/search/?destinationId=${destination}&disability=${disability}&title=${keyword}&locale=${locale}`
        const response = await fetch(url)

        /*if (!response.ok) {
        throw new Error('Something went wrong!')
      }*/

        const responseData = await response.json()
        console.log(responseData)
        const loadedTours = []

        for (const key in responseData.data) {
          console.log(key)
          let path = responseData.data[key].imgUrl
          let correctPath = path.replace(/\\/g, '/')
          loadedTours.push({
            id: responseData.data[key].id,
            title: responseData.data[key].title,
            duration: responseData.data[key].duration,
            rating: responseData.data[key].rating,
            totalReview: responseData.data[key].totalReview,
            description: responseData.data[key].description,
            price: responseData.data[key].price,
            imgURL: '' + correctPath,
          })
        }
        console.log(loadedTours)

        setTours(loadedTours)
      } else {
        url = `http://${process.env.host}:${process.env.port}/tour/all/?locale=${locale}`
        const response = await fetch(url)

        /*if (!response.ok) {
        throw new Error('Something went wrong!')
      }*/

        const responseData = await response.json()
        console.log(responseData)
        const loadedTours = []

        for (const key in responseData.data) {
          console.log(key)
          let path = responseData.data[key].coverImgUrl
          let correctPath = path.replace(/\\/g, '/')
          loadedTours.push({
            id: responseData.data[key].id,
            title: responseData.data[key].title,
            duration: responseData.data[key].duration,
            rating: responseData.data[key].rating,
            totalReview: responseData.data[key].totalReview,
            description: responseData.data[key].description,
            price: responseData.data[key].price,
            coverImgUrl: '' + correctPath,
          })
        }
        console.log(loadedTours)

        setTours(loadedTours)
      }
    }

    fetchTours(url)
  }, [router])
  return (
    <>
      <div className="page-wrapper">
        <div className="tour-slider-v2 pb-50">
          <Swiper {...options}>
            {tours.map((item, index) => (
              <SwiperSlide>
                <ToursForSlide
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  imgURL={'http://' + item.coverImgUrl.replace(/\\/g, '/')}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="tour-progress-v2"></div>
      </div>
    </>
  )
}

export default TourSlider
