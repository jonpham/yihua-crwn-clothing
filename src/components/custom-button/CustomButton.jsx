import React, { memo } from 'react';

import './CustomButton.scss';

const CustomButton = ({children, buttonType, ...othrBtnProps }) => (
  <button className={`${buttonType ? buttonType : 'primary'} custom-button`} {...othrBtnProps} >
    {children}
  </button>
);

export default memo(CustomButton);