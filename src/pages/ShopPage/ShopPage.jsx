import React from 'react';

import INITIAL_SHOP_DATA from './__fixtures__/shopData';
import CollectionPreview from '../../components/CollectionPreview';

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
        {this.state.collections.map((collection) => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
        
      </div>
    );
  }
}

export default ShopPage;