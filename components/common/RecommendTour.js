import Link from 'next/link'
import Destination from '../Destination/Destination'
const dummyDestinationsData = [
  {
    title: 'France',
    imgURL: '/images/tour/rec_tour_1.jpg',
  },
  {
    title: 'Tunisie',
    imgURL: '/images/tour/rec_tour_2.jpg',
  },
  {
    title: 'Algérie',
    imgURL: '/images/tour/rec_tour_3.jpg',
  },
  {
    title: 'Maroc',
    imgURL: '/images/tour/rec_tour_4.jpg',
  },
]
const RecommendTour = ({ title, subTitle, bgStyle }) => {
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
                {dummyDestinationsData.map((item, index) => (
                  <Destination
                    key={index}
                    title={item.title}
                    imgURL={item.imgURL}
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
