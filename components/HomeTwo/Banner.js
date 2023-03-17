import React, { useEffect, useState } from 'react'
import TourSlider from '../Tour/TourSlider'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

const Banner = () => {
  const { t } = useTranslation('index')
  const [destinations, setDestinations] = useState([])
  const [disabilities, setDisabilities] = useState([])
  var router = useRouter()
  const { locale } = router
  const search = () => {
    var e = document.getElementById('destinationSelect')
    var value = e.value
    var e2 = document.getElementById('disSelect')
    var text = e2.options[e2.selectedIndex].value
    var keyword = document.getElementById('keyWord').value

    document.location.href =
      '/' +
      locale +
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
  useEffect(() => {
    const fetchDestinations = async () => {
      const response = await fetch(
        `https://${process.env.host}:${process.env.port}/destination?locale=${locale}`
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
          imgURL: '' + correctPath
        })
      }
      console.log(loadedDestinations)

      setDestinations(loadedDestinations)
    }

    fetchDestinations()

    const fetchDisabilities = async () => {
      const response = await fetch(
        `https://${process.env.host}:${process.env.port}/disability/all?locale=${locale}`
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
          code: responseData.data[key].code
        })
      }
      console.log(loadedDisabilities)

      setDisabilities(loadedDisabilities)
    }

    fetchDisabilities()
  }, [locale])
  return (
    <>
      <div className="hero-wrap style2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="hero-content style2 text-left">
                <h1>
                  {t('bannertitle1')}
                  <br />
                  <span>{t('bannertitle2')}</span>
                </h1>
                <TourSlider />

                <div className="filter-tours-wrap style2">
                  <div className="filter-box">
                    <div className="form-group">
                      <input type="search" id="keyWord" />
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
                          <option key={item.id} value={item.code}>
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
                      {t('bannerbtn')} <i className="ri-search-line"></i>
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
