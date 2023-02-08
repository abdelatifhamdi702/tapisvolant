import React from 'react'
import PageBannerThree from '../components/common/PageBannerThree'
import TourDetailsContent from '../components/Tour/TourDetailsContent'

const TourDetails = () => {
  return (
    <>
      <PageBannerThree
        bannerTitle="Bordeaux vacances adaptees"
        pageName="
        Détails de séjour"
        bgImageSrc="/images/breadcrumb/brCover.jpg"
      />

      <section className="tour-details-wrap pb-100">
        <TourDetailsContent />
      </section>
    </>
  )
}

export default TourDetails
