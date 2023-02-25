import React from 'react'
import RegisterArea from '../components/Authentication/RegisterArea'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'register',
      ])),
      // Will be passed to the page component as props
    },
  }
}
const Register = () => {
  return (
    <>
      <RegisterArea />
    </>
  )
}

export default Register
