import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PageBannerThree from '../../components/common/PageBannerThree'
import TourDetailsContent from '../../components/Tour/TourDetailsContent'

const TourDetails = () => {
  const [tour, setTour] = useState()
  const [activities, setActivities] = useState()
  const [comments, setComments] = useState()
  const [cover, setCover] = useState()
  var router = useRouter()
  var id = router.query.tourId
  console.log(id)
  useEffect(() => {
    var id = router.query.tourId
    if (id) {
      localStorage.setItem('tourId', id)
    } else {
      id = localStorage.getItem('tourId')
    }
    const fetchTour = async () => {
      const response = await fetch(
        `http://${process.env.host}:${process.env.port}/tour/one/` + id
      )

      const responseData = await response.json()
      console.log(responseData)
      const loadedActivities = []
      const loadedComments = []
      const loadedTour = responseData.data

      let path = loadedTour.coverImgUrl
      let coverImagePath = 'http://' + path.replace(/\\/g, '/')
      setCover(coverImagePath)
      for (const key in responseData.data.Activities) {
        let path = responseData.data.Activities[key].imgUrl
        let correctPath = path.replace(/\\/g, '/')
        loadedActivities.push({
          id: responseData.data.Activities[key].id,
          title: responseData.data.Activities[key].title,
          description: responseData.data.Activities[key].description,
          imgURL: 'http://' + correctPath,
        })
      }
      for (const key in responseData.data.Comments) {
        let path = responseData.data.Comments[key].Auth.profileImg
        let correctPath = path.replace(/\\/g, '/')
        loadedComments.push({
          id: responseData.data.Comments[key].id,
          content: responseData.data.Comments[key].content,
          rating: responseData.data.Comments[key].rating,
          username: responseData.data.Comments[key].Auth.username,
          profileImg: 'http://' + correctPath,
        })
      }

      setActivities(loadedActivities)
      setComments(loadedComments)
      setTour(loadedTour)
    }
    fetchTour()
  }, [])

  if (tour === undefined) {
    return null
  }

  return (
    <>
      <PageBannerThree
        bannerTitle={tour.title}
        pageName="Détails de séjour"
        bgImageSrc={cover}
      />

      <section className="tour-details-wrap pb-100">
        <TourDetailsContent
          activities={activities}
          tour={tour}
          comments={comments}
        />
      </section>
    </>
  )
}

export default TourDetails
