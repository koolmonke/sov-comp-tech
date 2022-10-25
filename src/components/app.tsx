import { h } from "preact";
import { Route, Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import SlideShowPage from "../routes/labs/slideshow";
import Calculator from "../routes/labs/calculator";
import Test from "../routes/labs/test";
import Store from "../routes/labs/store";
import Square from "../routes/labs/square";
import Carousel from "../routes/labs/carousel";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/lab/slideshow" component={SlideShowPage} />
        <Route path="/lab/calc" component={Calculator} />
        <Route path="/lab/test" component={Test} />
        <Route path="/lab/cart" component={Store} />
        <Route path="/lab/square" component={Square} />
        <Route path="/lab/carousel" component={Carousel} />
      </Router>
    </div>
  );
};

export default App;
