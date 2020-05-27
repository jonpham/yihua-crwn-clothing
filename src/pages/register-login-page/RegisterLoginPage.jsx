import React, { memo } from 'react';
import SignIn from '../../components/sign-in';

import './RegisterLoginPage.scss';

const RegisterLoginPage = () => (
  <div className='register-login-page'>
      RegisterLoginPage
      <SignIn />
  </div>
);

export default memo(RegisterLoginPage);