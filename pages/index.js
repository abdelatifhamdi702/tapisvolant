import React from 'react'
import Banner from '../components/HomeTwo/Banner'
import Promo from '../components/common/Promo'
import Service from '../components/common/Service'
import RecommendTour from '../components/common/RecommendTour'
import FeatureTour from '../components/common/FeatureTour'
import About from '../components/common/About'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'index',
        'aboutus',
        'tourcomponent',
      ])),
      // Will be passed to the page component as props
    },
  }
}
const Index2 = () => {
  const { t } = useTranslation('index')
  return (
    <>
      <Banner />
      <About featureStyle="style2" />

      <Promo bgStyle="style2" />

      <RecommendTour
        title={t('destinationtitle')}
        subTitle={t('destinationsubtitle')}
        bgStyle="bg-heath"
      />

      <div className="ptb-100">
        <div className="row mb-40 align-items-end">
          <div className="col-md-12">
            <div className="section-title style4 text-center">
              <span>{t('tourtitle')}</span>
              <h2>{t('toursubtitle')}</h2>
            </div>
          </div>
        </div>
        <FeatureTour viewButton={true} />
      </div>

      <Service />
    </>
  )
}

export default Index2
