import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Container, Navbar, NavbarBrand } from 'reactstrap';
//import NucampLogo from './app/assets/img/logo.png';
//import CampsitesList from "/Users/nanitosse/Desktop/bootcamp/nucampsite/src/features/campsites/CampsitesList.js"
//import { CAMPSITES } from './app/shared/CAMPSITES';
//import CampsitesList from '';
import Header from "./components/Header";
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';





function App() {
  return (
    <div className="App">
      hello

      <Header />
      <CampsitesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
