import {useEffect, useRef, useState} from "react";

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        // Optional: stop observing once visible
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% is visible
        );

        // Target all elements with the 'reveal' class
        const revealElements = document.querySelectorAll(".reveal");
        revealElements.forEach((el) => observer.observe(el));

        return () => {
            revealElements.forEach((el) => observer.unobserve(el));
        };
    }, []);



    return(

            <div className={"parent_container"}>

                <div className={"left_panel_container reveal"}>
                    <LeftMostPanel currentStep={currentStep} setCurrentStep={setCurrentStep}/>
                </div>

                <div className={"data_entry_container reveal"}>
                    <DataEntryPanel currentStep={currentStep}
                                    cvData={cvData}
                                    setCvData={setCvData}
                                    setCurrentStep={setCurrentStep}
                                    finalCvData={finalCvData}
                                    setFinalCvData={setFinalCvData}/>
                </div>

                <div className={"cv_container reveal"}>
                    <CvDisplayCard finalCvData={finalCvData} />
                </div>
            </div>

    )
}