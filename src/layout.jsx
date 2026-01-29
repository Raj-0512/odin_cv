import {useState} from "react";

export default Layout;
import LeftMostPanel from "./leftmostPanel.jsx";
import DataEntryPanel from "./dataentryPanel.jsx";
import CvDisplayCard from "./cvdisplayCard.jsx";

function Layout()
{

    const [currentStep , setCurrentStep] = useState("Personal Info");

    const [cvData , setCvData] = useState({
        name:"",
        email:"",
        phone_number:"",
        location:"",
        experience:[],
        education:[],
        skills:[]
    });




    return(

            <div className={"parent_container"}>

                <div className={"left_panel_container"}>
                    <LeftMostPanel currentStep={currentStep} setCurrentStep={setCurrentStep}/>
                </div>

                <div className={"data_entry_container"}>
                    <DataEntryPanel currentStep={currentStep}
                                    cvData={cvData}
                                    setCvData={setCvData}
                                    setCurrentStep={setCurrentStep}/>
                </div>

                <div className={"cv_container"}>
                    <CvDisplayCard cvData={cvData} />
                </div>
            </div>

    )
}