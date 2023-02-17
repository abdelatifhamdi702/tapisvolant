import React, { useEffect, useState } from 'react'
const search = () => {
  var e = document.getElementById('destinationSelect')
  var value = e.value
  var e2 = document.getElementById('disSelect')
  var text = e2.options[e2.selectedIndex].text
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
  const [disabilities, setDisabilities] = useState([])

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

    const fetchDisabilities = async () => {
      const response = await fetch(
        `http://${process.env.host}:${process.env.port}/disability/all`
      )

      /*if (!response.ok) {
        throw new Error('Something went wrong!')
      }*/

      const responseData = await response.json()
      console.log(responseData)
      const loadedDisabilities = []

      for (const key in responseData.data) {
        loadedDisabilities.push({
          id: responseData.data[key].id,
          type: responseData.data[key].type,
        })
      }
      console.log(loadedDisabilities)

      setDisabilities(loadedDisabilities)
    }

    fetchDisabilities()
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
                        {disabilities.map((item, index) => (
                          <option key={item.id} value={item.type}>
                            {item.type}
                          </option>
                        ))}
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
