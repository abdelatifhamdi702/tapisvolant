import React, { useLayoutEffect } from 'react'
import MyAccountNavbar from '../../components/MyAccount.js/MyAccountNavbar'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'footer',
        'profiledata',
        'editprofile',
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
const authData = async () => {
  let accessToken = await getAccessToken()
  let headersList = {
    authorization: 'Bearer ' + accessToken
  }

  let response = await fetch(
    `https://${process.env.host}:${process.env.port}/auth/me`,
    {
      headers: headersList
    }
  )

  return await response.json()
}

const profileData = async () => {
  let accessToken = await getAccessToken()
  let headersList = {
    authorization: 'Bearer ' + accessToken
  }

  let response = await fetch(
    `https://${process.env.host}:${process.env.port}/profile`,
    {
      headers: headersList
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
        document.getElementById('gender').innerHTML = t(
          'editprofile:' + res.data.gender
        )
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
        /*if (res.data.DisabilityCategories[0].type == 'aucun') {
          document.getElementById('handicaps').innerHTML = 'aucun'
        } else {*/
        for (var h in res.data.DisabilityCategories) {
          //if (res.data.DisabilityCategories[h].type != 'aucun') {
          handicaps += res.data.DisabilityCategories[h].type + '<br />'
          //}
        }
        document.getElementById('handicaps').innerHTML = handicaps
      }
    }
    fetchProfileData()
  }, [])
  const { t } = useTranslation('profiledata')

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
                    <h2 className="account-title">{t('title1')}</h2>
                    <ul className="user-info">
                      <li>
                        <span>{t('text1')}:</span>
                        <img
                          id="profileImg"
                          src="/images/team/team-1.jpg"
                          style={{ width: '120px', height: '120px' }}
                        />
                      </li>
                      <li>
                        <span>{t('text2')}:</span>
                        <p id="username">me </p>
                      </li>
                      <li>
                        <span>{t('text3')}:</span>
                        <p id="email"> moi@email.fr</p>
                      </li>
                      <li>
                        <span>{t('text4')}:</span>
                        <p id="phone"> +000 0000 000</p>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div className="user-details">
                    <h2 className="account-title">{t('title2')}</h2>
                    <ul className="user-info">
                      <li>
                        <span>{t('text5')}:</span>
                        <p id="firstName"> Jhon Conor</p>
                      </li>
                      <li>
                        <span>{t('text6')}:</span>
                        <p id="lastName">Conor</p>
                      </li>
                      <li>
                        <span>{t('text7')}:</span>
                        <p id="gender">Homme</p>
                      </li>
                      <li>
                        <span>{t('text8')}:</span>
                        <p id="dob"> 26-09-1987</p>
                      </li>
                      <li>
                        <span>{t('text9')}:</span>
                        <p id="adresses">
                          adresse 1 <br /> adresse 2
                        </p>
                      </li>
                      <li>
                        <span>{t('text10')}:</span>
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
