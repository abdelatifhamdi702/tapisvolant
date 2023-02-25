import Link from 'next/link'
import { useTranslation } from 'react-i18next'
const Service = () => {
  const { t } = useTranslation('aboutus')
  return (
    <>
      <section className="service-wrap pt-100 pb-100">
        <div className="container">
          <div className="row mb-40 align-items-end">
            <div className="col-md-12">
              <div className="section-title style4 text-center">
                <span>{t('allour2')}</span>
                <h2>{t('partners')}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="#">
                    <a>
                      <img src="/images/service/service1.jpg" alt="Image" />
                    </a>
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="#">
                      <a>{t('p1')}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="#">
                    <a>
                      <img src="/images/service/service2.jpg" alt="Image" />
                    </a>
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="#">
                      <a>{t('p2')}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="#">
                    <a>
                      <img src="/images/service/service3.jpg" alt="Image" />
                    </a>
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="#">
                      <a>{t('p3')}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="#">
                    <a>
                      <img src="/images/service/service4.jpg" alt="Image" />
                    </a>
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="#">
                      <a>{t('p4')}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="#">
                    <a>
                      <img src="/images/service/service5.jpg" alt="Image" />
                    </a>
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="#">
                      <a>{t('p5')}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item style2">
                <div className="service-img">
                  <Link href="#">
                    <a>
                      <img src="/images/service/service6.jpg" alt="Image" />
                    </a>
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="#">
                      <a>{t('p6')}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
