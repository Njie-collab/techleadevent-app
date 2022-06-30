// import logo from './logo.svg';
import "./App.css";
import Home from "./componnents/Home.js"
import About from "./componnents/About.js"
import Events from "./componnents/Events.js"
import Footer from "./componnents/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./componnents/Nav";

import Cart from "./componnents/Cart"

function App() {
  return (
    <div className="App">
      <Router>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
        </nav> */}
        <Nav />
        <header className="App-header">
          <h1 className="Title">Welcome To Tech Lead Event App</h1>
          <p>
            Currently <code>src/App.js</code> Under Construction.
          </p>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        {/* <SearchContainer /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
