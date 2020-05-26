import React from "react";
import MenuItem from '../menu-item';

import initialDirectoryData from './__fixtures__/directoryData';

import "./CollectionDirectory.scss";

class CategoryDirectory extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      sections: [
        ...initialDirectoryData
      ]
    }
  }

  render() {
    return <div className="collection-directory-menu">
      {
        this.state.sections.map(({id, ...sectionProps}) => {
          return <MenuItem key={id} {...sectionProps} />
        })
      }
    </div>;
  }
}

export default CategoryDirectory;
