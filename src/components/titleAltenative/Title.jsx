import { useState } from "react"

export function GreenTextCenteredTitle({name}) {
    
    return (
        <h1 style={{
            color: "#025C19",
            textAlign: "center"
        }}>{name}</h1>
        
    )
}

const first = {
    display: "grid",
    gridTemplateColumns: "25% 2% 73%",
    height:"200px"
}
export function LeftSectionRightContent() {
    const [selectedTask, setSelectedTask] = useState("first");

    return (
        <>
            <div style={{marginTop: "40px", marginLeft:"50px", fontSize:"35px", fontWeight: "bold", color:"#023B11"}}>Đất nền bảo lộc</div>
            <div style={first}> 
                <div style={{backgroundColor:"white"}}>
                    <div style={{display:"flex", alignItems:"center", marginTop: "20px", paddingLeft:"20px", marginLeft:"70px", cursor: "pointer",
                                fontSize:"20px", height:"10%", backgroundColor:selectedTask==="first"?"#023B11":"white", borderRadius:"25px", color:selectedTask==="first"?"white":"grey"}}
                        onMouseEnter={() => setSelectedTask("first")}
                    >
                        Tầm nhìn và sứ mệnh
                    </div>
                    <div style={{display:"flex", alignItems:"center", paddingLeft:"20px", marginLeft:"70px", cursor:"pointer",
                                fontSize:"20px", height:"10%", backgroundColor:selectedTask==="second"?"#023B11":"white", borderRadius:"25px", color:selectedTask==="second"?"white":"grey"}}
                        onMouseEnter={() => setSelectedTask("second")}
                    >    
                        Giá trị cốt lõi
                    </div> 
                </div>
                <div style={{marginTop:"20px", height:"200px",width:"0px",backgroundColor:"gray"}}></div>
                
                { selectedTask==="first" &&
                    <>
                        <div style={{backgroundColor:"white", color:"white"}}>
                        <div style={{color:"black"}}><b>Datnenbaoloc.vn</b> hướng tới việc trở thành <b>nguồn thông tin tin cậy và giải pháp đầu tư toàn diện</b> trong lĩnh vực đất nền Bảo Lộc. Chúng tôi tin rằng, mỗi mảnh đất tại vùng đất cao nguyên này không chỉ là một tài sản, mà còn là <b>nền móng cho một cuộc sống mới - xanh hơn, chất lượng hơn và bền vững hơn</b></div>
                        <div style={{color:"black"}}>Với sứ mệnh <b>kiến tạo môi trường sống lý tưởng cho nhiều thế hệ</b>, nền tảng này cam kết cung cấp những sản phẩm bất động sản:</div>

                        <ul style={{color:"black"}}>
                            <li>Có pháp lý rõ ràng, quy hoạch minh bạch</li>
                            <li>Nằm tại các khu vực tiềm năng như gần cao tốc, hồ sinh thái, trung tâm hành chính</li>
                            <li>Gắn liền với không gian sống hài hòa giữa thiên nhiên và hạ tầng hiện đại</li>
                        </ul>
                        </div>
                    </>}

                { selectedTask==="second" && 
                    <div>
                        <ul>
                            <li><b>Minh bạch & Uy tín</b>: Thông tin dự án, pháp lý và tiến độ luôn được cập nhật chính xác, trung thực.</li>
                            <li><b>Tư duy dài hạn</b>: Tập trung vào các khu vực có tiềm năng phát triển đô thị và tăng trưởng giá trị ổn định</li>
                            <li><b>Đồng hành tận tâm</b>: Hỗ trợ khách hàng trong toàn bộ quá trình mua bán, từ tư vấn pháp lý đến thủ tục giao dịch.</li>
                        </ul>
                        <div><b>Cam kết chất lượng</b>: Chỉ giới thiệu những sản phẩm đạt tiêu chuẩn, phù hợp với định hướng đầu tư bền vững và an cư lâu dài.</div>
                    </div>}        

            </div>
        </>
    )     
}

export function SectionTitle() {
  return (
    <div style={{ position: "relative", textAlign: "center", margin: "40px 0" }}>
      {/* Chữ outline to phía sau */}
      <h1
        style={{
          fontSize: "80px",
          fontWeight: "900",
          color: "transparent",
          WebkitTextStroke: "1px green",
          opacity: 0.3,
          margin: 0
        }}
      >
        LĨNH VỰC HOẠT ĐỘNG
      </h1>

      {/* Chữ đặc nhỏ hơn phía trước */}
      <h2
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "32px",
          fontWeight: "900",
          color: "green",
          margin: 0,
          background: "white", // giữ chữ rõ khi đè line
          padding: "0 10px"
        }}
      >
        LĨNH VỰC HOẠT ĐỘNG
      </h2>

      {/* Đường kẻ ngang */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          width: "100%",
          height: "2px",
          backgroundColor: "rgba(0,128,0,0.4)", // xanh nhạt
          zIndex: -1
        }}
      />
    </div>
  );
}


