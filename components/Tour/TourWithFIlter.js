import React from 'react'
import Tour from './tour'
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
const TourWithFIlter = () => {
  return (
    <>
      <div className="tour-wrap pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center mb-25">
            <div className="col-xl-7 col-lg-5 col-md-4">
              <div className="profuct-result">
                <p>4 séjours trouvés</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="filter-item-cat">
                <select className="shop-sort">
                  <option value="1">Trier par les plus populaires</option>
                  <option value="2">Trier par coût (Ordre décroissant)</option>
                  <option value="3">Trier par coût (Ordre croissant)</option>
                </select>
                <span className="hero-filter-down-arrow">
                  <i className="ri-arrow-down-s-line"></i>
                </span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4">
              <div className="filter-item-num">
                <select className="shop-count-sort">
                  <option value="1">Afficher 10</option>
                  <option value="2">Afficher 20</option>
                  <option value="3">Afficher 30</option>
                </select>
                <span className="hero-filter-down-arrow">
                  <i className="ri-arrow-down-s-line"></i>
                </span>
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
          <div className="row">
            <div className="col-md-12">
              <div className="page-navigation">
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="page-nav">
                      <li>
                        <a>
                          <i className="ri-arrow-left-s-line"></i>
                        </a>
                      </li>
                      <li>
                        <a className="active">1</a>
                      </li>
                      <li>
                        <a>2</a>
                      </li>
                      <li>
                        <a>3</a>
                      </li>
                      <li>
                        <a>
                          <i className="ri-arrow-right-s-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourWithFIlter
