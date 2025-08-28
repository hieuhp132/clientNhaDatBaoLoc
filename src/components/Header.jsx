import { BorderBottom } from "@mui/icons-material";
import titleIcon from "../assets/sdaassd-1264.png";
import SearchIcon from '@mui/icons-material/Search';

const roundedBorder = {
    borderRadius: "25px",
    border: "2px solid #73AD21",
    padding: "10px 20px",
    width: "100%",
    height: "auto",
    boxSizing: "border-box"
   
}

const roundedBorderWithColoredBackground = {
    borderRadius: "25px",
    background: "#023B11",
    padding: "10px 20px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px"
}
const headerElements = {
    position: "sticky",
    top: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: "999",
    background: "white",
    borderBottom: "3px solid lightgray"
}

const titleIconsStyled = {
    width: "150px",
    height: "auto"
}

const linksElements = {
    display: "flex",
    gap: "25px",
    fontFamily: "Arial, Helveticam sans-serif",
    fontWeight: "bold",
    fontSize: "20px"
}


const rightSection = {
    display: "flex",
    alignItems: "center",
    gap: "15px"
}

const lupeStyled = {
    fontSize: "28px",
    cursor: "pointer"
}

function Header({selectedPage, setSelectedPage}) {
    
    return (
    <>
       <div style={headerElements}>

            <img src={titleIcon} alt="Title Icons" style={titleIconsStyled}/>
            <nav style={linksElements}>
                <div style={{colorBackground: selectedPage==="home"?"#023B11": "black", cursor:"pointer"}} onClick={()=>setSelectedPage("home")}>TRANG CHỦ</div>     
                <div style={{color: selectedPage==="about"?"#023B11": "black", cursor:"pointer"}} onClick={()=>setSelectedPage("about")}>GIỚI THIỆU</div>
                <div style={{color: selectedPage==="projects"?"#023B11": "black", cursor:"pointer"}} onClick={()=>setSelectedPage("projects")}>DỰ ÁN</div>
                <div style={{color: selectedPage==="news"?"#023B11": "black", cursor:"pointer"}} onClick={()=>setSelectedPage("news")}>TIN TỨC</div>
                <div style={{color: selectedPage==="sales"?"#023B11": "black", cursor:"pointer"}} onClick={()=>setSelectedPage("sales")}>MUA BÁN ĐẤT</div> 
                <div style={{color: selectedPage==="contact"?"#023B11": "black", cursor:"pointer"}} onClick={()=>setSelectedPage("contact")}>LIÊN HỆ</div>
            </nav>
            <div style={rightSection}>
                <div style={{...roundedBorderWithColoredBackground, cursor:"pointer"}} onClick={()=>setSelectedPage("dangnhaphoacdangky")}>ĐĂNG TIN MUA BÁN ĐẤT</div>
                <SearchIcon style={lupeStyled}/>
           </div>
        </div> 
    </>
    );
}

export default Header;
