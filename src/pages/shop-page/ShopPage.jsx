import React from 'react';

import INITIAL_SHOP_DATA from './__fixtures__/shopData';
import CollectionPreview from '../../components/collection-preview';

class ShopPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      collections: [ ...INITIAL_SHOP_DATA ]
    }
  }
  
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        
      </div>
    );
  }
}

export default ShopPage;