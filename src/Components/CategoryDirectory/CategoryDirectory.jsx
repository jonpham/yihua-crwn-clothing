import React from "react";
import MenuItem from '../MenuItem';

import initialDirectoryData from './__fixtures__/directoryData';

import "./CategoryDirectory.scss";

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
    return <div className="category-directory-menu">
      {
        this.state.sections.map(({id, ...sectionProps}) => {
          return <MenuItem key={id} {...sectionProps} />
        })
      }
    </div>;
  }
}

export default CategoryDirectory;
