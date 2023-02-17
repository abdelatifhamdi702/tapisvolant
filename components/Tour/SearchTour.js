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
const SearchTour = () => {
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
      <div className="search-tour">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="filter-tours-wrap style1 mt-30">
                <div className="filter-box">
                  <div className="form-group">
                    <input id="keyWord" type="search" placeholder="Mots clés" />
                    <button type="submit">
                      <i className="ri-search-line"></i>
                    </button>
                  </div>
                </div>
                <div className="filter-box">
                  <div className="filter-dropdown">
                    <select className="hero-filter" id="destinationSelect">
                      {destinations.map((item, index) => (
                        <option key={item.id} value={item.id}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                    <span className="hero-filter-down-arrow">
                      <i className="ri-arrow-down-s-line"></i>
                    </span>
                  </div>
                </div>
                <div className="filter-box">
                  <div className="filter-dropdown">
                    <select id="disSelect" className="hero-filter">
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
