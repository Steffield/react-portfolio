import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
//pages
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Portfolio from "./pages/Portfolio/index";
import Contact from "./pages/Contact/index";
import Certification from "./pages/Certification/index";
//style
import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Route exact path="/" component={Home} />
        {/* <Home /> */}
        <Route exact path="/about" component={About} />
        {/* <About /> */}
        <Route exact path="/certifications" component={Certification} />
        {/* <Certifications /> */}
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Portfolio /> */}

        <Route exact path="/contact" component={Contact} />
        {/* <Contact /> */}

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
