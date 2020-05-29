import React, { memo } from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button';
import { addItemToCart } from '../../redux/cart/cartActions';

import './CollectionItem.scss';

const CollectionItem = ({ addToCart, item}) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton buttonType="inverted" onClick={addToCart}>Add to Cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToCart: () => dispatch(addItemToCart(ownProps.item))
});

export default connect(null, mapDispatchToProps)(memo(CollectionItem));