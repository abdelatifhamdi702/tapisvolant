import Link from 'next/link'
import Tour from '../Tour/Tour'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const FeatureTour = ({ viewButton }) => {
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
            imgURL: '' + correctPath
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
            imgURL: '' + correctPath
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
      <section className="feature-wrap">
        <div className="container">
          <div className="row">
            {tours.map((item, index) => (
              <Tour
                id={item.id}
                key={item.id}
                title={item.title}
                duration={item.duration}
                rating={item.rating}
                totalReview={item.totalReview}
                description={item.description}
                imgURL={'http://' + item.imgURL.replace(/\\/g, '/')}
                price={item.price}
              />
            ))}
          </div>
          {/*<div className="row mt-30">
            {viewButton ? (
              <div className="col-12 text-center">
                <Link href="/tours">
                  <a className="btn v2">
                    Afficher tout les séjours{' '}
                    <i className="ri-logout-circle-r-line"></i>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>*/}
        </div>
      </section>
    </>
  )
}

export default FeatureTour
