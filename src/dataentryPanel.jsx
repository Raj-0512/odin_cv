import {useState} from "react";

export default DataEntryPanel;


function DataEntryPanel({ currentStep, cvData, setCvData, setCurrentStep })
{
    function changeCurrentStep(nextStep)
    {
        setCurrentStep(nextStep);
    }

    if(currentStep === "Personal Info")
    {
        return (
            <>
                <div className={"header_text"}>
                    Personal Information
                </div>

                <div className={"data_input_container"}>
                    <label>Full Name</label>
                    <input type={"text"} min={"3"} max={"20"} placeholder={`\"XYZ\"`} className={"input"} id={"name"}/>

                    <label>Email</label>
                    <input type={"email"} className={"input"}/>

                    <label>Phone Number</label>
                    <input type={"tel"} placeholder="+91 98765 43210" pattern="[0-9+ ]*" className={"input"}/>

                    <label>Location</label>
                    <input type={"text"} min={"2"} max={"20"} className={"input"}/>

                </div>

                <div className={"next_container"} onClick={() => {changeCurrentStep("Experience")}}>
                    Next: Experience >
                </div>
            </>
        )
    }

    else if(currentStep === "Experience")
    {
        return (
            <>
                <div className={"header_text"}>
                    {currentStep}
                </div>

                <div className={"data_input_container"}>
                    <label>Position</label>
                    <input type={"text"} min={"3"} max={"20"} placeholder={`\"Your role\"`} className={"input"} id={"position"}/>

                    <label>Company</label>
                    <input type={"text"} className={"input"} id={"company"}/>

                    <label>Impact No.1</label>
                    <input type={"text"} className={"input"} id={"impact_1"}/>

                    <label>Impact No.2</label>
                    <input type={"text"} className={"input"} id={"impact_2"}/>

                    <label>Impact No.3</label>
                    <input type={"text"} className={"input"} id={"impact_3"}/>

                </div>

                <div className={"next_container"} onClick={() => {changeCurrentStep("Education")}}>
                    Next: Education >
                </div>
            </>
        )
    }

    else if(currentStep === "Education")
    {
        return (
            <>
                <div className={"header_text"}>
                    {currentStep}
                </div>

                <div className={"data_input_container"}>
                    <label>Degree</label>
                    <input type={"text"} min={"3"} max={"20"} placeholder={`\"CS\"`} className={"input"} id={"degree"}/>

                    <label>Institute</label>
                    <input type={"text"} className={"input"} id={"institute"}/>

                    <label>Academic Result No.1</label>
                    <input type={"text"} className={"input"} id={"academic_result_1"}/>

                    <label>Academic Result No.2</label>
                    <input type={"text"} className={"input"} id={"academic_result_2"}/>

                    <label>Academic Result No.3</label>
                    <input type={"text"} className={"input"} id={"academic_result_3"}/>

                </div>

                <div className={"next_container"} onClick={() => {changeCurrentStep("Skills & Summary")}}>
                    Next: Skills & Summary >
                </div>
            </>
        )
    }

    else if(currentStep === "Skills & Summary")
    {
        return (
            <>
                <div className={"header_text"}>
                    {currentStep}
                </div>

                <div className={"data_input_container"}>
                    <label>Main Skill</label>
                    <input type={"text"} min={"3"} max={"20"} className={"input"} id={"main_skill"}/>

                    <label>Secondary Skill</label>
                    <input type={"text"} className={"input"} id={"secondary_skill"}/>

                    <label>Achievement No.1</label>
                    <input type={"text"} className={"input"} id={"achievement_result_1"}/>

                    <label>Achievement No.2</label>
                    <input type={"text"} className={"input"} id={"achievement_result_2"}/>

                    <label>Achievement No.3</label>
                    <input type={"text"} className={"input"} id={"achievement_result_3"}/>

                </div>


            </>
        )
    }
}