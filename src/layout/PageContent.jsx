import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../App";

const PageContent = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  );
};

export default PageContent;
