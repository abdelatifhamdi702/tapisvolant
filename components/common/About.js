import React from 'react'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

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
                <h2 style={{ textAlign: 'center' }}>Qui sommes-nous ?</h2>
                <p style={{ margin: '40px' }}>
                  <b style={{ fontSize: '16px', color: '#cc3f32' }}>
                    Des spécialistes des voyages et séjours adaptés et de
                    l’accompagnement
                  </b>
                  <br /> L’agence de voyage a été créée en 1992, spécialisée
                  dans les voyages organisés, les séjours et la billetterie.
                  Dans le cadre de notre stratégie de développement nous avons
                  inclus en 2022 un volet de voyages adaptés organisés VAO pour
                  permettre aux personnes en situation de handicap de voyager
                  avec un accompagnement personnalisé
                  <b style={{ color: '#cc3f32' }}>« prêt à embarquer ».</b>
                  <br />
                  Pour assurer le transport et les séjours adaptés nous mettons
                  à disposition de notre clientèle une équipe professionnelle
                  formée et expérimentée. Depuis la France et l’étranger, les
                  vacanciers peuvent s’adresser à notre agence
                  <b style={{ color: '#cc3f32' }}>TAPIS VOLANT</b> pour
                  organiser leurs voyages et séjours adaptés.
                </p>
              </div>
              <br />
              <div className="col-md-12">
                <div className="section-title style4 text-center">
                  <span>TOUTES NOS</span>
                  <h2>OBJECTIFS</h2>
                </div>
              </div>
              <br />
              <div className="about-features">
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-text">
                    <p>
                      La lutte contre l’isolement des personnes en situation de
                      handicap
                    </p>
                  </div>
                </div>
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-text">
                    <p>Maintenir l’autonomie au risque de perte</p>
                  </div>
                </div>
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-text">
                    <p>Sensibiliser la société au handicap</p>
                  </div>
                </div>
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-text">
                    <p>Répondre à une forte demande</p>
                  </div>
                </div>
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-text">
                    <p>Redynamiser l’économie dans le secteur du touristique</p>
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
