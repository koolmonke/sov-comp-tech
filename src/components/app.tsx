import { h } from "preact";
import { Route, Router } from "preact-router";
import { createHashHistory } from "history";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import SlideShowPage from "../routes/labs/slideshow";
import Calculator from "../routes/labs/calculator";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const history: any = createHashHistory();
  return (
    <div id="app">
      <Header />
      <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="/lab/slideshow" component={SlideShowPage} />
        <Route path="/lab/calc" component={Calculator} />
      </Router>
    </div>
  );
};

export default App;
