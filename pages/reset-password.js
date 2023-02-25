import React from 'react'
import ResetPasswordArea from '../components/Authentication/ResetPasswordArea'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'reset'])),
      // Will be passed to the page component as props
    },
  }
}
const ResetPassword = () => {
  return (
    <>
      <ResetPasswordArea />
    </>
  )
}

export default ResetPassword
