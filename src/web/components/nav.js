import { Link, Route, Routes } from "react-router-dom";
import Home from "./scrins/home.js";
import About from "./scrins/about.js";
import Gallery from "./scrins/gallery.js";
import Contect from "./scrins/contect.js";
export default function Nav() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">My Website</Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contect">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ה-Routes בNav - זה מציג את התוכן לכל דף */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}
