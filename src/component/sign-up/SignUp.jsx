import React, { useState } from 'react';

import InputForm from '../input-form/InputForm';
import CustomButton from '../custom-button/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.scss';

function SignUp() {
  const [signUpForm, setSignUpForm] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = signUpForm;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      setSignUpForm({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log(error);
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  }
  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your email an password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <InputForm
          type="text"
          name="displayName"
          value={signUpForm.displayName}
          label="displayName"
          handleChange={handleChange}
          required
        />
        <InputForm
          type="email"
          name="email"
          value={signUpForm.email}
          label="email"
          handleChange={handleChange}
          required
        />
        <InputForm
          type="password"
          name="password"
          value={signUpForm.password}
          label="password"
          handleChange={handleChange}
          required
        />
        <InputForm
          type="password"
          name="confirmPassword"
          value={signUpForm.confirmPassword}
          label="confirm password"
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
