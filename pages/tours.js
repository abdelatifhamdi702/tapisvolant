import React from 'react'
import PageBannerTwo from '../components/common/PageBannerTwo'
import SearchTour from '../components/Tour/SearchTour'
import TourWithFIlter from '../components/Tour/TourWithFIlter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'tours',
        'tourcomponent',
      ])),
      // Will be passed to the page component as props
    },
  }
}
const Tours = () => {
  const { t } = useTranslation('tours')

  return (
    <>
      <PageBannerTwo
        bannerTitle={t('title')}
        pageName={t('page')}
        bgImageCss="br-bg-6"
      />
      <SearchTour />
      <TourWithFIlter />
    </>
  )
}

export default Tours
