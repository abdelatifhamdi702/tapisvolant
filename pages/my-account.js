import React from 'react'
import PageBanner from '../components/common/PageBanner'
import MyAccountNavbar from '../components/MyAccount.js/MyAccountNavbar'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'myaccount',
      ])),
      // Will be passed to the page component as props
    },
  }
}
const MyAccount = () => {
  const { t } = useTranslation('myaccount')
  return (
    <>
      <PageBanner bannerTitle={t('title')} pageName={t('title')} />
      <MyAccountNavbar />
    </>
  )
}

export default MyAccount
