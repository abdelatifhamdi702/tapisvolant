import React from 'react'
import PageBannerTwo from '../components/common/PageBannerTwo'
import SearchTour from '../components/Tour/SearchTour'
import TourWithFIlter from '../components/Tour/TourWithFIlter'

const Tours = () => {
  return (
    <>
      <PageBannerTwo
        bannerTitle="Trouver les meilleurs séjours"
        pageName="Séjours"
        bgImageCss="br-bg-6"
      />
      <SearchTour />
      <TourWithFIlter />
    </>
  )
}

export default Tours
