import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
const PageBannerThree = ({ bannerTitle, pageName, bgImageSrc }) => {
  const { t } = useTranslation('navbar')
  return (
    <>
      <section
        className={`breadcrumb-wrap bg-f`}
        style={{ backgroundImage: `url(${bgImageSrc})` }}
      >
        <div className="overlay op-8 bg-minsk"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
              <div className="breadcrumb-title">
                <h2>{bannerTitle}</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link href="/">
                      <a>{t('home')} </a>
                    </Link>
                    <i className="las la-angle-double-right"></i>
                  </li>
                  <li>{pageName}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PageBannerThree
