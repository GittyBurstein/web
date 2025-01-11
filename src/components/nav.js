import { Link, Route, Routes } from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import Home from "./scrins/home";
import About from "./scrins/about";
import Gallery from "./scrins/gallery";
import Contect from "./scrins/contect";

 export default function Nav(){
    return(
        <>
        <BrowserRouter>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>|
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>|
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Gallery">Gallery</Link>|
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contect">Contect</Link>|
        </li>

      </ul>
    </div>
  </div>
</nav>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Contect" element={<Contect />} />
  <Route path="/Gallery" element={<Gallery />} />
</Routes>
</BrowserRouter>
        </>

    );
 }