import React from 'react'
import { useTranslation } from 'react-i18next'
const Promo = ({ bgStyle, mt100 }) => {
  const { t } = useTranslation('aboutus')
  return (
    <>
      <div className={`promo-wrap pt-100 pb-70 z-0 ${mt100}`}>
        <div className="container">
          <div className="row mb-40 align-items-end">
            <div className="col-md-12">
              <div className="section-title style4 text-center">
                <span>{t('allour')}</span>
                <h2>{t('values')}</h2>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: '20px' }}>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`promo-item ${bgStyle}`}>
                <div className="promo-icon">
                  <i className="la la-handshake"></i>
                </div>
                <div className="promo-content">
                  <h4>{t('t1')}</h4>
                  <p>{t('v1')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`promo-item ${bgStyle}`}>
                <div className="promo-icon">
                  <i className="la la-check-circle"></i>
                </div>
                <div className="promo-content">
                  <h4>{t('t2')}</h4>
                  <p>{t('v2')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`promo-item ${bgStyle}`}>
                <div className="promo-icon">
                  <i className="la la-users"></i>
                </div>
                <div className="promo-content">
                  <h4>{t('t3')}</h4>
                  <p>{t('v3')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={`promo-item ${bgStyle}`}>
                <div className="promo-icon">
                  <i className="la la-gem"></i>
                </div>
                <div className="promo-content">
                  <h4>{t('t4')}</h4>
                  <p>{t('v4')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Promo
