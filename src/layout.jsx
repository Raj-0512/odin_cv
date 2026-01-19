export default Layout;
import LeftMostPanel from "./leftmostPanel.jsx";
import DataEntryPanel from "./dataentryPanel.jsx";
import CvDisplayCard from "./cvdisplayCard.jsx";

function Layout()
{
    return(

            <div className={"parent_container"}>

                <div className={"left_panel_container"}>
                    <LeftMostPanel/>
                </div>

                <div className={"data_entry_container"}>
                    <DataEntryPanel/>
                </div>

                <div className={"cv_container"}>
                    <CvDisplayCard/>
                </div>
            </div>

    )
}