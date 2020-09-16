import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";

import ReactGA from "react-ga";

import { createBrowserHistory } from "history";

function initializeReactGA() {
  ReactGA.initialize("", {
    gaOptions: {
      cookieDomain: "auto",
    },
  });

  ReactGA.pageview(window.location.pathname + window.location.search);
}
const history = createBrowserHistory();

history.listen((location) => {
  console.log("changed to " + location.pathname);
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {
  initializeReactGA();

  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
