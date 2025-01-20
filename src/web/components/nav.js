import { Link, Route, Routes } from "react-router-dom";
import Home from "./scrins/home.js";
import About from "./scrins/about.js";
import Gallery from "./scrins/gallery.js";
import Contect from "./scrins/contect.js";
import {useTranslation} from "react-i18next"
import i18n from "../../i18n.js";
export default function Nav() {

  const he=()=>{
    i18n.changeLanguage('he');
  }
  const en=()=>{
    i18n.changeLanguage('en');
  }    
  const{t}=useTranslation();
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
                <Link className="nav-link" to="/Home">{t('home.Link')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">{t('about.Link')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Gallery">{t('gallery.Link')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contect">{t('contact.Link')}</Link>
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
      <div class="btn-group">
    <button class="btn btn-primary" onClick={en}>english</button>
    <button class="btn btn-primary" onClick={he}>עברית</button>
    </div>
    </>
  );
}
