import React, { memo } from 'react';

import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({children, buttonType, ...othrBtnProps }) => (
  <CustomButtonContainer type={buttonType} {...othrBtnProps} >
    {children}
  </CustomButtonContainer>
);

export default memo(CustomButton);