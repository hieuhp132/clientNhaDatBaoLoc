import { useState } from "react";
import datbaoloc from "../../assets/datbaoloc.png";

export function GetDataFromDataBaseAndDisplayAsTable() {
    // Giả lập dữ liệu (30 phần tử)
    const data = Array(30).fill(0).map((_, i) => ({
        id: i + 1,
        title: `Tin đăng số ${i + 1}`,
        img: datbaoloc,
        type: i % 2 === 0 ? "Bán" : "Cho thuê",
        area: i % 3 === 0 ? "Phường B'lao" : (i % 3 === 1 ? "Lộc Nga" : "Phường 2"),
        size: 500 + i,
        price: 700_000_000 + i * 1_000_000, // số để lọc
        date: "07/08/2025",
    }));

    const [filters, setFilters] = useState({
        area: "all",
        type: "all",
        size: "all",
        price: "all",
    });

    const [currentPage, setCurrentPage] = useState(1);

    // Xử lý thay đổi filter
    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
        setCurrentPage(1); // reset về trang 1 khi lọc
    };

    // Áp dụng filter
    const filteredData = data.filter((item) => {
        if (filters.area !== "all" && item.area !== filters.area) return false;
        if (filters.type !== "all" && item.type !== filters.type) return false;

        if (filters.size !== "all") {
            if (filters.size === "50-100" && !(item.size >= 50 && item.size <= 100)) return false;
            if (filters.size === "100-500" && !(item.size > 100 && item.size <= 500)) return false;
            if (filters.size === ">500" && !(item.size > 500)) return false;
        }

        if (filters.price !== "all") {
            if (filters.price === "duoi1" && !(item.price < 1_000_000_000)) return false;
            if (filters.price === "1-2" && !(item.price >= 1_000_000_000 && item.price <= 2_000_000_000)) return false;
            if (filters.price === "tren2" && !(item.price > 2_000_000_000)) return false;
        }

        return true;
    });

    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div style={secondSeventh}>
            <h1 style={{ color: "#023B11", marginBottom: "20px" }}>Tin Đăng Mua Bán Đất</h1>

            {/* Bộ lọc */}
            <div style={filter}>
                <div style={filterGroup}>
                    <h3 style={filterTitle}>Khu vực</h3>
                    <select
                        value={filters.area}
                        onChange={(e) => handleFilterChange("area", e.target.value)}
                        style={selectBox}
                    >
                        <option value="all">Tất cả</option>
                        <option value="Phường B'lao">Phường B'lao</option>
                        <option value="Lộc Nga">Lộc Nga</option>
                        <option value="Phường 2">Phường 2</option>
                    </select>
                </div>
                <div style={filterGroup}>
                    <h3 style={filterTitle}>Loại tin</h3>
                    <select
                        value={filters.type}
                        onChange={(e) => handleFilterChange("type", e.target.value)}
                        style={selectBox}
                    >
                        <option value="all">Tất cả</option>
                        <option value="Bán">Bán</option>
                        <option value="Cho thuê">Cho thuê</option>
                    </select>
                </div>
                <div style={filterGroup}>
                    <h3 style={filterTitle}>Diện tích</h3>
                    <select
                        value={filters.size}
                        onChange={(e) => handleFilterChange("size", e.target.value)}
                        style={selectBox}
                    >
                        <option value="all">Tất cả</option>
                        <option value="50-100">50-100 m²</option>
                        <option value="100-500">100-500 m²</option>
                        <option value=">500">&gt; 500 m²</option>
                    </select>
                </div>
                <div style={filterGroup}>
                    <h3 style={filterTitle}>Giá</h3>
                    <select
                        value={filters.price}
                        onChange={(e) => handleFilterChange("price", e.target.value)}
                        style={selectBox}
                    >
                        <option value="all">Tất cả</option>
                        <option value="duoi1">Dưới 1 tỷ</option>
                        <option value="1-2">1-2 tỷ</option>
                        <option value="tren2">Trên 2 tỷ</option>
                    </select>
                </div>
                <button style={confirmed}>Lọc tin</button>
            </div>

            {/* Hiển thị danh sách */}
            {currentData.map((item) => (
                <ImagesCard
                    key={item.id}
                    imgSrc={item.img}
                    styleBox={flex}
                    title={item.title}
                    type={item.type}
                    area={item.area}
                    size={`${item.size} m²`}
                    price={item.price.toLocaleString("vi-VN")} 
                    date={item.date}
                />
            ))}

            {/* Phân trang */}
            <div style={{ marginTop: "20px", textAlign: "left" }}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        style={{
                            margin: "0 5px",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "1px solid gray",
                            background: currentPage === i + 1 ? "#023B11" : "white",
                            color: currentPage === i + 1 ? "white" : "black",
                            cursor: "pointer",
                        }}
                    >
                        {i + 1}
                    </button>
                ))}
                {currentPage < totalPages && (
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        style={{
                            marginLeft: "10px",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "1px solid gray",
                            background: "white",
                            cursor: "pointer",
                        }}
                    >
                        Trang sau &raquo;
                    </button>
                )}
                <div style={{ height: "20px" }} />
            </div>
        </div>
    );
}

const filter = {    
    backgroundColor: "#EEEEEE",
    minHeight: "60px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 20px",
    boxSizing: "border-box",
    marginBottom: "40px",
    borderRadius: "12px"
};
const filterGroup = {
    display: "flex",
    flexDirection: "column",
    gap: "5px"
};
const filterTitle = {
    margin: "0",
    fontSize: "14px",
    color: "#023B11",
    fontWeight: "600"
};
const selectBox = {
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid gray",
    minWidth: "140px",
    cursor: "pointer"
};
const confirmed = {
    borderRadius: "30px",
    backgroundColor: "#023B11",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    height: "fit-content",
    width: "10%",
    marginTop: "20px",
    marginRight: "50px"
};
const secondSeventh = {};
const flex = {
    display: "flex",
    gap: "30px",
    borderRadius: "25px",
    border: "2px solid gray",
    height: "300px",
    width: "100%",
    alignItems: "center",
    marginBottom: "20px",
    boxSizing: "border-box"
};

function ImagesCard({ imgSrc, styleBox, title, type, area, size, price, date }) {
    return (
        <div style={styleBox}>
            <div style={{ height: "75%", width: "15%" }}>
                <img
                    src={imgSrc}
                    alt={title}
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "8px",
                        paddingLeft: "20px",
                        objectFit: "cover"
                    }}
                />
            </div>
            <div>
                <h2 style={{ color: "#023B11", margin: "5px 0" }}>{title}</h2>
                <p><b style={{ color: "gray" }}>Loại tin</b>: {type}</p>
                <p><b style={{ color: "gray" }}>Khu vực</b>: {area}</p>
                <p><b style={{ color: "gray" }}>Diện tích</b>: {size}</p>
                <p><b style={{ color: "gray" }}>Giá</b>: {price} VND</p>
                <p><b style={{ color: "gray" }}>Ngày đăng</b>: {date}</p>
            </div>
        </div>
    );
}

