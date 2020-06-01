import React, { memo } from "react";
import { connect } from "react-redux";

import {
  AddItemBtn,
  CollectionItemStyled,
  Footer,
  ItemImage,
  Name,
  Price,
} from "./CollectionItem.styles";

import { addItemToCart } from "../../redux/cart/cartActions";

const CollectionItem = ({ addToCart, item }) => {
  const { name, imageUrl, price } = item;

  return (
    <CollectionItemStyled>
      <ItemImage className="image" imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <AddItemBtn buttonType="inverted" onClick={addToCart}>
        Add to Cart
      </AddItemBtn>
    </CollectionItemStyled>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToCart: () => dispatch(addItemToCart(ownProps.item)),
});

export default connect(null, mapDispatchToProps)(memo(CollectionItem));
