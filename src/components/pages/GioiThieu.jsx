import {GreenTextCenteredTitle, LeftSectionRightContent, SectionTitle} from "../titleAltenative/Title.jsx"
import { LeftTextRightImage, TextBottomLeftWithImageAsBackGroundAndHoverAnimation } from "../subcomponents/TextImage.jsx";

const name = (
        <>
            Giới Thiệu Về datnenbaoluc.vn <br/>
            Đơn Vị Hàng Đầu Cho Lựa Chọn Đầu Tư Đất Nền Ở Bảo Lộc
        </>
)
export default function GioiThieu() {
    return (
        <>        
            <GreenTextCenteredTitle name={name}/>
            <LeftTextRightImage />
            <LeftSectionRightContent />
            <SectionTitle />
            <TextBottomLeftWithImageAsBackGroundAndHoverAnimation />
        </>    
    );
}
