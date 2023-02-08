import Link from 'next/link'

const Service = () => {
  return (
    <>
      <section className="service-wrap pt-100 pb-100">
        <div className="container">
          <div className="row mb-40 align-items-end">
            <div className="col-md-12">
              <div className="section-title style4 text-center">
                <span>TOUS NOS</span>
                <h2>PARTENAIRES</h2>
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
                      <a>Les compagnies de transports (avions, trains…)</a>
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
                      <a>Hébergement (hôtels, gites, villages de vacances…)</a>
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
                      <a>
                        Les centres de soins (cabinets médicaux, infirmeries…)
                      </a>
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
                      <a>Les centres d’activités culturelles et de loisirs</a>
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
                      <a>Les agences d’intérim/ services à la personne</a>
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
                      <a>Les restaurants</a>
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
