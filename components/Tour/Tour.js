import React from 'react'
import Link from 'next/link'

const Tour = ({
  title,
  duration,
  rating,
  totalReview,
  description,
  price,
  imgURL,
}) => {
  return (
    <>
      <div className="col-xl-6 col-lg-12">
        <div className="feature-tour-card style2">
          <div className="row gx-0">
            <div className="col-md-6">
              <Link href="/tours">
                <div
                  className="feature-tour-img bg-f"
                  style={{ backgroundImage: `url(${imgURL})` }}
                ></div>
              </Link>
            </div>
            <div className="col-md-6">
              <div className="feature-tour-info">
                <h4>
                  <Link href="/tours">
                    <a>{title}</a>
                  </Link>
                </h4>
                <div className="feature-tour-meta">
                  <div className="feature-tour-time">
                    <i className="ri-time-line"></i>
                    {duration} jours
                  </div>
                  <div className="feature-tour-review">
                    <span className="rating">{rating}</span>
                    <i className="ri-star-fill"></i>
                    <span className="total-review">({totalReview})</span>
                  </div>
                </div>
                <p>{description}</p>
                <span className="feature-tour-price">À partir de €{price}</span>
                <div className="feature-tour-option">
                  <Link href="/tour-details">
                    <a className="link style1">
                      Reserver <i className="ri-logout-circle-r-line"></i>
                    </a>
                  </Link>

                  <Link href="/tour-details">
                    <a className="link style2">
                      Détails de séjour
                      <i className="ri-logout-circle-r-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tour
