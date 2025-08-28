import { useState } from "react";

export function DangNhapHoacDangKy({selectedPage, setSelectedPage}) {
  const [active, setActive] = useState("login");

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 59, 17, 0.1)", // nền xanh mờ
        borderRadius: "12px",
        margin: "20px auto",
        padding: "20px",
        width: "500px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div style={{textAlign:"center"}}>Bạn cần đăng nhập để đăng tin hoặc quản lý tin đăng của mình</div>
      {/* Nút Đăng nhập */}
      <div
        onClick={() => setSelectedPage("formdangnhaphoacdangky")}
        style={{
          textAlign: "center",
          padding: "14px 0",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          backgroundColor: "#023B11",
          color: "white",
          border: "1px solid #023B11",
          transition: "all 0.3s ease",
        
        }}
      >
        Đăng nhập
      </div>

      {/* Nút Đăng ký */}
      <div
        onClick={() => setSelectedPage("formdangnhaphoacdangky")}
        style={{
          textAlign: "center",
          padding: "14px 0",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          backgroundColor: "white",
          color: "#023B11",
          border: "1px solid #023B11",
          transition: "all 0.3s ease",
        }}
      >
        Đăng ký
      </div>
    </div>
  );
}

