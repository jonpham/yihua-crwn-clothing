import React, { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item";

import { selectDirectorySections } from "../../redux/directory/directorySelectors";

import "./CollectionDirectory.scss";

const CollectionDirectory = ({ sections = [] }) => (
  <div className="collection-directory-menu">
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(memo(CollectionDirectory));
