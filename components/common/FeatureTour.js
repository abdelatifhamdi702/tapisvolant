import React from 'react'
import Link from 'next/link'
import Tour from '../Tour/tour'
const dummyToursData = [
  {
    title: 'Bordeaux vacances adaptees',
    duration: '10',
    rating: '4.5',
    totalReview: '80',
    description:
      'Prochains séjours pour le mois d’avril soyez au rendez vous (30 vacanciers)',
    imgURL: '/images/tour/feature-tour-1.jpg',
    price: '1,412',
  },
  {
    title: 'Séjours à la venise des alpes',
    duration: '10',
    rating: '4.5',
    totalReview: '80',
    description:
      'Prochaine sejours adaptes pour annecy Mois d’avril (30 vacanciers)',
    imgURL: '/images/tour/feature-tour-3.jpg',
    price: '1,412',
  },
  {
    title: 'La vallee de chamonix mont-blanc',
    duration: '10',
    rating: '4.5',
    totalReview: '80',
    description:
      'Tourisme adapte prochaine depart avril-mai 2023 (30 vacanciers)',
    imgURL: '/images/tour/feature-tour-4.jpg',
    price: '1,412',
  },
  {
    title: 'Séjours de rêve à Marrakech',
    duration: '8',
    rating: '4.5',
    totalReview: '80',
    description:
      'Séjours de rêve à Marrakech du 01 au 08 mai 2023 PENSION COMPLETE',
    imgURL: '/images/tour/feature-tour-2.png',
    price: '1,412',
  },
]
const FeatureTour = ({ viewButton }) => {
  return (
    <>
      <section className="feature-wrap">
        <div className="container">
          <div className="row mb-40 align-items-end">
            <div className="col-md-12">
              <div className="section-title style4 text-center">
                <span>TOUS NOS</span>
                <h2>SEJOURS DISPONIBLES</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {dummyToursData.map((item, index) => (
              <Tour
                key={index}
                title={item.title}
                duration={item.duration}
                rating={item.rating}
                totalReview={item.totalReview}
                description={item.description}
                imgURL={item.imgURL}
                price={item.price}
              />
            ))}
          </div>
          <div className="row mt-30">
            {viewButton ? (
              <div className="col-12 text-center">
                <Link href="/tours">
                  <a className="btn v2">
                    View All Tours <i className="ri-logout-circle-r-line"></i>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureTour
