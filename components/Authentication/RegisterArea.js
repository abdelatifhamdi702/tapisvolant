import React from 'react'
import Link from 'next/link'
function phonenumber(inputtxt) {
  var phoneno = /^\+\d{8,14}$/
  if (inputtxt.match(phoneno)) {
    return true
  } else {
    return false
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

const signup = async () => {
  let email = document.getElementById('email').value
  let pwd = document.getElementById('pwd').value
  let username = document.getElementById('username').value
  let phone = document.getElementById('phone').value

  if (!CheckPassword(pwd)) {
    let error =
      'Le mot de passe doit contenir (1 majuscule, 1 symbole, plus de 8 caractères)'
    document.getElementById('pwdError').innerHTML = error
    return {
      error: error,
    }
  } else document.getElementById('pwdError').innerHTML = ''

  if (!phonenumber(phone)) {
    let error =
      "Le numéro de téléphone n'est pas correct! la forme accepté: (+33143156455)"
    document.getElementById('phoneError').innerHTML = error
    return {
      error: error,
    }
  } else document.getElementById('phoneError').innerHTML = ''

  let headersList = {
    'Content-Type': 'application/json',
    //'Cross-Origin-Resource-Policy': 'cross-origin',
  }
  let bodyContent = JSON.stringify({
    email: email,
    password: pwd,
    username: username,
    phone: phone,
  })

  let response = await fetch(
    `http://${process.env.host}:${process.env.port}/auth/signup`,
    {
      method: 'POST',
      headers: headersList,
      body: bodyContent,
    }
  )

  return await response.json()
}
const createEmptyProfile = async () => {
  let headersList = {
    authorization: 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json',
    'Cross-Origin-Resource-Policy': 'cross-origin',
  }
  let bodyContent = JSON.stringify({
    age: 45,
    Addresses: [{ address: 'address 1' }, { address: 'address 2' }],
    DisabilityCategories: [
      {
        code: 'code1',
        type: 'aucun',
      },
      {
        code: 'code2',
        type: 'aucun',
      },
      {
        code: 'code3',
        type: 'aucun',
      },
      {
        code: 'code4',
        type: 'aucun',
      },
      {
        code: 'code5',
        type: 'aucun',
      },
      {
        code: 'code6',
        type: 'aucun',
      },
    ],
  })

  let response = await fetch(
    `http://${process.env.host}:${process.env.port}/profile`,
    {
      method: 'POST',
      headers: headersList,
      body: bodyContent,
    }
  )
  return await response.json()
}
const submitRegisterForm = async (e) => {
  e.preventDefault()
  const res = await signup()
  console.log(res)
  if (res.data) {
    localStorage.setItem('token', res.data.tokens.accessToken)
    localStorage.setItem('refreshToken', res.data.tokens.refreshToken)
    localStorage.setItem('status', true)
    localStorage.setItem('email', document.getElementById('email').value)
    const res2 = await createEmptyProfile()
    console.log(res2)
    document.location.href = '/'
  }
}

const RegisterArea = () => {
  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="login-form">
              <div className="login-header bg-minsk">
                <h2 className="text-left">S'inscrire</h2>
                <span>Commencez avec nous</span>
              </div>
              <div className="login-body">
                <form className="form-wrap" onSubmit={submitRegisterForm}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          id="pwd"
                          name="pwd"
                          type="password"
                          placeholder="Mot de passe (1 majuscule, 1 symbole, plus de 8 caractères)"
                          required
                        />
                        <b id="pwdError" style={{ color: '#cc3f32' }}></b>
                      </div>
                    </div>
                    <div className="col-lg-12">
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
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          placeholder="Numéro de téléphone (+33143156455)"
                          required
                        />
                        <b id="phoneError" style={{ color: '#cc3f32' }}></b>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn v6">S'inscrire</button>
                      </div>
                    </div>
                    {/*<div className="col-lg-12">
                      <div className="form-group text-center">
                        <span className="or">Ou inscrivez-vous avec</span>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <ul className="social-profile v3 text-center mt-0">
                          <li>
                            <a target="_blank" href="https://instagram.com">
                              <i className="lab la-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a target="_blank" href="https://twitter.com">
                              <i className="lab la-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a target="_blank" href="https://facebook.com">
                              <i className="lab la-facebook-f"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>*/}
                    <div className="col-md-12 text-center">
                      <p className="mb-0">
                        Vous avez déjà un compte?{' '}
                        <Link href="/log-in">
                          <a className="link">Se connecter</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegisterArea
