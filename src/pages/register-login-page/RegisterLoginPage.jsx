import React, { memo } from 'react';
import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';

import './RegisterLoginPage.scss';

const RegisterLoginPage = () => (
  <div className='register-login-page'>
      <SignIn />
      <SignUp />
  </div>
);

export default memo(RegisterLoginPage);