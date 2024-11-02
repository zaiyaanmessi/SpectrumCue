import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Signs from "./components/Signs";
import Causes from "./components/Causes";
import Statistics from "./components/Statistics";
import Autism from "./components/Autism";
import Findout from "./components/Findout";
import ResultPage from "./components/ResultPage";

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/signs" element={<Signs />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/autism" element={<Autism />} />
          <Route path="/findout" element={<Findout />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>

        <footer className="bg-secondary text-muted text-center py-8">
          <ul className="list-none p-0 flex justify-center space-x-6">
            <li>
              <Link className="text-muted hover:text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-muted hover:text-white" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-muted hover:text-white" to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
          <p className="text-sm mt-4">&copy; All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
