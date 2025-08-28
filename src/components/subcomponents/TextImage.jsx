import { useEffect, useState, useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

import bds1 from "../../assets/bds1.jpeg";
import bds2 from "../../assets/bds2.jpeg";
import bds3 from "../../assets/bds3.jpeg";
import bds4 from "../../assets/bds4.jpeg";
import bds5 from "../../assets/bds5.png";
import bds6 from "../../assets/bds5.png";


import ggmap from "../../assets/ggmap.jpeg";
import datbaoloc from "../../assets/datbaoloc.png";

import { motion, useInView} from "framer-motion";
import secondImg from "../../assets/bng1.jpeg"; // giữ nguyên đường dẫn ảnh của anh

// style cũ của anh
const third = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "stretch",
    width:"100%"
};

const secondImagesStyled = {
  width: "50%",
  objectFit: "cover",
};

const twoLastDivOnLeftThird = {
  display: "flex",
  gap: "15px",
  marginTop: "20px",
};

const firstAtTwoLastOnLeft = {
  padding: "10px 20px",
  border: "1px solid white",
  borderRadius: "5px",
  cursor: "pointer",
};

const secondAtTwoLastOnLeft = {
  padding: "10px 20px",
  border: "1px solid gray",
  borderRadius: "5px",
  cursor: "pointer",
};

export function LeftTextRightImage() {
  const [hoverFirst, setHoverFirst] = useState(false);
  const [hoverSecond, setHoverSecond] = useState(false);
  // Ref cho text và image
  const textRef = useRef(null);
  const imgRef = useRef(null);

  // Kiểm tra scroll
  const textInView = useInView(textRef, { once: true });
  const imgInView = useInView(imgRef, { once: true });
  return (
    <div style={third}>
      {/* Left Text */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={ textInView? {opacity: 1, y: 0} :{}}
        transition={{ duration: 0.8 }}
        style={{
          background: "#023B11",
          color: "white",
          padding: "150px 50px",
          flex: 1,
            height:"auto",
        }}
      >
        datnenbaoloc.vn <br />
        <div style={{ height: "15px" }}></div>
        <span>
          <b>Datnenbaoloc.vn</b> là nền tảng chuyên biệt cung cấp thông tin,
          sản phẩm và dịch vụ liên quan đến <b>đất nền tại Bảo Lộc</b>, Lâm Đồng
          - một trong những thị trường bất động sản đang phát triển năng động và
          bền vững nhất khu vực Tây Nguyên.
        </span>
        <div style={{ height: "25px" }}></div>
        <span>
          Chúng tôi ra đời với mong muốn <b>kết nối người mua nhà, và cư dân
          tương lai</b> đến gần hơn với những mảnh đất giá trị - không chỉ là cơ
          hội tài chính, mà còn là nơi bắt đầu một cuộc sống an lành, gần gũi
          với thiên nhiên và nhiều tiềm năng tăng trưởng trong tương lai
        </span>
        <div style={{ height: "5px" }}></div>
        <div style={twoLastDivOnLeftThird}>
          <div
            style={{
              ...firstAtTwoLastOnLeft,
              background: !hoverFirst ? "#023B11" : "white",
              color: !hoverFirst ? "white" : "black",
            }}
            onMouseEnter={() => setHoverFirst(true)}
            onMouseLeave={() => setHoverFirst(false)}
          >
            THÊM THÔNG TIN
          </div>
          <div
            style={{
              ...secondAtTwoLastOnLeft,
              background: !hoverSecond ? "white" : "gray",
              color: "black",
            }}
            onMouseEnter={() => setHoverSecond(true)}
            onMouseLeave={() => setHoverSecond(false)}
          >
            XEM DỰ ÁN
          </div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.img
        ref={imgRef}
        src={secondImg}
        alt="Du an"
        style={secondImagesStyled}
        initial={{ opacity: 0, y: 50 }}
        animate={ imgInView? {opacity: 1, y: 0}:{}}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </div>
  );
}


const renderDesc = (title, text) => ({ title, text });
const descList = [
    renderDesc("Xây dựng", "Chúng tôi phát triển dự án hướng tới không gian sống trong lành, hài hòa thiên nhiên , kết hợp giá trị đầu tư và sống. Tập trung quỹ đất chiến lược, tiềm năng, với hạ tầng, cảnh quan, pháp lý rõ ràng, an cư lâu dài"),
    renderDesc("Kết Nối Và Phân Phối Giá Trị Thật", "Datnenbaoloc.vn là cầu nối giữa nhu cầu và sản phẩm thật, giúp khách hàng tiếp cận bất động sản tiềm năng tăng giá ổn định. Mọi sản phẩm đều được kiểm duyệt kỹ lưỡng về pháp lý, quy hoạch, đảm bảo an tâm tối đa"),
    renderDesc("Dịch Vụ Môi Giới & Đồng Hành Bền Vững", "Chúng tôi đồng hành cùng khách hàng trên hành trình đầu tư thông minh, cung cấp dịch vụ môi giới chuyên sâu. Cam kết tiết kiệm thời gian, tối ưu chi phí, tăng hiệu quả đầu tư, xây dựng mối quan hệ Win-Win bền vững.")
  ];


const five = { display: "flex" };
const imagesStyled = { height: "100%", width: "100%", objectFit: "cover" };
const container1 = { position: "relative", flex: "1", overflow: "hidden", gap: "20px" };
const bottomLeft = { position: "absolute", bottom: "0", left: "0", width: "100%", padding: "15px", color: "white", fontWeight: "bold", fontSize: "16px", };
const centered = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontWeight: "bold", fontSize: "18px", textAlign: "center", };
export function TextBottomLeftWithImageAsBackGroundAndHoverAnimation() {

  const [maxHeight, setMaxHeight] = useState(800);
   
  useEffect(() => {
    let maxH = 0;
    descList.forEach((desc) => {
      const hiddenDiv = document.createElement("div");
      hiddenDiv.style.cssText = `
        position:absolute;
        visibility:hidden;
        width:90%;
        padding:10px;
        font-weight:bold;
        font-size:18px;
        line-height:1.4;
      `;
      hiddenDiv.innerHTML = `<h2>${desc.title}</h2><span>${desc.text}</span>`;
      document.body.appendChild(hiddenDiv);
      const h = hiddenDiv.scrollHeight + 120;
      document.body.removeChild(hiddenDiv);
      if (h > maxH) maxH = h;
    });
    if (maxH > 0) {
      setMaxHeight(Math.round(maxH * 2.5)); // tăng 50% để thoáng
    }
  }, []);


  return (
    <div style={five}>
      <FadedInImagesBoxWithHoverAnimation src={bds1} text="Phát Triển Dự Án Bất Động Sản Sinh Thái" desc={descList[0]} maxHeight={maxHeight} delay={0} />
      <FadedInImagesBoxWithHoverAnimation src={bds2} text="Kết Nối Và Phân Phối Giá Trị Thật" desc={descList[1]} maxHeight={maxHeight} delay={0.3} />
      <FadedInImagesBoxWithHoverAnimation src={bds3} text="Dịch Vụ Môi Giới & Đồng Hành Bền Vững" desc={descList[2]} maxHeight={maxHeight} delay={0.6} />
    </div>
  );
}



function ImagesBox({ src, text, desc, maxHeight }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...container1,
        height: `${maxHeight}px`,
        overflow: "hidden"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={src}
        alt={text}
        style={{
          ...imagesStyled,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: hover ? "rgba(0,0,0,0.5)" : "transparent",
          transition: "background 0.4s ease"
        }}
      />
      <div
        style={{
          ...(hover ? centered : bottomLeft),
          maxWidth: "90%",
          textAlign: "center",
          padding: "10px",
          whiteSpace: "pre-line"
        }}
      >
        {!hover ? text : (
          <div>
            <h2 style={{ color: "#023B11" }}>{desc.title}</h2>
            <span style={{ color: "white" }}>{desc.text}</span>
          </div>
        )}
      </div>
    </div>
  );
}
function FadedInImagesBoxWithHoverAnimation({ src, text, desc, maxHeight, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // chỉ chạy một lần khi scroll vào

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <ImagesBox src={src} text={text} desc={desc} maxHeight={maxHeight} />
    </motion.div>
  );
}


const lastElements = {
    flex:"1 1 300px",
    minWidth:"26px",
    maxWidth:"400px",
    boxSizing: "border-box"
}
const last = {
    backgroundImage: `url(${ggmap})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px", width:"100%",
    display: "flex", flexWrap:"wrap",
    justifyContent: "center", padding: "50px 20px", margin: "0 auto", gap: "20px"
}

const line = { borderRadius: "25px", background: "gray", width: "400px", height: "2px", gap: "20px" };


export function LeftTextMiddleMapRightForm() {
    const [formData, setFormData] = useState({
        fullname: "",
        phone: "",
    });
    const [errors, setErrors] = useState({});

    // cập nhật input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // kiểm tra dữ liệu
    const validate = () => {
        let newErrors = {};

        if (!formData.fullname.trim()) {
            newErrors.fullname = "Vui lòng nhập họ và tên";
        }

        const phoneRegex = /^(0|\+84)([0-9]{8,10})$/;
        if (!formData.phone.trim()) {
            newErrors.phone = "Vui lòng nhập số điện thoại";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Số điện thoại không hợp lệ (VD: 0912345678 hoặc +84912345678)";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // xử lý submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return; // nếu lỗi thì không gửi

        console.log("Dữ liệu form:", formData);
        alert("Thông tin của bạn đã được gửi!");
        setFormData({ fullname: "", phone: "" }); // reset form
        setErrors({});
    };

    return (
        <div style={last}> 
            {/* Cột 1: Thông tin liên hệ */}
            <div style={lastElements}>
                <b>THÔNG TIN LIÊN HỆ</b>
                <div style={{...line, width:"40px", height:"5px", marginTop:"10px"}}></div>

<div style={{ display: "flex", alignItems: "center", marginTop: "30px", fontSize: "20px", marginBottom: "10px" }}>
    <FaMapMarkerAlt style={{marginBottom:"20px", marginRight: "10px", color: "#023B11", fontSize:"25px"}} />
    Trụ sở chính: The Global City, Đỗ Xuân Hợp, An Phú, Quận 2, Hồ Chí Minh
</div>

<div style={{ display: "flex", alignItems: "center", margin: "10px 0", fontSize: "20px" }}>
    <FaPhoneAlt style={{ marginRight: "10px", color: "#023B11" }} />
    Điện thoại: <span style={{ color: "#023B11", marginLeft: "5px" }}>0922909239</span>
</div>

<div style={{ display: "flex", alignItems: "center", margin: "10px 0", fontSize: "20px" }}>
    <FaEnvelope style={{ marginRight: "10px", color: "#023B11" }} />
    Email: <span style={{ color: "#023B11", marginLeft: "5px" }}>contact@datnenbaoloc.vn</span>
</div>

<div style={{ display: "flex", alignItems: "center", margin: "10px 0", fontSize: "20px" }}>
    <FaGlobe style={{ marginRight: "10px", color: "#023B11" }} />
Website: <a href="https://www.datnenbaoloc.vn" style={{ color: "#023B11", marginLeft: "5px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer">www.datnenbaoloc.vn</a>
</div>

            </div>
{/* Cột 2: Maps */}
<div style={lastElements}>
    <b>ĐỊA CHỈ MAPS</b>
    <div style={{...line, width:"40px", height:"5px", marginTop:"10px"}}></div>
    
    <div style={{
        height: "70%",
        width: "100%",
        marginTop: "30px",
        borderRadius: "10px",
        overflow: "hidden"
    }}>
        <iframe
            title="The Global City Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.632077606428!2d106.775505075891!3d10.8020448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a82f100000001%3A0x4b1ec32547a13f0!2sThe%20Global%20City!5e0!3m2!1svi!2s!4v1693222201830!5m2!1svi!2s"

            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>

    <p style={{
        marginTop: "10px",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#000"
    }}>
        The Global City, Đỗ Xuân Hợp, An Phú, Quận 2, Hồ Chí Minh
    </p>
</div>


            {/* Cột 3: Form nhận tư vấn */}
            <div style={lastElements}>
                <b>NHẬN TƯ VẤN</b>
                <div style={{...line, width:"40px", height:"5px", marginTop:"10px"}}></div>

                <form onSubmit={handleSubmit} style={{marginTop:"30px", display:"flex", flexDirection:"column"}}>
                    <label style={{marginBottom:"5px", fontWeight:"bold"}} htmlFor="fullname">Họ và tên:</label>
                    <input 
                        id="fullname" 
                        name="fullname"
                        type="text" 
                        value={formData.fullname}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    {errors.fullname && <span style={errorStyle}>{errors.fullname}</span>}

                    <label style={{marginBottom:"5px", fontWeight:"bold"}} htmlFor="phone">Số điện thoại:</label>
                    <input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        value={formData.phone}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    {errors.phone && <span style={errorStyle}>{errors.phone}</span>}

                    <button type="submit" style={buttonStyle}>
                        Nhận tư vấn
                    </button>
                </form>
            </div>
        </div>    
    )
}

/* Style tái sử dụng */
const inputStyle = {
    width:"100%",
    maxWidth:"100%",
    height:"35px", 
    backgroundColor:"white", 
    border:"2px solid gray", 
    borderRadius:"6px", 
    marginBottom:"10px", 
    padding:"5px 10px",
    boxSizing: "border-box"
};

const buttonStyle = {
    borderRadius:"25px", 
    marginTop:"15px", 
    backgroundColor:"blue", 
    color:"white", 
    width:"160px", 
    height:"40px", 
    border:"none",
    fontWeight:"600",
    cursor:"pointer"
};

const errorStyle = {
    color: "red",
    fontSize: "13px",
    marginBottom: "10px"
};

function FadedCard({ src, title, description, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // chỉ chạy 1 lần khi scroll vào

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        width: "100%",
        maxWidth: "300px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1), 0 6px 20px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={src}
        style={{
          height: "auto",
          width: "100%",
          borderTopLeftRadius: "25px",
          borderTopRightRadius: "25px",
        }}
      />
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <h2>{title}</h2>
        <div style={line}></div>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

export function ImageCardWithDescriptionBottom() {
  const cards = Array(30).fill({
    src: datbaoloc,
    title: "Dự án đất nền Bảo Lộc - Top các dự án tiềm năng nhất Bảo Lộc",
    description: "Giới thiệu tổng quan về thị trường bất động sản [...]",
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        justifyItems: "center",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "30px",
      }}
    >
      {cards.map((card, i) => (
        <FadedCard
          key={i}
          src={card.src}
          title={card.title}
          description={card.description}
          delay={i * 0.2} // stagger animation
        />
      ))}
    </div>
  );
}

const sixth = {display: "grid", gridTemplateColumns: "repeat(3, 1fr)", padding:"10px"};
const sixElements = {padding: "20px", textAlign:"center", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",marginBottom: "125px"};
const imgContainer = {textAlign: "center", padding: "25px 20px"};
const img456styled = {height: "100%", width:"100%", objectFit: "cover"};


export function ImageCardWithDescriptionBottomWithShadow() {

      return (
        <>
            <div style={sixth}>
                <div style={sixElements}>
                <img src={bds4} alt="Anh 4" style={img456styled}/>
                <div style={imgContainer}>
                    <h2 style={{color:"#023B11"}}>AGAR RETREAT ĐỨC LỘC</h2>
                    <p>Đất nền nghỉ dưỡng</p>
                </div>
            </div>
            <div style={sixElements}>
                <img src={bds5} alt="Anh 5" style={img456styled}/>
                <div style={imgContainer}>
                    <h2 style={{color:"#023B11"}}>Green Valley Retreat</h2>
                    <p>Đất nền Bảo Lộc</p>
                </div>
            </div>
            <div style={sixElements}>
                <img src={bds6} alt="Anh 6" style={img456styled}/>
                <div style={imgContainer}>
                    <h2 style={{color:"#023B11"}}>Zen Valley Estate</h2>
                    <p>Đất nền Bảo Lộc</p>
                </div>
            </div>
            <div style={sixElements}>
                <img src={bds4} alt="Anh 7" style={img456styled}/>
                <div style={imgContainer}>
                    <h2 style={{color:"#023B11"}}>The Green Aura</h2>
                    <p>Đất nền Bảo Lộc</p>
                </div>
            </div>
        </div>
    </>);     
}
