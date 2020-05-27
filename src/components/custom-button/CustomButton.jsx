import React, { memo } from 'react';

import './CustomButton.scss';

const CustomButton = ({children, ...othrBtnProps }) => (
  <button className="custom-button" {...othrBtnProps} >
    {children}
  </button>
);

export default memo(CustomButton);