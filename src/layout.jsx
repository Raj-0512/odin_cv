import {useState} from "react";

export default Layout;
import LeftMostPanel from "./leftmostPanel.jsx";
import DataEntryPanel from "./dataentryPanel.jsx";
import CvDisplayCard from "./cvdisplayCard.jsx";

function Layout()
{

    const [currentStep , setCurrentStep] = useState("Personal Info");

    const [cvData , setCvData] = useState({
        personal:{
            name: "",
            email: "",
            phone_number: "",
            location: ""
        },
        experience:{
            position:"",
            company:"",
            impact_1:"",
            impact_2:"",
            impact_3:""
        },
        education:{
            degree:"",
            institute:"",
            result_1:"",
            result_2:"",
            result_3:""
        },
        skills:{
            main:"",
            secondary:"",
            achievement_1:"",
            achievement_2:"",
            achievement_3:""
        }
    });

    const emptyCvData = {
        personal: {
            name: "",
            email: "",
            phone_number: "",
            location: ""
        },
        experience: {
            position: "",
            company: "",
            impact_1: "",
            impact_2: "",
            impact_3: ""
        },
        education: {
            degree: "",
            institute: "",
            result_1: "",
            result_2: "",
            result_3: ""
        },
        skills: {
            main: "",
            secondary: "",
            achievement_1: "",
            achievement_2: "",
            achievement_3: ""
        }
    };

    const [finalCvData, setFinalCvData] = useState(emptyCvData);



    return(

            <div className={"parent_container"}>

                <div className={"left_panel_container"}>
                    <LeftMostPanel currentStep={currentStep} setCurrentStep={setCurrentStep}/>
                </div>

                <div className={"data_entry_container"}>
                    <DataEntryPanel currentStep={currentStep}
                                    cvData={cvData}
                                    setCvData={setCvData}
                                    setCurrentStep={setCurrentStep}
                                    finalCvData={finalCvData}
                                    setFinalCvData={setFinalCvData}/>
                </div>

                <div className={"cv_container"}>
                    <CvDisplayCard finalCvData={finalCvData} />
                </div>
            </div>

    )
}