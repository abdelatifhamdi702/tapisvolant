import React, { useLayoutEffect, useState } from 'react'
import MyAccountNavbar from '../../components/MyAccount.js/MyAccountNavbar'
import SelectDisability from '../../components/common/SelectDisability'
import Swal from 'sweetalert2'
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
const authData = async () => {
  let accessToken = await getAccessToken()
  let headersList = {
    authorization: 'Bearer ' + accessToken,
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
  let accessToken = await getAccessToken()
  let headersList = {
    authorization: 'Bearer ' + accessToken,
  }

  let response = await fetch(
    `http://${process.env.host}:${process.env.port}/profile`,
    {
      headers: headersList,
    }
  )

  return await response.json()
}

function phonenumber(inputtxt) {
  var phoneno = /^\+\d{8,14}$/
  if (inputtxt.match(phoneno)) {
    return true
  } else {
    return false
  }
}

function _calculateAge(birthday) {
  // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime()
  var ageDate = new Date(ageDifMs) // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const uploadProfileImgReq = async () => {
  let accessToken = await getAccessToken()
  let headersList = {
    authorization: 'Bearer ' + accessToken,
  }
  let formData = new FormData()

  formData.append('profileImg', document.getElementById('profileImg').files[0])

  let response = await fetch(
    `http://${process.env.host}:${process.env.port}/upload/profile`,
    {
      method: 'POST',
      headers: headersList,
      body: formData,
    }
  )

  return await response.json()
}

const uploadProfileImg = async (e) => {
  e.preventDefault()
  const res = await uploadProfileImgReq()
  if (res.data) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre photo profil est mis à jour avec succès',
      showConfirmButton: false,
      timer: 1500,
    })
  }
}

const editProfile = async () => {
  let accessToken = await getAccessToken()
  let headersList = {
    authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
    'Cross-Origin-Resource-Policy': 'cross-origin',
  }
  let firstName = document.getElementById('firstName').value
  let lastName = document.getElementById('lastName').value
  let e = document.getElementById('gender')
  let gender = e.value
  let dob = document.getElementById('dob').value
  let age = _calculateAge(new Date(dob))
  let address = [
    {
      id: document.getElementById('address_1_id').getAttribute('data-id'),
      address: document.getElementById('address_1').value,
    },
    {
      id: document.getElementById('address_2_id').getAttribute('data-id'),
      address: document.getElementById('address_2').value,
    },
  ]
  let DisabilityCategory = []
  var ele = document.getElementsByTagName('input')
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].type == 'checkbox' && ele[i].checked == true) {
      DisabilityCategory.push({
        code: ele[i].value,
        type: ele[i].value,
      })
    }
  }
  let bodyContent = JSON.stringify({
    data: {
      id: document.getElementById('profile_id').getAttribute('data-id'),
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      age: parseInt(age),
      dob: new Date(dob),
      Addresses: address,
      DisabilityCategories: DisabilityCategory,
    },
  })

  console.log(bodyContent)

  let response = await fetch(
    `http://${process.env.host}:${process.env.port}/profile`,
    {
      method: 'PATCH',
      headers: headersList,
      body: bodyContent,
    }
  )

  return await response.json()
}

const submitEditProfileForm = async (e) => {
  e.preventDefault()
  const res = await editProfile()
  console.log(res)
  if (res.data) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre profil est mis à jour avec succès',
      showConfirmButton: false,
      timer: 1500,
    })
  }
}

const editAuth = async () => {
  let accessToken = await getAccessToken()
  let headersList = {
    authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
    'Cross-Origin-Resource-Policy': 'cross-origin',
  }
  let bodyContent = JSON.stringify({
    username: document.getElementById('username').value,
    phone: document.getElementById('phone').value,
  })

  let response = await fetch(
    `http://${process.env.host}:${process.env.port}/auth`,
    {
      method: 'PATCH',
      headers: headersList,
      body: bodyContent,
    }
  )

  return await response.json()
}

const submitEditAuthForm = async (e) => {
  e.preventDefault()
  if (!phonenumber(document.getElementById('phone').value)) {
    console.log('test')
    let error =
      "Le numéro de téléphone n'est pas correct! la forme accepté: (+33143156455)"
    document.getElementById('phoneError').innerHTML = error
    return {
      error: error,
    }
  } else document.getElementById('phoneError').innerHTML = ''
  const res = await editAuth()
  console.log(res)
  if (res.data) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre profil est mis à jour avec succès',
      showConfirmButton: false,
      timer: 1500,
    })
  }
}

function CheckPassword(inputtxt) {
  var decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,50}$/
  if (inputtxt.match(decimal)) {
    return true
  } else {
    return false
  }
}
const reset = async () => {
  let password = document.getElementById('password').value
  if (!CheckPassword(password)) {
    let error =
      'Le mot de passe doit contenir (1 majuscule, 1 symbole, plus de 8 caractères)'
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: error,
      showConfirmButton: false,
      timer: 1500,
    })

    return {
      error: error,
    }
  }
  let refreshToken = localStorage.getItem('refreshToken')
  let headersList = {
    authorization: 'Bearer ' + refreshToken,
    'Content-Type': 'application/json',
    'Cross-Origin-Resource-Policy': 'cross-origin',
  }
  var email = localStorage.getItem('email')
  let bodyContent = JSON.stringify({
    token: refreshToken,
    password: password,
    email: email,
  })
  let response = await fetch(
    `http://${process.env.host}:${process.env.port}/reset/password`,
    {
      method: 'PATCH',
      headers: headersList,
      body: bodyContent,
    }
  )

  return await response.json()
}
const submitResetForm = async (e) => {
  e.preventDefault()
  const res = await reset()
  console.log(res)
  if (res.data) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Votre mot de passe a été changé avec succès',
      showConfirmButton: false,
      timer: 1500,
    })
  }
}

const EditProfile = () => {
  const [disabilities, setDisabilities] = useState([])
  useLayoutEffect(() => {
    async function fetchDisabilities() {
      let accessToken = await getAccessToken()
      let headersList = {
        authorization: 'Bearer ' + accessToken,
      }
      console.log(headersList)
      const response = await fetch(`http://localhost:3000/disability/all`, {
        headers: headersList,
      })
      let res = await response.json()
      return res.data
    }
    async function fetchAuthData() {
      let res = await authData()
      console.log(res)
      document.getElementById('username').value = res.data.username
      document.getElementById('phone').value = res.data.phone
    }
    fetchAuthData()
    async function fetchProfileData() {
      let fetchedDisabilities = await fetchDisabilities()
      let res = await profileData()
      console.log(res)
      if (res.data) {
        document
          .getElementById('profile_id')
          .setAttribute('data-id', res.data.id)
        document.getElementById('firstName').value = res.data.firstName
        document.getElementById('lastName').value = res.data.lastName
        if (res.data.gender == 'male' || res.data.gender == 'female') {
          document.getElementById('gender').value = res.data.gender
        }
        let mydob = new Date(res.data.dob)
        document.getElementById('dob').value = mydob.toISOString().substr(0, 10)
        if (res.data.Addresses) {
          document.getElementById('address_1').value =
            res.data.Addresses[0].address
          document
            .getElementById('address_1_id')
            .setAttribute('data-id', res.data.Addresses[0].id)
          document.getElementById('address_2').value =
            res.data.Addresses[1].address
          document
            .getElementById('address_2_id')
            .setAttribute('data-id', res.data.Addresses[1].id)
        }
        let disTypes = []
        for (var h in res.data.DisabilityCategories) {
          disTypes.push(res.data.DisabilityCategories[h].type)
          /*document
            .getElementById('dis_id' + h)
            .setAttribute('data-id', res.data.DisabilityCategories[h].id)*/
        }
        let disPreState = []
        for (var i in fetchedDisabilities) {
          let isChecked = disTypes.includes(fetchedDisabilities[i].type)
          console.log(fetchedDisabilities[i].id + ' : ' + isChecked)
          disPreState.push({
            id: fetchedDisabilities[i].id,
            type: fetchedDisabilities[i].type,
            isChecked: isChecked,
          })
        }
        setDisabilities(disPreState)
      }
    }
    fetchProfileData()
  }, [])
  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <MyAccountNavbar />
            <div className="col-lg-9">
              <div className="tab-content">
                <div>
                  <h2 className="account-title">
                    Modifier les informations principales
                  </h2>
                  <br />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="profileImg"
                          name="profileImg"
                          type="file"
                          placeholder="Photo de profile"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 text-center">
                      <button onClick={uploadProfileImg} className="btn v5">
                        Changer la photo de profile
                      </button>
                    </div>
                  </div>
                  <form className="form-wrap" onSubmit={submitEditAuthForm}>
                    <div
                      id="message"
                      className="alert alert-danger alert-dismissible fade"
                    ></div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Nom d'utilisateur"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="phone"
                            name="phone"
                            type="phone"
                            placeholder="Numéro de téléphone"
                            required
                          />
                          <b id="phoneError" style={{ color: '#cc3f32' }}></b>
                        </div>
                      </div>

                      <div className="col-lg-12 text-center">
                        <button type="submit" className="btn v5">
                          Modifier
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <br />
              <div className="tab-content">
                <div>
                  <h2 className="account-title" id="profile_id">
                    Modifier les informations détaillées
                  </h2>
                  <form
                    className="form-wrap"
                    onSubmit={submitEditProfileForm}
                    id="update_profile"
                  >
                    <div
                      id="message"
                      className="alert alert-danger alert-dismissible fade"
                    ></div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Nom"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Prénom"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select
                            id="gender"
                            name="gender"
                            className="form-select form-select-lg"
                            aria-label="Default select example"
                            style={{ height: '60px' }}
                          >
                            <option defaultValue>Genre</option>
                            <option value="male">Homme</option>
                            <option value="female">Femme</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="dob"
                            name="dob"
                            type="date"
                            placeholder="Date de naissance"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group" id="address_1_id">
                          <input
                            id="address_1"
                            name="address_1"
                            type="text"
                            placeholder="Adresse 1"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group" id="address_2_id">
                          <input
                            id="address_2"
                            name="address_2"
                            type="text"
                            placeholder="Adresse 2"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <h4>handicaps:</h4>
                        {disabilities.map((item, index) => (
                          <SelectDisability
                            id={item.id}
                            type={item.type}
                            key={index}
                            isChecked={item.isChecked}
                          />
                        ))}
                      </div>
                      <div className="col-lg-12 text-center">
                        <br />
                        <button type="submit" className="btn v5">
                          Modifier
                        </button>
                        <br />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="tab-content">
                <div>
                  <h2 className="account-title">Changer le mot de passe</h2>
                  <form className="form-wrap" onSubmit={submitResetForm}>
                    <div
                      id="message"
                      className="alert alert-danger alert-dismissible fade"
                    ></div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="le nouveau mot de passe"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 text-center">
                        <button type="submit" className="btn v5">
                          Changer
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditProfile
