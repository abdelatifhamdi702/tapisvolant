import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// navbar
import Navbar from './Navbar'
import NavbarTwo from './NavbarTwo'
import NavbarThree from './NavbarThree'

// footer
import Footer from './Footer'

const Layout = ({ children }) => {
  const router = useRouter()

  const { pathname } = router

  return (
    <>
      <Head>
        <title>Tapis volant</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Tapis volant" />
        <meta name="og:title" property="og:title" content="Tapis volant"></meta>
        <meta name="twitter:card" content="Tapis volant"></meta>
        <link rel="canonical" href="https://detour.hibootstrap.com"></link>
      </Head>

      {pathname === '/index-3' ? (
        <NavbarThree />
      ) : pathname === '/index-2' ? (
        <NavbarTwo />
      ) : (
        <Navbar />
      )}

      {children}

      {pathname === '/index-3' ? (
        <Footer />
      ) : pathname === '/index-2' ? (
        <Footer />
      ) : pathname === '/destination' ? (
        <Footer />
      ) : pathname === '/destination-details' ? (
        <Footer />
      ) : (
        <Footer />
      )}
    </>
  )
}

export default Layout
