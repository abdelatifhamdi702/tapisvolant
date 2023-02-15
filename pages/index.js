import React from 'react'
import Banner from '../components/HomeTwo/Banner'
import Promo from '../components/common/Promo'
import TourSlider from '../components/HomeTwo/TourSlider'
import BestTour from '../components/common/BestTour'
import AdventureTour from '../components/common/AdventureTour'
import Service from '../components/common/Service'
import RecommendTour from '../components/common/RecommendTour'
import FeatureTour from '../components/common/FeatureTour'
import About from '../components/common/About'

const Index2 = () => {
  return (
    <>
      <Banner />

      <About featureStyle="style2" />

      <Promo bgStyle="style2" />

      {/*<TourSlider />

      <BestTour 
        cardStyle='style2' 
        shape={false} 
  />

      <AdventureTour radiusStyle="style4" />
*/}

      <RecommendTour
        title="TOUTES NOS"
        subTitle="DESTINATIONS RECOMMANDEES"
        bgStyle="bg-heath"
      />

      <div className="ptb-100">
        <div className="row mb-40 align-items-end">
          <div className="col-md-12">
            <div className="section-title style4 text-center">
              <span>TOUS NOS</span>
              <h2>SEJOURS DISPONIBLES</h2>
            </div>
          </div>
        </div>
        <FeatureTour viewButton={true} />
      </div>

      <Service />

      {/*<Product />

      <Blog blogStyle="style2" />

<Newsletter inputStyle="style2" shape={false} />*/}
    </>
  )
}

export default Index2
