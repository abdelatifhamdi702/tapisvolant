import Link from 'next/link'
import Destination from '../Destination/Destination'
import React, { useEffect, useState } from 'react'

const RecommendTour = ({ title, subTitle, bgStyle }) => {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    const fetchDestinations = async () => {
      const response = await fetch(
        `http://${process.env.host}:${process.env.port}/destination`
      )

      /*if (!response.ok) {
        throw new Error('Something went wrong!')
      }*/

      const responseData = await response.json()
      console.log(responseData)
      const loadedDestinations = []

      for (const key in responseData.data) {
        console.log(key)
        let path = responseData.data[key].imgUrl
        let correctPath = path.replace(/\\/g, '/')
        loadedDestinations.push({
          id: responseData.data[key].id,
          title: responseData.data[key].city,
          imgURL: '' + correctPath,
        })
      }
      console.log(loadedDestinations)

      setDestinations(loadedDestinations)
    }

    fetchDestinations()
  }, [])
  return (
    <>
      <section className={`recommend-tour-area ${bgStyle} ptb-100`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center style4 mb-40">
                {title && <span>{title}</span>}

                <h2>{subTitle}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="rec-wrap">
                {destinations.map((item, index) => (
                  <Destination
                    key={item.id}
                    title={item.title}
                    imgURL={'http://' + item.imgURL.replace(/\\/g, '/')}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RecommendTour
