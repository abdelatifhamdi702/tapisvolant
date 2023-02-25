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
        'financing',
      ])),
      // Will be passed to the page component as props
    },
  }
}
const TermsCondition = () => {
  const { t } = useTranslation('financing')
  return (
    <>
      <PageBannerTwo
        bannerTitle={t('title')}
        pageName={t('title')}
        bgImageCss="br-bg-5"
      />
      <section className="faq-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-12">
              <div className="pp-content-wrap">
                <div className="pp-content">
                  <p>{t('intro')}</p>
                  <h4>1. {t('title1')} :</h4>
                  <p>
                    {t('text1')}
                    <b style={{ color: '#cc3f32' }}>{t('bold1')}</b>
                  </p>
                </div>
                <div className="pp-content">
                  <h4>2. {t('title2')} :</h4>
                  <p>{t('text2')} :</p>
                  <p>
                    <b style={{ color: '#cc3f32' }}>{t('title21')} :</b>{' '}
                    {t('text21')}
                  </p>
                  <p>
                    <b style={{ color: '#cc3f32' }}>{t('title22')} :</b>{' '}
                    {t('text22')}
                    <br />
                    <a style={{ color: '#cc3f32' }}>
                      https://www.ancv.com/le-cheque-vacances
                    </a>
                  </p>
                  <p>
                    <b style={{ color: '#cc3f32' }}>{t('title23')} :</b>{' '}
                    {t('text23')} : <br />• {t('item231')}
                    <br />• {t('item232')} <br />• {t('item233')}
                    <br />• {t('item234')} <br />• {t('item235')}
                    <br />{' '}
                    <span style={{ color: '#cc3f32' }}>{t('title24')} : </span>
                    <br />• {t('item241')} <br />• {t('item242')}
                    <br />• {t('item243')}
                  </p>
                </div>
                <div className="pp-content">
                  <h4>3. {t('title3')} : </h4>
                  <p>
                    {t('text3')}
                    <br />
                    <span style={{ color: '#cc3f32' }}>{t('title31')}</span>
                    <br />
                    {t('text31')} : <br />• {t('item311')} <br />•{' '}
                    {t('item312')}
                  </p>
                </div>
                <div className="pp-content">
                  <h4>4. {t('title4')} :</h4>
                  <p>
                    {t('text4')}
                    <br />
                    <a style={{ color: '#cc3f32' }}>www.vacaf.org</a>
                  </p>
                </div>

                <div className="pp-content">
                  <h4>5. {t('title5')} :</h4>
                  <p>
                    {t('text5')}
                    <br />
                    <a style={{ color: '#cc3f32' }}>www.ameli.fr</a>
                  </p>
                </div>

                <div className="pp-content">
                  <h4>6. {t('title6')} :</h4>
                  <p>{t('text6')}</p>
                </div>
                <div className="pp-content">
                  <h4>7. {t('title7')} : </h4>
                  <p>{t('text7')}</p>
                </div>
                <div className="pp-content">
                  <h4>8. {t('title8')} :</h4>
                  <p>{t('text8')}</p>
                </div>
                <div className="pp-content">
                  <h4>9. {t('title9')} :</h4>
                  <p>{t('text9')}</p>
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
