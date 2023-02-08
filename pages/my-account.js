import React from 'react'
import PageBanner from '../components/common/PageBanner'
import MyAccountNavbar from '../components/MyAccount.js/MyAccountNavbar'

const MyAccount = () => {
  return (
    <>
      <PageBanner bannerTitle="Mon Profile" pageName=" Mon Profile" />
      <MyAccountNavbar />
    </>
  )
}

export default MyAccount
