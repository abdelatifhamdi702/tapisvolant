import React from 'react'
import Link from 'next/link'

const Footer = () => {
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
                        <a>Qui sommes-nous</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
                        <a>Nous contacter</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Services</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/tours">
                        <a href="tours">Séjours</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination">
                        <a>Destination</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Information</h4>
                  <ul className="footer-menu">
                    <Link href="/concerned-people">
                      <li>
                        <a>Les personnes concernes par les séjours</a>
                      </li>
                    </Link>
                    <li>
                      <Link href="/financing">
                        <a>Ou chercher les financements pour mon voyage</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Paiement Sécurisé</h4>
                  <p>Modes de règlement acceptés :</p>
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
                    Tapis Volant. All Rights Reserved
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
