export default LeftMostPanel;


function LeftMostPanel()
{
    return(
        <>

                <div className={"category"} style={{background: "linear-gradient(50deg, #1c2894, #6A7CFF)", color:"white"}}>
                    Personal Info
                </div>

                <div className={"category"}>
                    Experience
                </div>

                <div className={"category"}>
                    Education
                </div>

                <div className={"category"}>
                    Skills & Summary
                </div>

        </>
    )
}