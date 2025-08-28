import { GetDataFromDataBaseAndDisplayAsTable } from "../subcomponents/DataAndDataBase";
import { GreenTextCenteredTitle } from "../titleAltenative/Title";

export default function MuaBanDat() {
    return (
        <>
            <GreenTextCenteredTitle name={"Tin đăng đã được duyệt"}/>
            <GetDataFromDataBaseAndDisplayAsTable />
        </>
    );
}
