import React, { useState } from 'react';

import InputForm from '../input-form/InputForm';
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.scss';

function SignIn() {
  const [signInForm, setSignInForm] = useState({ email: '', password: '' });

  async function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = signInForm;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSignInForm({ email: '', password: '' });
    } catch (error) {
      console.log('error :', error);
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setSignInForm({ ...signInForm, [name]: value });
  }
  return (
    <div className="sign-in">
      <h2>I Already have an account</h2>
      <p>Sign with your email and password</p>
      <form onSubmit={handleSubmit}>
        <InputForm
          type="email"
          name="email"
          value={signInForm.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <InputForm
          type="password"
          name="password"
          value={signInForm.password}
          handleChange={handleChange}
          required
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign In with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
