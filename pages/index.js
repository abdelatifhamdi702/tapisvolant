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
import Product from '../components/common/Product'
import Blog from '../components/common/Blog'
import Newsletter from '../components/common/Newsletter'

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
