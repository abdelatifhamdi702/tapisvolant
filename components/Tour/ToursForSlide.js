import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const ToursForSlide = ({ id, title, imgURL }) => {
  let detailHref = '/tour-details/' + id
  const { t } = useTranslation('tourcomponent')

  return (
    <>
      <div className="col-xl-6 col-lg-12">
        <div className="feature-tour-card style2">
          <div className="row gx-0">
            <div className="col-md-12">
              <Link href="/tours">
                <div
                  className="tour-details-item bg-f"
                  style={{ backgroundImage: `url(${imgURL})` }}
                >
                  <h2
                    style={{
                      marginLeft: '15px',
                      color: '#fff',
                      marginTop: '-180px',
                    }}
                  >
                    <Link href={detailHref}>
                      <a>{title}</a>
                    </Link>
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToursForSlide
