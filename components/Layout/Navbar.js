import React, { useState, useEffect } from 'react'
import Link from '../../utils/ActiveLink'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const { t } = useTranslation(['navbar'])
  const [display, setDisplay] = useState(false)
  const [displayContact, setDisplayContact] = useState(false)
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false)
  const [displayAuth, setDisplayAuth] = useState(false)
  const [sticky, setSticky] = useState(false)

  const toggleCart = () => {
    setDisplay(!display)
  }
  const toggleContact = () => {
    setDisplayContact(!displayContact)
  }
  const toggleMobileMenu = () => {
    setDisplayMobileMenu(!displayMobileMenu)
  }
  const toggleAuth = () => {
    setDisplayAuth(!displayAuth)
  }

  // sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  if (typeof window !== 'undefined') {
    // browser code
    window.addEventListener('scroll', showStickyMenu)
  }
  const [isLogin, setIsLogin] = useState(false)
  //set language
  const [open, setOpen] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [name, setName] = useState('')

  //set currency
  const [openCurrency, setOpenCurrency] = useState(false)
  const [currencyClicked, setCurrencyClicked] = useState(false)
  const [currencyName, setCurrencyName] = useState('USD')

  const toggleTopCart = () => {
    setDisplay(!display)
  }

  //toggle language
  const toggleCategory = () => {
    setOpen(!open)
  }
  const category = [
    { text: 'English', value: 'en' },
    { text: 'Français', value: 'fr' },
  ]

  // Toggle function for select language
  const toggleSelected = (cat, index) => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
    setName(cat.text)
    const { pathname, asPath, query } = router
    // change just the locale and maintain all other route information including href's query
    router.push({ pathname, query }, asPath, { locale: cat.value })
  }

  // toggle currency
  const currency = ['USE', 'EURO', 'YEN']
  const toggleCurrency = () => {
    setOpenCurrency(!openCurrency)
  }

  // Toggle function for select currency
  const toggleSelectedCurrency = (cat, index) => {
    if (currencyClicked === index) {
      return setCurrencyClicked(null)
    }
    setCurrencyClicked(index)
    setCurrencyName(cat)
  }

  useEffect(() => {
    setIsLogin(localStorage.getItem('status') === 'true')
    const { locale } = router
    let obj = category.find((o) => o.value === locale)
    if (obj) setName(obj.text)
  })

  /*const isLogin = () => {
    // Perform localStorage action
    let result = localStorage.getItem('status')
    return result
  }*/
  const { locale } = router
  return (
    <>
      <div className="page-wrapper">
        <div className={display ? 'body_overlay open' : 'body_overlay'}></div>
        {/* Top Header */}
        <header className="header-wrap style1">
          <div
            className={displayContact ? 'body_overlay open' : 'body_overlay'}
          ></div>
          <div className={displayAuth ? 'header-top open' : 'header-top'}>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="header-top-left">
                    <div
                      className="close-header-top xl-none"
                      onClick={toggleAuth}
                    >
                      <button type="button">
                        <i className="las la-times"></i>
                      </button>
                    </div>
                    <p>{t('definition')}</p>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="header-top-right">
                    {isLogin ? (
                      <Link href="/user/profile">
                        <a className="link style3">
                          <i className="ri-user-line"></i>
                          {t('myProfile')}
                        </a>
                      </Link>
                    ) : (
                      <Link href="/log-in">
                        <a className="link style3">
                          <i className="ri-user-line"></i>
                          {t('login')}
                        </a>
                      </Link>
                    )}
                    <div
                      onClick={() => toggleCategory()}
                      className={open ? 'nice-select open' : 'nice-select'}
                    >
                      <span className="current">{name}</span>
                      <ul className="list">
                        {category.length > 0 &&
                          category.map((cat, index) => (
                            <li
                              key={index}
                              value={cat.value}
                              onClick={(e) => toggleSelected(cat, index)}
                              onChange={(e) => e}
                              className={
                                clicked === index
                                  ? 'option selected focus'
                                  : 'option'
                              }
                            >
                              {cat.text}
                            </li>
                          ))}
                      </ul>
                    </div>
                    {/*
                    <div
                      onClick={() => toggleCurrency()}
                      className={
                        openCurrency ? 'nice-select open' : 'nice-select'
                      }
                    >
                      <span className="current">{currencyName}</span>
                      <ul className="list">
                        {currency.length > 0 &&
                          currency.map((cur, index) => (
                            <li
                              key={index}
                              onClick={(e) =>
                                toggleSelectedCurrency(cur, index)
                              }
                              onChange={(e) => e}
                              className={
                                clicked === index
                                  ? 'option selected focus'
                                  : 'option'
                              }
                            >
                              {cur}
                            </li>
                          ))}
                      </ul>
                    </div>*/}

                    {/*<div className="shopcart md-none" onClick={toggleTopCart}>
                      <button type="button">
                        <i className="ri-shopping-cart-line"></i>
                        <span className="item-amt">1</span>
                      </button>
                      <span className="cart-total">$0.00</span>
                    </div>*/}

                    <div className="contact-box xl-none">
                      <span className="ri-phone-line"></span>
                      <p>
                        Contact Now <br />
                        <a href="tel:+15143214567">+1 (514) 321-4567</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navbar area */}
        <header
          className={
            sticky ? 'is-sticky header-wrap style1' : 'header-wrap style1'
          }
        >
          <div className="header-bottom">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 col-5">
                  <div className="logo v2">
                    <Link href="/">
                      <a>
                        <img src="/images/logo.jpg" alt="Image" />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-7 col-md-9 col-7 order-lg-1 order-md-2 order-2">
                  <div
                    className={
                      displayMobileMenu
                        ? 'main-menu-wrap open'
                        : 'main-menu-wrap'
                    }
                  >
                    <div className="menu-close xl-none">
                      <a onClick={toggleMobileMenu}>
                        <i className="las la-times"></i>
                      </a>
                    </div>

                    <div id="menu">
                      <ul className="main-menu">
                        <li>
                          <a href="/">{t('home')}</a>
                          {/*
                          <span className="menu-expand">
                            <i className="las la-angle-down"></i>
                          </span>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/" activeClassName="active">
                                <a>Home</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/index-2" activeClassName="active">
                                <a>Home Two</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/index-3" activeClassName="active">
                                <a>Home Three</a>
                              </Link>
                            </li>
                          </ul>*/}
                        </li>

                        <li className="has-children">
                          <Link href="/tours" activeClassName="active">
                            <a>{t('tour')}</a>
                          </Link>

                          <span className="menu-expand">
                            <i className="las la-angle-down"></i>
                          </span>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/tours" activeClassName="active">
                                <a>{t('tour')}</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/concerned-people"
                                activeClassName="active"
                              >
                                <a>{t('concernedPeople')}</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/financing" activeClassName="active">
                                <a>{t('financing')}</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/destination" locale={locale}>
                            <a>{t('destinations')}</a>
                          </Link>
                          {/*
                          <span className="menu-expand">
                            <i className="las la-angle-down"></i>
                          </span>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/" activeClassName="active">
                                <a>Home</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/index-2" activeClassName="active">
                                <a>Home Two</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/index-3" activeClassName="active">
                                <a>Home Three</a>
                              </Link>
                            </li>
                          </ul>*/}
                        </li>
                        {/*<li>
                          <a href="#">Ou chercher les financements</a>
                          
                          <span className="menu-expand">
                            <i className="las la-angle-down"></i>
                          </span>
                          <ul className="sub-menu">
                            <li>
                              <Link
                                href="/destination"
                                activeClassName="active"
                              >
                                <a>Destination</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/destination-details"
                                activeClassName="active"
                              >
                                <a>Destination Details</a>
                              </Link>
                            </li>
                          </ul>
                        </li>*/}

                        <li>
                          <Link href="/about-us" locale={locale}>
                            <a>{t('aboutUs')}</a>
                          </Link>
                          {/*
                          <span className="menu-expand">
                            <i className="las la-angle-down"></i>
                          </span>
                          <ul className="sub-menu">
                            <li className="has-children">
                              <a href="#">Shop Layout</a>
                              <span className="menu-expand">
                                <i className="las la-angle-down"></i>
                              </span>
                              <ul className="sub-menu">
                                <li>
                                  <Link
                                    href="/shop-left-sidebar"
                                    activeClassName="active"
                                  >
                                    <a>Shop Left Sidebar</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop-right-sidebar"
                                    activeClassName="active"
                                  >
                                    <a>Shop Right Sidebar</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop-no-sidebar"
                                    activeClassName="active"
                                  >
                                    <a>Shop No Sidebar</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <Link
                                href="/shop-details"
                                activeClassName="active"
                              >
                                <a>Shop Details</a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/wishlist" activeClassName="active">
                                <a>Wishlist</a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/cart" activeClassName="active">
                                <a>Cart</a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/checkout" activeClassName="active">
                                <a>Checkout</a>
                              </Link>
                            </li>

                            <li className="has-children">
                              <a href="#">User</a>
                              <span className="menu-expand">
                                <i className="las la-angle-down"></i>
                              </span>
                              <ul className="sub-menu">
                                <li>
                                  <Link href="/log-in" activeClassName="active">
                                    <a>Log In</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/register"
                                    activeClassName="active"
                                  >
                                    <a>Register</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/forgot-password"
                                    activeClassName="active"
                                  >
                                    <a>Forgot Password</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/admin/profile"
                                    activeClassName="active"
                                  >
                                    <a>My Account</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>*/}
                        </li>

                        <li>
                          <Link href="/contact-us" locale={locale}>
                            <a>{t('contactUs')}</a>
                          </Link>
                          {/*
                          <span className="menu-expand">
                            <i className="las la-angle-down"></i>
                          </span>
                          <ul className="sub-menu">
                            <li className="has-children">
                              <a href="#">Blog Layout</a>
                              <span className="menu-expand">
                                <i className="las la-angle-down"></i>
                              </span>
                              <ul className="sub-menu">
                                <li>
                                  <Link
                                    href="/blog-left-sidebar"
                                    activeClassName="active"
                                  >
                                    <a>Blog Left Sidebar</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/blog-right-sidebar"
                                    activeClassName="active"
                                  >
                                    <a>Blog Right Sidebar</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/blog-no-sidebar"
                                    activeClassName="active"
                                  >
                                    <a>Blog No Sidebar</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className="has-children">
                              <a href="#">Blog Details</a>
                              <span className="menu-expand">
                                <i className="las la-angle-down"></i>
                              </span>
                              <ul className="sub-menu">
                                <li>
                                  <Link
                                    href="/blog-details-left-sidebar"
                                    activeClassName="active"
                                  >
                                    <a>Blog Details Left Sidebar</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/blog-details-right-sidebar"
                                    activeClassName="active"
                                  >
                                    <a>Blog Details Right Sidebar</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/blog-details-no-sidebar"
                                    activeClassName="active"
                                  >
                                    <a>Blog Details No Sidebar</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>*/}
                        </li>

                        {/*<li className="has-children">
                          <a>Pages</a>
                          <span className="menu-expand">
                            <i className="las la-angle-down"></i>
                          </span>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/about-us" activeClassName="active">
                                <a>About Us</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/contact-us" activeClassName="active">
                                <a>Contact Us</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/team" activeClassName="active">
                                <a>Team</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/pricing-plan"
                                activeClassName="active"
                              >
                                <a>Pricing Plan</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/testimonial"
                                activeClassName="active"
                              >
                                <a>Testimonials</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/faq" activeClassName="active">
                                <a>FAQ</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/privacy-policy"
                                activeClassName="active"
                              >
                                <a>Privacy Policy</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/terms-condition"
                                activeClassName="active"
                              >
                                <a>Terms & Condition</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/404" activeClassName="active">
                                <a>404</a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link href="/contact-us" activeClassName="active">
                            <a>Contact Us</a>
                          </Link>
                        </li>*/}
                      </ul>
                    </div>
                  </div>

                  <div className="mobile-bar-wrap">
                    {/*<div className="shopcart xl-none" onClick={toggleCart}>
                      <button type="button">
                        <i className="ri-shopping-cart-line"></i>
                        <span className="item-amt">1</span>
                      </button>
                      <span className="cart-total">$0.00</span>
                    </div>*/}

                    <div
                      className="sidebar-menu xl-none"
                      onClick={toggleContact}
                    >
                      <span className="ri-menu-3-line"></span>
                    </div>

                    <div
                      className="mobile-top-bar xl-none"
                      onClick={toggleAuth}
                    >
                      <i className="las la-sliders-h"></i>
                    </div>

                    <div className="mobile-menu xl-none">
                      <a onClick={toggleMobileMenu}>
                        <i className="las la-bars"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 order-lg-2 order-md-1 md-none">
                  <div className="header-bottom-right">
                    <div className="contact-box">
                      <span className="ri-phone-line"></span>
                      <p>
                        {t('contactNow')}
                        <br />
                        <a href="tel:+33143156455">+331.43.15.64.55</a>
                      </p>
                    </div>
                    <div className="sidebar-menu" onClick={toggleContact}>
                      <span className="ri-menu-3-line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Sidebar Modal */}
        <div
          className={displayContact ? 'contact-popup open' : 'contact-popup'}
        >
          <div className="contact-popup-title">
            <h2>{t('contactUs')}</h2>
            <button
              type="button"
              className="close-popup"
              onClick={toggleContact}
            >
              <i className="ri-close-fill"></i>
            </button>
          </div>

          <div className="contact-popup-wrap">
            <div className="contact-address">
              <div className="contact-icon">
                <i className="ri-map-pin-fill"></i>
              </div>
              <div className="contact-info">
                <h5>Paris, France</h5>
                <p>{t('address')}: 03 rue Bisson 75020, Paris</p>
                <p>
                  {t('phone')}: <a href="tel:+33143156455">+331.43.15.64.55</a>
                </p>
              </div>

              <div className="contact-info">
                <h5 className="mtb-15">{t('followUs')}:</h5>

                <ul className="social-profile v1">
                  <li>
                    <a target="_blank" href="https://facebook.com">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://linkedin.com">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://instagram.com">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="comp_map">
              <iframe
                className="gmap_iframe"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=03 rue Bisson 75020, Paris&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Product cart sidebar */}
        <div className={display ? 'cart-popup open' : 'cart-popup'}>
          <div className="cart-popup-title">
            <h2>Shopping Cart (4)</h2>
            <button type="button" className="close-popup" onClick={toggleCart}>
              <i className="las la-times"></i>
            </button>
          </div>

          <div className="cart-popup-item-wrap">
            <div className="cart-popup-item">
              <div className="cart-popup-item-img">
                <img src="/images/product/cart-thumb-1.jpg" alt="Image" />
              </div>
              <div className="cart-popup-item-name">
                <p>Large Suitcase</p>
                <div className="product-quantity">
                  <div className="qtySelector">
                    <span className="ri-subtract-line decreaseQty"></span>
                    <input
                      type="text"
                      className="qtyValue"
                      value="1"
                      onChange={(e) => e}
                    />
                    <span className="las la-plus increaseQty"></span>
                  </div>
                </div>
              </div>
              <div className="cart-popup-item-price">
                <button type="button">
                  <i className="las la-times"></i>
                </button>
                <span>$148.00</span>
              </div>
            </div>

            <div className="cart-popup-item">
              <div className="cart-popup-item-img">
                <img src="/images/product/cart-thumb-2.jpg" alt="Image" />
              </div>
              <div className="cart-popup-item-name">
                <p>Leather Backpack</p>
                <div className="product-quantity">
                  <div className="qtySelector">
                    <span className="ri-subtract-line decreaseQty"></span>
                    <input
                      type="text"
                      className="qtyValue"
                      value="1"
                      onChange={(e) => e}
                    />
                    <span className="las la-plus increaseQty"></span>
                  </div>
                </div>
              </div>
              <div className="cart-popup-item-price">
                <button type="button">
                  <i className="las la-times"></i>
                </button>
                <span>$148.00</span>
              </div>
            </div>

            <div className="cart-popup-item">
              <div className="cart-popup-item-img">
                <img src="/images/product/cart-thumb-3.jpg" alt="Image" />
              </div>
              <div className="cart-popup-item-name">
                <p>Orange Suitcase</p>
                <div className="product-quantity">
                  <div className="qtySelector">
                    <span className="ri-subtract-line decreaseQty"></span>
                    <input
                      type="text"
                      className="qtyValue"
                      value="1"
                      onChange={(e) => e}
                    />
                    <span className="las la-plus increaseQty"></span>
                  </div>
                </div>
              </div>
              <div className="cart-popup-item-price">
                <button type="button">
                  <i className="las la-times"></i>
                </button>
                <span>$148.00</span>
              </div>
            </div>
          </div>

          <div className="cart-popup-total-wrap">
            <div className="cart-popup-total">
              <h5>TOTAL</h5>
              <h5>$444.00</h5>
            </div>

            <Link href="/shop-left-sidebar">
              <a className="btn v4">Continue Shopping</a>
            </Link>

            <Link href="/checkout">
              <a className="btn v3">Check Out</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
