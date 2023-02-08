import React from 'react'
import PageBannerTwo from '../components/common/PageBannerTwo'
import About from '../components/common/About'
import Service from '../components/common/Service'
import BestTour from '../components/common/BestTour'
import NewsletterThree from '../components/common/NewsletterThree'
import Promo from '../components/common/Promo'

const AboutUs = () => {
  return (
    <>
      <PageBannerTwo
        bannerTitle="Qui sommes-nous"
        pageName="Qui sommes-nous"
        bgImageCss="br-bg-1"
      />

      <About
        bgColor="bg-heath"
        featureStyle="style3"
        ptb100="ptb-100"
        shape={true}
      />

      <Promo bgStyle="style2" />

      <div className="pb-100">
        <Service />
      </div>
    </>
  )
}

export default AboutUs
