import firstImg from "../../assets/bngroup.jpeg";
import datbaoloc from "../../assets/datbaoloc.png";

import { GetDataFromDataBaseAndDisplayAsTable } from "../subcomponents/DataAndDataBase";
import { ImageCardWithDescriptionBottomWithShadow, LeftTextRightImage, TextBottomLeftWithImageAsBackGroundAndHoverAnimation } from "../subcomponents/TextImage";

const container = { maxWidth: "2400px", margin: "0 auto" };
const firstImgStyled = { height: "500px", width: "100%", objectFit: "cover"};
const second = { display: "flex", justifyContent: "center", alignItems: "center", color: "#023B11", gap: "20px", padding: "25px 0px" };
const line = { borderRadius: "25px", background: "gray", width: "400px", height: "2px", gap: "20px" };
const hello = { fontFamily: "'Josefin Sans', sans-serif", fontWeight: "700" };
const fouth = second;

export default function TrangChu() {


  return (
    <main style={container}>
      <img src={firstImg} style={firstImgStyled} />

      <div style={second}>
        <div style={line}></div>
        <span style={hello}>GIỚI THIỆU </span>
        <div style={line}></div>
      </div>

        <LeftTextRightImage />

      <div style={fouth}>
        <div style={line}></div>
        <span style={hello}>LĨNH VỰC HOẠT ĐỘNG</span>
        <div style={line}></div>
      </div>

        <TextBottomLeftWithImageAsBackGroundAndHoverAnimation />
      
      <div style={fouth}>
        <div style={line}></div>
        <span style={hello}>DỰ ÁN NỔI BẬT</span>
        <div style={line}></div>
      </div>

     
            <ImageCardWithDescriptionBottomWithShadow />   
            <GetDataFromDataBaseAndDisplayAsTable />

    <div style={eight}>
        <h1 style={{
            color: "white",
            textAlign: "center",
            paddingTop: "70px",
            paddingLeft: "30px", paddingRight: "30px",
        }}>ĐẦU TƯ & HỢP TÁC</h1>
        <p style={{
            color: "white",
            display: "flex", justifyContent: "center", alignItems: "center",
            textAlign: "center",
            paddingBottom:"100px", paddingTop: "30px",
            paddingLeft:"50px", paddingRight: "50px",
            width: "auto",
            height: "auto"
        }}>Chúng tôi tin rằng sự thành công của Bắc Nam Group chỉ có thể đạt được khi đồng hành cùng khách hàng, đối tác và cộng đồng. Do đó, chúng tôi luôn chú trọng xây dựng mối quan hệ bền vững, minh bạch, và cùng phát triển. Mỗi dự án đều được thực hiện với tinh thần trách nghiệm cao, hướng đến lợi ích lâu dài cho tất cả các bên liên quan</p>
    </div>

    <div style={nine}>
                {Array(8).fill(0).map((_, i) => (
                    <div style={{
                        marginBottom:"20px", padding: "10px",
                        overflow: "hidden", width: "100%", maxWidth: "300px", boxShadow: "0 4px 8px rgba(0,0,0,0.1), 0 6px 20px rgba(0,0,0,0.08)",
                    }}>
                        <img src={datbaoloc} style={{
                            height:"auto",
                            width:"100%",
                        }}/>
                    </div>                
                ))}
     
    </div>

    </main>
  );
}

const nine = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", margin: "0 auto", padding: "0 20px",
    maxWidth: "1280px", gap:"20px"
}
const eight = {
    backgroundColor: "#023B11",
    height: "300px"
}



