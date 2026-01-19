export default DataEntryPanel;


function DataEntryPanel()
{
    return(
        <>
            <div className={"header_text"}>
                Personal Information
            </div>

            <div className={"data_input_container"}>
                <label>Full Name</label>
                <input type={"text"} min={"3"} max={"20"} placeholder={`\"XYZ\"`} className={"input"}/>

                <label>Email</label>
                <input type={"email"}  className={"input"}/>

                <label>Phone Number</label>
                <input type={"tel"} placeholder="+91 98765 43210" pattern="[0-9+ ]*" className={"input"}/>

                <label>Location</label>
                <input type={"text"} min={"2"} max={"20"} className={"input"}/>

            </div>

            <div className={"next_container"}>
                  Next: Experience  >
            </div>
        </>
    )
}