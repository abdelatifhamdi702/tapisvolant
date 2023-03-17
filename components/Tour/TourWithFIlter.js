import React from 'react'
import Tour from './Tour'
import FeatureTour from '../common/FeatureTour'
const TourWithFIlter = () => {
  return (
    <>
      <div className="tour-wrap pt-100 pb-100">
        <div className="container">
          <FeatureTour viewButton={true} />
          {/*<div className="row">
            <div className="col-md-12">
              <div className="page-navigation">
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="page-nav">
                      <li>
                        <a>
                          <i className="ri-arrow-left-s-line"></i>
                        </a>
                      </li>
                      <li>
                        <a className="active">1</a>
                      </li>
                      <li>
                        <a>2</a>
                      </li>
                      <li>
                        <a>3</a>
                      </li>
                      <li>
                        <a>
                          <i className="ri-arrow-right-s-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </div>*/}
        </div>
      </div>
    </>
  )
}

export default TourWithFIlter
