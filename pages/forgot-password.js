import React from 'react'
import PageBanner from '../components/common/PageBanner'
import ForgotPasswordArea from '../components/Authentication/ForgotPasswordArea'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'forgotpassword',
      ])),
      // Will be passed to the page component as props
    },
  }
}
const ForgotPassword = () => {
  return (
    <>
      <ForgotPasswordArea />
    </>
  )
}

export default ForgotPassword
