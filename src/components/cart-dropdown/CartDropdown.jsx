import React, { memo } from 'react';

import CustomButtom from '../custom-button';

import './CartDropdown.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <CustomButtom buttonType="primary">
        Go to Checkout
    </CustomButtom>
  </div>
);

export default memo(CartDropdown);

