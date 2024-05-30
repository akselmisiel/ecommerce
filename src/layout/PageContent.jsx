import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";

const PageContent = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
};

export default PageContent;
