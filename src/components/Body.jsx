import { useState } from "react";
import TrangChu from "./pages/TrangChu";

export default function Body() {
    const [selectedPage, setSelectedPage] = useState("home");

    return (
        <TrangChu />
    );
}
