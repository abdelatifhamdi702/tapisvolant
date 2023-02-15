import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import MyAccountNavbar from '../../components/MyAccount.js/MyAccountNavbar'
import BookingRow from '../../components/common/BookingRow'

const MyOrders = () => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const fetchBookings = async () => {
      let headersList = {
        authorization: 'Bearer ' + localStorage.getItem('token'),
      }
      const response = await fetch(
        `http://${process.env.host}:${process.env.port}/booking/my`,
        {
          headers: headersList,
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
        loadedBookings.push({
          title: responseData.data[key].Tour.title,
          price: responseData.data[key].Tour.price,
          imgURL: correctPath,
          date: date,
        })
      }
      console.log(loadedBookings)

      setBookings(loadedBookings)
    }

    fetchBookings()
  }, [])
  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <MyAccountNavbar />
            <div className="col-lg-9">
              <div className="tab-content" id="myTabContent">
                <div>
                  <h2 className="account-title">Mes réservations</h2>
                  <div className="wishlist-table ">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Séjour</th>
                          <th scope="col">Date</th>
                          <th scope="col">Prix</th>
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
