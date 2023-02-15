import React, { useEffect, useState } from 'react'
const search = () => {
  var e = document.getElementById('destinationSelect')
  var value = e.value
  var e2 = document.getElementById('disSelect')
  var text = e2.options[e.selectedIndex].text
  var keyword = document.getElementById('keyWord').value
  document.location.href =
    '/tours?' +
    'search=' +
    'true' +
    '&destination=' +
    value +
    '&disability=' +
    text +
    '&keyword=' +
    keyword
}
const Banner = () => {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    const fetchDestinations = async () => {
      const response = await fetch(
        `http://${process.env.host}:${process.env.port}/destination`
      )

      /*if (!response.ok) {
        throw new Error('Something went wrong!')
      }*/

      const responseData = await response.json()
      console.log(responseData)
      const loadedDestinations = []

      for (const key in responseData.data) {
        console.log(key)
        let path = responseData.data[key].imgUrl
        let correctPath = path.replace(/\\/g, '/')
        loadedDestinations.push({
          id: responseData.data[key].id,
          title: responseData.data[key].city,
          imgURL: '' + correctPath,
        })
      }
      console.log(loadedDestinations)

      setDestinations(loadedDestinations)
    }

    fetchDestinations()
  }, [])
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
                      <input
                        type="search"
                        id="keyWord"
                        placeholder="Mots clés"
                      />
                    </div>
                  </div>
                  <div className="filter-box">
                    <div className="filter-dropdown">
                      <select className="hero-filter" id="destinationSelect">
                        <option value="1">Pays</option>
                        {destinations.map((item, index) => (
                          <option value={item.id}>{item.title}</option>
                        ))}
                      </select>
                      <span className="hero-filter-down-arrow">
                        <i className="ri-arrow-down-s-line"></i>
                      </span>
                    </div>
                  </div>
                  <div className="filter-box">
                    <div className="filter-dropdown">
                      <select className="hero-filter" id="disSelect">
                        <option value="1">handicaps</option>
                        <option value="2">Handicap moteur</option>
                        <option value="3">Handicap sensoriel</option>
                        <option value="4">Handicap visuel</option>
                        <option value="5">Handicap mental</option>
                        <option value="6">Handicap cognitif</option>
                        <option value="7">Handicap psychique</option>
                      </select>
                      <span className="hero-filter-down-arrow">
                        <i className="ri-arrow-down-s-line"></i>
                      </span>
                    </div>
                  </div>
                  <div className="filter-box">
                    <button onClick={search} className="search-btn">
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
