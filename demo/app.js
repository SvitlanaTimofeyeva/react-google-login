import React, { useState } from 'react'
import { GoogleLogout, GoogleLogin } from '../src/index'
// import GoogleLogin, { GoogleLogout } from '../dist/google-login'
// import FontAwesome from 'react-fontawesome';

const clientId = '46140027303-hslvr7k1b6c3ivheu5preodnqkno73l4.apps.googleusercontent.com'

const success = response => {
  console.log(response) // eslint-disable-line
}

const error = response => {
  console.error(response) // eslint-disable-line
}

const loading = () => {
  console.log('loading') // eslint-disable-line
}

const logout = () => {
  console.log('logout') // eslint-disable-line
}

const MountTest = () => {
  const [showButton, toggleShow] = useState(true)

  if (showButton) {
    return (
      <GoogleLogin
        onSuccess={res => {
          toggleShow(false)
          success(res)
        }}
        onFailure={error}
        clientId={clientId}
      >
        Auth then Hide button
      </GoogleLogin>
    )
  }

  return <button onClick={() => toggleShow(true)}>show button</button>
}

export default () => (
  <div>
  <GoogleLogin
   isSignedIn
   onAutoload={() => console.log('onAutologin')}
   onAutoloadFailure={() => console.log('onAutologinFailure')}
   onSuccess={success}
   onFailure={error}
   clientId={clientId} />
    <br />
    <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
  </div>
)
