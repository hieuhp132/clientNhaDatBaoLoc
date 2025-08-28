import './App.css';
import Header from "./components/Header.jsx";
import TrangChu from "./components/pages/TrangChu.jsx"
import GioiThieu from "./components/pages/GioiThieu.jsx"
import DuAn from "./components/pages/DuAn.jsx"
import TinTuc from "./components/pages/TinTuc.jsx"
import MuaBanDat from "./components/pages/MuaBanDat.jsx"
import LienHe from "./components/pages/LienHe.jsx"

import Footer from "./components/Footer.jsx";
import { useState } from 'react';
import { DangNhapHoacDangKy } from './components/pages/DangNhap.jsx';
import { FormDangNhapHoacDangKy } from './components/pages/FormDangNhapHoacDangKy.jsx';

function App() {

  const [selectedPage, setSelectedPage] = useState("home");
 
  const handleNavClick = (key) => {
       setSelectedPage(key); 
  }

  return (
    <>
        <Header selectedPage={selectedPage} setSelectedPage={handleNavClick}/>
        {selectedPage === "home" && <TrangChu />}
        {selectedPage === "about" && <GioiThieu />}
        {selectedPage === "projects" && <DuAn />}
        {selectedPage === "news" && <TinTuc />}
        {selectedPage === "sales" && <MuaBanDat />}
        {selectedPage === "contact" && <LienHe />}
        {selectedPage === "dangnhaphoacdangky" && <DangNhapHoacDangKy selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>}        
        {selectedPage === "formdangnhaphoacdangky" && <FormDangNhapHoacDangKy />} 
        <Footer />
    </>
  )
}

export default App
