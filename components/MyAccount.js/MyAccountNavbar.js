import React from 'react'
import Link from '../../utils/ActiveLink'
async function getAccessToken() {
  let headersList = {
    authorization: 'Bearer ' + localStorage.getItem('refreshToken'),
  }

  const res6 = await fetch(`http://localhost:3000/refresh/token`, {
    headers: headersList,
  })
  let response6 = await res6.json()

  return response6.data.accessToken
}
const logoutReq = async () => {
  let accessToken = await getAccessToken()
  let headersList = {
    authorization: 'Bearer ' + accessToken,
  }

  let response = await fetch(
    `http://${process.env.host}:${process.env.port}/auth/logout`,
    {
      method: 'POST',
      headers: headersList,
    }
  )

  return await response.json()
}

const logout = async (e) => {
  e.preventDefault()
  const res = await logoutReq()
  console.log(res)

  if (res.data) {
    localStorage.setItem('token', '')
    localStorage.setItem('status', false)
    document.location.href = '/'
  }
}

const MyAccountNavbar = () => {
  return (
    <>
      <div className="col-lg-3">
        <ul className="nav nav-tabs user-tablist" id="myTab">
          <Link href="/user/profile" activeClassName="active">
            <li className="nav-item">
              <button className="nav-link">Profile</button>
            </li>
          </Link>

          <Link href="/user/edit-profile" activeClassName="active">
            <li className="nav-item">
              <button className="nav-link">Modifier mon profile</button>
            </li>
          </Link>

          <Link href="/user/my-orders" activeClassName="active">
            <li className="nav-item">
              <button className="nav-link">Mes réservations</button>
            </li>
          </Link>
          <li className="nav-item">
            <button className="nav-link" onClick={logout}>
              Se déconnecter
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MyAccountNavbar
