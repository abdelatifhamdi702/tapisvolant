import React from 'react'
import LoginArea from '../components/Authentication/LoginArea'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'login'])),
      // Will be passed to the page component as props
    },
  }
}
const Login = () => {
  return (
    <>
      <LoginArea />
    </>
  )
}

export default Login
