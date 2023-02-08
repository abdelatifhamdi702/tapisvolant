import React from 'react'
import Link from 'next/link'
import MyAccountNavbar from '../../components/MyAccount.js/MyAccountNavbar'

const MyOrders = () => {
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
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="wh_item">
                              <img
                                src="/images/tour/feature-tour-2.png"
                                alt="Image"
                              />
                              <Link href="/shop-details">
                                <a>Marrakech</a>
                              </Link>
                            </div>
                          </td>
                          <td>
                            <p className="wh-tem-price">12-02-2023</p>
                          </td>
                          <td>
                            <p className="wh-tem-price text-red">$148.00</p>
                          </td>
                          <td>
                            <button type="button">
                              <span className="las la-times"></span>
                            </button>
                          </td>
                        </tr>
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
