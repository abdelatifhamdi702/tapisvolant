import React from 'react'
import PageBannerTwo from '../components/common/PageBannerTwo'
import About from '../components/common/About'
import Service from '../components/common/Service'
import BestTour from '../components/common/BestTour'
import NewsletterThree from '../components/common/NewsletterThree'
import Promo from '../components/common/Promo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'aboutus',
      ])),
      // Will be passed to the page component as props
    },
  }
}

const AboutUs = () => {
  const { t } = useTranslation('aboutus')

  return (
    <>
      <PageBannerTwo
        bannerTitle={t('title')}
        pageName={t('title')}
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
