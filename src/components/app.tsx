import { h } from "preact";
import { Route, Router } from "preact-router";
import { createHashHistory } from "history";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Lab1 from "../routes/labs/lab1";

const App = () => {
  const history: any = createHashHistory();
  return (
    <div id="app">
      <Header />
      <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="/lab/1" component={Lab1} />
      </Router>
    </div>
  );
};

export default App;
