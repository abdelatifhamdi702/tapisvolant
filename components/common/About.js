import React from 'react'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import { useTranslation } from 'react-i18next'

const options = {
  loop: true,
  margin: 20,
  nav: true,
  mouseDrag: true,
  items: 1,
  dots: false,
  autoplay: false,
  smartSpeed: 500,

  navText: [
    "<i class='ri-arrow-left-line'></i>",
    "<i class='ri-arrow-right-line'></i>",
  ],
}

const About = ({ bgColor, shape, featureStyle, ptb100 }) => {
  const { t } = useTranslation('aboutus')
  const [display, setDisplay] = useState(false)
  const [isMounted, setisMounted] = useState(false)

  useEffect(() => {
    setisMounted(true)
    setDisplay(true)
    setisMounted(false)
  }, [])

  return (
    <>
      <section className={`about-wrap ${ptb100} ${bgColor}`}>
        {shape && (
          <>
            <div className="shape-10 sm-none">
              <img src="/images/shape-10.png" alt="Image" />
            </div>
            <div className="shape-11 sm-none">
              <img src="/images/shape-10.png" alt="Image" />
            </div>
          </>
        )}

        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-12">
              <div className="section-title style6 sm-center mb-40">
                <br />
                <h2 style={{ textAlign: 'center' }}>{t('title')} ?</h2>
                <p style={{ margin: '40px' }}>
                  <b style={{ fontSize: '16px', color: '#cc3f32' }}>
                    {t('text1')}
                  </b>
                  <br /> {t('text2')}
                  <b style={{ color: '#cc3f32' }}> « {t('text3')} ».</b>
                  <br />
                  {t('text4')}
                  <b style={{ color: '#cc3f32' }}> TAPIS VOLANT</b> {t('text5')}
                </p>
              </div>
              <br />
              <div className="col-md-12">
                <div className="section-title style4 text-center">
                  <span>{t('allour')}</span>
                  <h2>{t('objectives')}</h2>
                </div>
              </div>
              <br />
              <div className="about-features">
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-text">
                    <p>{t('o1')}</p>
                  </div>
                </div>
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-text">
                    <p>{t('o2')}</p>
                  </div>
                </div>
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-text">
                    <p>{t('o3')}</p>
                  </div>
                </div>
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-text">
                    <p>{t('o4')}</p>
                  </div>
                </div>
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-text">
                    <p>{t('o5')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
