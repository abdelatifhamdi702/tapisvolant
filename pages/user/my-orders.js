import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import MyAccountNavbar from '../../components/MyAccount.js/MyAccountNavbar'
import BookingRow from '../../components/common/BookingRow'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'mybookings',
        'myaccount'
      ]))
      // Will be passed to the page component as props
    }
  }
}
async function getAccessToken() {
  let headersList = {
    authorization: 'Bearer ' + localStorage.getItem('refreshToken')
  }

  const res6 = await fetch(`http://localhost:3000/refresh/token`, {
    headers: headersList
  })
  let response6 = await res6.json()

  return response6.data.accessToken
}
const MyOrders = () => {
  const [bookings, setBookings] = useState([])
  var router = useRouter()
  const { locale } = router
  const { t } = useTranslation('mybookings')

  useEffect(() => {
    const fetchBookings = async () => {
      let accessToken = await getAccessToken()
      let headersList = {
        authorization: 'Bearer ' + accessToken
      }
      const response = await fetch(
        `https://${process.env.host}:${process.env.port}/booking/my?locale=${locale}`,
        {
          headers: headersList
        }
      )

      /*if (!response.ok) {
        throw new Error('Something went wrong!')
      }*/

      const responseData = await response.json()
      console.log(responseData)
      const loadedBookings = []

      for (const key in responseData.data) {
        let date = responseData.data[key].createdAt + ''
        date = date.substring(0, 10)
        let path = responseData.data[key].Tour.imgUrl
        let correctPath = path.replace(/\\/g, '/')
        console.log(responseData.data[key].status)
        loadedBookings.push({
          title: responseData.data[key].Tour.title,
          price: responseData.data[key].Tour.price,
          status: t(responseData.data[key].status),
          imgURL: correctPath,
          date: date
        })
      }
      console.log(loadedBookings)

      setBookings(loadedBookings)
    }

    fetchBookings()
  }, [locale])

  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <MyAccountNavbar />
            <div className="col-lg-9">
              <div className="tab-content" id="myTabContent">
                <div>
                  <h2 className="account-title">{t('title')}</h2>
                  <div className="wishlist-table ">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">{t('th1')}</th>
                          <th scope="col">{t('th2')}</th>
                          <th scope="col">{t('th3')}</th>
                          <th scope="col">{t('th4')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.map((item, index) => (
                          <BookingRow
                            key={index}
                            tourName={item.title}
                            tourImgURL={
                              'http://' + item.imgURL.replace(/\\/g, '/')
                            }
                            tourPrice={item.price}
                            BookingDate={item.date}
                            status={item.status}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyOrders
