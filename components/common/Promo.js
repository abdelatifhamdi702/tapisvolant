import React from 'react'

const Promo = ({ bgStyle, mt100 }) => {
  return (
    <>
      <div className={`promo-wrap pt-100 pb-70 z-0 ${mt100}`}>
        <div className="container">
          <div className="row mb-40 align-items-end">
            <div className="col-md-12">
              <div className="section-title style4 text-center">
                <span>TOUTES NOS</span>
                <h2>VALEURS</h2>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: '20px' }}>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`promo-item ${bgStyle}`}>
                <div className="promo-icon">
                  <i className="la la-handshake"></i>
                </div>
                <div className="promo-content">
                  <h4>ENGAGEMENT</h4>
                  <p>
                    une valeur fondatrice pour nos projets de séjours notamment
                    dans la compréhension des besoins et des attentes de notre
                    clientèle.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`promo-item ${bgStyle}`}>
                <div className="promo-icon">
                  <i className="la la-check-circle"></i>
                </div>
                <div className="promo-content">
                  <h4>QUALITE</h4>
                  <p>
                    nous sommes très exigeants envers nous-même ainsi que nos
                    partenaires, notre réussite se mesure à la satisfaction de
                    nos vacanciers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`promo-item ${bgStyle}`}>
                <div className="promo-icon">
                  <i className="la la-users"></i>
                </div>
                <div className="promo-content">
                  <h4>INCLUSION</h4>
                  <p>
                    cette valeur guide chacune de nos pratiques vers une société
                    inclusive, c’est aussi le respect des différences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`promo-item ${bgStyle}`}>
                <div className="promo-icon">
                  <i className="la la-gem"></i>
                </div>
                <div className="promo-content">
                  <h4>BIEN-ETRE</h4>
                  <p>
                    notre culture est animée depuis la création de l’agence Par
                    une éthique humaniste profonde qui met au cœur de ses
                    projets le bien être de la personne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Promo
