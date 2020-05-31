import React, { memo } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item";
import { selectCollection } from "../../redux/shop/shopSelectors";

import "./CollectionPage.scss";

const CollectionPage = ({ collection = {}, match }) => {
  console.log(match.params.collectionId);
  const { title = "empty", items = [] } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const getCollectionFn = selectCollection(ownProps.match.params.collectionId);
  const collection = getCollectionFn(state);
  
  return {
    collection
  };
};

export default connect(mapStateToProps)(memo(CollectionPage));
