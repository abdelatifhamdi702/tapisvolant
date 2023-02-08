import React from 'react'

const SearchTour = () => {
  return (
    <>
      <div className="search-tour">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="filter-tours-wrap style1 mt-30">
                <div className="filter-box">
                  <div className="form-group">
                    <input type="search" placeholder="Mots clés" />
                    <button type="submit">
                      <i className="ri-search-line"></i>
                    </button>
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
                    Rechercher <i className="ri-logout-circle-r-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchTour
