import React from 'react'
import PageBannerTwo from '../components/common/PageBannerTwo'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'concernedpeople',
      ])),
      // Will be passed to the page component as props
    },
  }
}
const TermsCondition = () => {
  const { t } = useTranslation('concernedpeople')
  return (
    <>
      <PageBannerTwo
        bannerTitle={t('title')}
        pageName={t('title')}
        bgImageCss="br-bg-4"
      />
      <section className="faq-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-12">
              <div className="pp-content-wrap">
                <div className="pp-content">
                  <h4>1. {t('title')} :</h4>
                  <p>{t('text1')}</p>
                </div>
                <div className="pp-content">
                  <h4>2. {t('title2')} :</h4>
                  <p>{t('text2')}</p>
                </div>
                <div className="pp-content">
                  <h4>3. {t('title3')} : </h4>
                  <p>{t('text3')}</p>
                </div>
                <div className="pp-content">
                  <h4>4. {t('title4')}</h4>
                  <p>{t('text4')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsCondition
