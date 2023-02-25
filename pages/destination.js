import React from 'react'
import PageBannerTwo from '../components/common/PageBannerTwo'
import RecommendTour from '../components/common/RecommendTour'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'destinations',
      ])),
      // Will be passed to the page component as props
    },
  }
}
const Destination = () => {
  const { t } = useTranslation('destinations')
  return (
    <>
      <PageBannerTwo
        bannerTitle={t('bannerTitle')}
        pageName={t('page')}
        bgImageCss="br-bg-3"
      />

      <RecommendTour
        title={t('title')}
        subTitle={t('subTitle')}
        bgStyle="bg-heath"
      />
    </>
  )
}

export default Destination
