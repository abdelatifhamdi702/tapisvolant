import React from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
var token = ''
var email = ''

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
  let headersList = {
    authorization: 'Bearer ' + token,
    'Content-Type': 'application/json',
    'Cross-Origin-Resource-Policy': 'cross-origin',
  }
  let bodyContent = JSON.stringify({
    token: token,
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
const ResetPasswordArea = () => {
  var router = useRouter()
  email = router.query['email']
  token = router.query['token']
  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <div className="login-form">
              <div className="login-header bg-minsk">
                <h2 className="text-left">Réinitialisation du mot de passe</h2>
                <span>Récupérez votre mot de passe</span>
              </div>
              <div className="login-body">
                <form className="form-wrap" onSubmit={submitResetForm}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Ecrivez votre nouveau mot de passeord"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-0">
                        <button className="btn v6">Envoyer</button>
                      </div>
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

export default ResetPasswordArea
