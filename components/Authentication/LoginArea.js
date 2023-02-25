import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const LoginArea = () => {
  const { t } = useTranslation('login')
  const login = async () => {
    let headersList = {
      'Content-Type': 'application/json',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    }
    let bodyContent = JSON.stringify({
      email: document.getElementById('email').value,
      password: document.getElementById('pwd').value,
    })

    let response = await fetch(
      `http://${process.env.host}:${process.env.port}/auth/signin`,
      {
        method: 'POST',
        headers: headersList,
        body: bodyContent,
      }
    )

    return await response.json()
  }

  const submitLoginForm = async (e) => {
    e.preventDefault()
    const res = await login()
    console.log(res)
    if (res.statusCode == 409) {
      document.getElementById('loginError').innerHTML = t('loginerror')
    } else {
      if (res.data) {
        localStorage.setItem('token', res.data.accessToken)
        localStorage.setItem('refreshToken', res.data.refreshToken)
        localStorage.setItem('status', true)
        localStorage.setItem('email', document.getElementById('email').value)
        document.location.href = '/'
      }
    }
  }
  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2">
            <div className="login-form">
              <div className="login-header bg-minsk">
                <h2 className="text-left">{t('title')}</h2>
                <span>{t('subtitle')}</span>
              </div>
              <div className="login-body">
                <form className="form-wrap" onSubmit={submitLoginForm}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label style={{ marginBottom: '10px' }}>
                          {t('input1')}
                        </label>
                        <input id="email" name="email" type="email" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label style={{ marginBottom: '10px' }}>
                          {t('input2')}
                        </label>
                        <input id="pwd" name="pwd" type="password" />
                      </div>
                      <b id="loginError" style={{ color: '#cc3f32' }}></b>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                      <div className="form_group mb-20">
                        <input type="checkbox" id="test_1" />
                        <label htmlFor="test_1">{t('checkbox')}</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 text-end mb-20">
                      <Link href="/forgot-password">
                        <a className="link">{t('forgot')}</a>
                      </Link>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn v7">{t('btn')}</button>
                      </div>
                    </div>
                    {/* <div className="col-lg-12">
                      <div className="form-group text-center">
                        <span className="or">Ou connectez-vous avec</span>
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
                        {t('createtext')}
                        <Link href="/register">
                          <a className="link">{t('createlink')}</a>
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

export default LoginArea
