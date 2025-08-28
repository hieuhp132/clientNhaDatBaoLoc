import { LeftTextMiddleMapRightForm } from "./subcomponents/TextImage"

const footerElements = {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    backgroundColor: "#023B11"
}

const centeredText = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const first = {
    ...centeredText
}

const second = {
    ...centeredText
}

const firstleft = {
    color: "white",
    padding: "10px 5px"
}

const secondleft = {
    color: "white",
    fontWeight: "bold",
    padding: "10px 5px"
}

const regisIcon = {
    width: "10px",
    height: "1px",
    paddingBottom: "15px",
    paddingRight: "4px",
    color: "gray"
}

const firstRight = {
    color: "white"    
}

function Footer() {

    return (
        <>
        <LeftTextMiddleMapRightForm />
        <div style={footerElements}>
            <div style={first}>
                <span style={firstleft}>Copyright 2025</span> &copy; <span style={secondleft}>BacNamGroup</span>
            </div>
            <div style={second}>
                <span style={regisIcon}>&reg;</span>
                <span style={firstRight}>ContentBy <b>VietDao</b></span>
            </div>
        </div>
        </>
    )
}

export default Footer;
