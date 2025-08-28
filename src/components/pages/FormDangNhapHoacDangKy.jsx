import { useState } from "react";

export function FormDangNhapHoacDangKy() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        borderRadius: "8px",
        border: "1px solid #ccc",
        margin: "40px auto",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "40px 20px",
        maxWidth: "900px",
        backgroundColor: "#fff",
      }}
    >
      {/* Form Đăng nhập */}
      <div style={{ flex: 1, padding: "0 20px" }}>
        <h2 style={{ color: "#023B11", fontWeight: "bold", fontSize: "20px" }}>ĐĂNG NHẬP</h2>
        <label style={labelStyle}>Tên tài khoản hoặc địa chỉ email *</label>
        <input type="email" style={inputStyle} />
        <label style={labelStyle}>Mật khẩu *</label>
        <input type="password" style={inputStyle} />
        <div style={{ margin: "10px 0" }}>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" style={{ marginLeft: "8px" }}>Ghi nhớ mật khẩu</label>
        </div>
        <button style={buttonStyle}>ĐĂNG NHẬP</button>
        <p style={{ marginTop: "10px" }}>
          <a href="#" style={{ color: "#0a5", textDecoration: "none" }}>Quên mật khẩu?</a>
        </p>
      </div>

      {/* Divider giữa 2 form */}
      <div
        style={{
          width: "1px",
          height: "400px",
          backgroundColor: "lightgrey",
          margin: "0 20px",
        }}
      />
      {/* Form Đăng ký */}
      <div style={{ flex: 1, padding: "0 20px" }}>
        <h2 style={{ color: "#023B11", fontWeight: "bold", fontSize: "20px" }}>ĐĂNG KÝ</h2>
        <label style={labelStyle}>Địa chỉ email *</label>
        <input type="email" style={inputStyle} />
        <p style={{ fontSize: "14px", margin: "10px 0" }}>
          Một liên kết để đặt mật khẩu mới sẽ được gửi đến địa chỉ email của bạn.
        </p>
        <p style={{ fontSize: "12px", color: "#666" }}>
          Thông tin cá nhân của bạn sẽ được sử dụng để tăng cường trải nghiệm sử dụng website, để quản lý truy cập vào tài khoản của bạn, và cho các mục đích khác như được mô tả trong <a href="#" style={{ color: "#0a5" }}>chính sách riêng tư</a> của chúng tôi.
        </p>
        <button style={buttonStyle}>ĐĂNG KÝ</button>
      </div>
    </div>
  );
}

// Style tái sử dụng
const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px 12px",
  margin: "8px 0 16px 0",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "14px",
  outline: "none",
};

const buttonStyle = {
  padding: "12px 25px",
  borderRadius: "4px",
  border: "none",
  backgroundColor: "#023B11",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  width: "100%",
  transition: "all 0.3s ease",
};

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontWeight: "bold",
  fontSize: "14px",
};

