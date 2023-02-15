import React, { useLayoutEffect } from 'react'
import MyAccountNavbar from '../../components/MyAccount.js/MyAccountNavbar'

const authData = async () => {
  let headersList = {
    authorization: 'Bearer ' + localStorage.getItem('token'),
  }

  let response = await fetch(
    `http://${process.env.host}:${process.env.port}/auth/me`,
    {
      headers: headersList,
    }
  )

  return await response.json()
}

const profileData = async () => {
  let headersList = {
    authorization: 'Bearer ' + localStorage.getItem('token'),
  }

  let response = await fetch(
    `http://${process.env.host}:${process.env.port}/profile`,
    {
      headers: headersList,
    }
  )

  return await response.json()
}

const profile = () => {
  useLayoutEffect(() => {
    async function fetchAuthData() {
      let res = await authData()
      document.getElementById('username').innerHTML = res.data.username
      document.getElementById('phone').innerHTML = res.data.phone
      document.getElementById('email').innerHTML = res.data.email
      var path = res.data.profileImg
      var path2 = path.replace(/\\/g, '/')
      console.log(path2)
      document.getElementById('profileImg').src = 'http://' + path2
    }
    fetchAuthData()
    async function fetchProfileData() {
      let res = await profileData()
      console.log(res)
      if (res.data) {
        document.getElementById('firstName').innerHTML = res.data.firstName
        document.getElementById('lastName').innerHTML = res.data.lastName
        document.getElementById('gender').innerHTML = res.data.gender
        let mydob = new Date(res.data.dob)
        document.getElementById('dob').innerHTML = mydob
          .toISOString()
          .substr(0, 10)
        let adresses = ''
        for (var x in res.data.Addresses) {
          adresses += res.data.Addresses[x].address + '<br />'
        }
        document.getElementById('adresses').innerHTML = adresses
        let handicaps = ''
        if (res.data.DisabilityCategories[0].type == 'aucun') {
          document.getElementById('handicaps').innerHTML = 'aucun'
        } else {
          for (var h in res.data.DisabilityCategories) {
            if (res.data.DisabilityCategories[h].type != 'aucun') {
              handicaps += res.data.DisabilityCategories[h].type + '<br />'
            }
          }
          document.getElementById('handicaps').innerHTML = handicaps
        }
      }
    }
    fetchProfileData()
  }, [])

  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container account-center">
          <div className="row gx-5">
            <MyAccountNavbar />
            <div className="col-lg-9">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="tab_1"
                  role="tabpanel"
                >
                  <div className="user-details">
                    <h2 className="account-title">Informations principales</h2>
                    <ul className="user-info">
                      <li>
                        <span>Photo de profile:</span>
                        <img
                          id="profileImg"
                          src="/images/team/team-1.jpg"
                          style={{ width: '120px', height: '120px' }}
                        />
                      </li>
                      <li>
                        <span>Nom d'utilisateur:</span>
                        <p id="username">me </p>
                      </li>
                      <li>
                        <span>Email:</span>
                        <p id="email"> moi@email.fr</p>
                      </li>
                      <li>
                        <span>Phone:</span>
                        <p id="phone"> +000 0000 000</p>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div className="user-details">
                    <h2 className="account-title">Informations détaillées</h2>
                    <ul className="user-info">
                      <li>
                        <span>Nom:</span>
                        <p id="firstName"> Jhon Conor</p>
                      </li>
                      <li>
                        <span>Prénom:</span>
                        <p id="lastName">Conor</p>
                      </li>
                      <li>
                        <span>Genre:</span>
                        <p id="gender">Homme</p>
                      </li>
                      <li>
                        <span>Date de naissance:</span>
                        <p id="dob"> 26-09-1987</p>
                      </li>
                      <li>
                        <span>Adresses:</span>
                        <p id="adresses">
                          adresse 1 <br /> adresse 2
                        </p>
                      </li>
                      <li>
                        <span>handicaps:</span>
                        <p id="handicaps">
                          Handicap moteur
                          <br />
                          Handicap sensoriel
                          <br />
                          Handicap visuel
                          <br />
                          Handicap mental
                          <br />
                          Handicap cognitif
                          <br />
                          Handicap psychique
                        </p>
                      </li>
                    </ul>
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

export default profile
