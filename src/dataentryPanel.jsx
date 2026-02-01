import {useState} from "react";

export default DataEntryPanel;


function DataEntryPanel({ currentStep, cvData, setCvData, setCurrentStep , finalCvData , setFinalCvData })
{
    function changeCurrentStep(nextStep)
    {
        setCurrentStep(nextStep);
    }

    function storeData(category , field , value)
    {
        setCvData(prevCvData => {
            return{
                ...prevCvData,
                [category]:{
                    ...prevCvData[category],

                    [field]:value
                }
            }
        })
    }

    function DisplayData()
    {
        setFinalCvData(cvData);
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
                    <input type={"text"} value={cvData.personal.name} onChange={(e) => {storeData("personal","name",e.target.value)}} min={"3"} max={"20"} placeholder={`\"XYZ\"`} className={"input"} id={"name"}/>

                    <label>Email</label>
                    <input type={"email"} value={cvData.personal.email} onChange={(e) => {storeData("personal","email",e.target.value)}} className={"input"}/>

                    <label>Phone Number</label>
                    <input type={"tel"} pattern="[0-9+ ]*" value={cvData.personal.phone_number} onChange={(e) => {storeData("personal","phone_number",e.target.value)}} placeholder="+91 98765 43210" className={"input"}/>

                    <label>Location</label>
                    <input type={"text"} value={cvData.personal.location} onChange={(e) => {storeData("personal","location",e.target.value)}} min={"2"} max={"20"} className={"input"}/>

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
                    <input type={"text"} value={cvData.experience.position} onChange={(e) => {storeData("experience","position",e.target.value)}} min={"3"} max={"20"} placeholder={`\"Your role\"`} className={"input"} id={"position"}/>

                    <label>Company</label>
                    <input type={"text"} value={cvData.experience.company} onChange={(e) => {storeData("experience","company",e.target.value)}} className={"input"} id={"company"}/>

                    <label>Impact No.1</label>
                    <input type={"text"} value={cvData.experience.impact_1} onChange={(e) => {storeData("experience","impact_1",e.target.value)}} className={"input"} id={"impact_1"}/>

                    <label>Impact No.2</label>
                    <input type={"text"} value={cvData.experience.impact_2} onChange={(e) => {storeData("experience","impact_2",e.target.value)}} className={"input"} id={"impact_2"}/>

                    <label>Impact No.3</label>
                    <input type={"text"} value={cvData.experience.impact_3} onChange={(e) => {storeData("experience","impact_3",e.target.value)}} className={"input"} id={"impact_3"}/>

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
                    <input type={"text"} value={cvData.education.degree} onChange={(e) => {storeData("education","degree",e.target.value)}} min={"3"} max={"20"} placeholder={`\"CS\"`} className={"input"} id={"degree"}/>

                    <label>Institute</label>
                    <input type={"text"} value={cvData.education.institute} onChange={(e) => {storeData("education","institute",e.target.value)}} className={"input"} id={"institute"}/>

                    <label>Academic Result No.1</label>
                    <input type={"text"} value={cvData.education.result_1} onChange={(e) => {storeData("education","result_1",e.target.value)}} className={"input"} id={"academic_result_1"}/>

                    <label>Academic Result No.2</label>
                    <input type={"text"} value={cvData.education.result_2} onChange={(e) => {storeData("education","result_2",e.target.value)}} className={"input"} id={"academic_result_2"}/>

                    <label>Academic Result No.3</label>
                    <input type={"text"} value={cvData.education.result_3} onChange={(e) => {storeData("education","result_3",e.target.value)}} className={"input"} id={"academic_result_3"}/>

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
                    <input type={"text"} value={cvData.skills.main} onChange={(e) => {storeData("skills","main",e.target.value)}} min={"3"} max={"20"} className={"input"} id={"main_skill"}/>

                    <label>Secondary Skill</label>
                    <input type={"text"} value={cvData.skills.secondary} onChange={(e) => {storeData("skills","secondary",e.target.value)}} className={"input"} id={"secondary_skill"}/>

                    <label>Achievement No.1</label>
                    <input type={"text"} value={cvData.skills.achievement_1} onChange={(e) => {storeData("skills","achievement_1",e.target.value)}} className={"input"} id={"achievement_result_1"}/>

                    <label>Achievement No.2</label>
                    <input type={"text"} value={cvData.skills.achievement_2} onChange={(e) => {storeData("skills","achievement_2",e.target.value)}} className={"input"} id={"achievement_result_2"}/>

                    <label>Achievement No.3</label>
                    <input type={"text"} value={cvData.skills.achievement_3} onChange={(e) => {storeData("skills","achievement_3",e.target.value)}} className={"input"} id={"achievement_result_3"}/>

                </div>

                <div className={"skills_actionbtn_container"}>

                    <div className={"edit_btn"}>
                        <button onClick={() => {changeCurrentStep("Personal Info")}}>Edit</button>
                    </div>

                    <div className={"submit_btn"}>
                        <button onClick={DisplayData}>Submit</button>
                    </div>
                </div>

            </>
        )
    }
}