import React from "react";

import { HomepageContainer } from "./Homepage.styles";
import CollectionDirectory from "../../components/collection-directory";

// import "./Homepage.scss";

const Homepage = () => {
  return (
    <HomepageContainer>
      <CollectionDirectory />
    </HomepageContainer>
  );
};

export default Homepage;
