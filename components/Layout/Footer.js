import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <>
      <footer className="footer-wrap style1 bg-heath">
        <div className="container">
          <div className="footer-top pt-100 pb-70">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Tapis Volant</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/about-us">
                        <a>{t('navbar:aboutUs')}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
                        <a>{t('navbar:contactUs')}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">
                    {t('footer:services')}
                  </h4>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/tours">
                        <a href="tours">{t('navbar:tour')}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination">
                        <a>{t('navbar:destination')}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">
                    {t('footer:information')}
                  </h4>
                  <ul className="footer-menu">
                    <Link href="/concerned-people">
                      <li>
                        <a>{t('navbar:concernedPeople')}</a>
                      </li>
                    </Link>
                    <li>
                      <Link href="/financing">
                        <a>{t('navbar:financing')}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">{t('footer:paySec')}</h4>
                  <p>{t('footer:payMethodes')} :</p>
                  <ul className="payment-option">
                    <li>
                      <img src="/images/paypal.png" alt="Image" />
                    </li>
                    <li>
                      <img src="/images/mastercard.png" alt="Image" />
                    </li>
                    <li>
                      <img src="/images/visa.png" alt="Image" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-4">
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
              <div className="col-lg-6 col-md-8">
                <div className="copyright-text">
                  <p>
                    Copyright <span className="las la-copyright"></span> 2023
                    Tapis Volant. {t('footer:rights')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
