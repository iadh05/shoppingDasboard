import React from 'react';

import SignIn from '../../component/sign-in/SignIn';
import SignUp from '../../component/sign-up/SignUp';
import './auth.scss';
function Auth() {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Auth;
