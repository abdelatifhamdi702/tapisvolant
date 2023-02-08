import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="hero-wrap style2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="hero-content style2 text-left">
                <h1>
                  Voyager, Découvrir.
                  <br />
                  <span>Créer des souvenirs, pas des rêves.</span>
                </h1>
                <div className="filter-tours-wrap style2">
                  <div className="filter-box">
                    <div className="form-group">
                      <input type="search" placeholder="Mots clés" />
                    </div>
                  </div>
                  <div className="filter-box">
                    <div className="filter-dropdown">
                      <select className="hero-filter">
                        <option value="1">Pays</option>
                        <option value="2">France</option>
                        <option value="3">Tunisie</option>
                        <option value="4">Algérie</option>
                        <option value="5">Maroc</option>
                      </select>
                      <span className="hero-filter-down-arrow">
                        <i className="ri-arrow-down-s-line"></i>
                      </span>
                    </div>
                  </div>
                  <div className="filter-box">
                    <div className="filter-dropdown">
                      <select className="hero-filter">
                        <option value="1">Autonomie</option>
                        <option value="2">Tres bonne autonomie</option>
                        <option value="3">bonne autonomie</option>
                        <option value="4">Moyenne autonomie</option>
                        <option value="5">Legere autonomie</option>
                      </select>
                      <span className="hero-filter-down-arrow">
                        <i className="ri-arrow-down-s-line"></i>
                      </span>
                    </div>
                  </div>
                  <div className="filter-box">
                    <div className="filter-dropdown">
                      <select className="hero-filter">
                        <option value="1">Saison</option>
                        <option value="2">Eté 2023</option>
                        <option value="3">Hiver 2023/2024</option>
                      </select>
                      <span className="hero-filter-down-arrow">
                        <i className="ri-arrow-down-s-line"></i>
                      </span>
                    </div>
                  </div>
                  <div className="filter-box">
                    <button type="submit" className="search-btn">
                      Rechercher <i className="ri-search-line"></i>
                    </button>
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

export default Banner
