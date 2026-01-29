export default CvDisplayCard;
import user from "./user.png"

function CvDisplayCard()
{
    return(
        <>
            <div className={"profile_container"}>
                <div className={"profile_pic_container"}>
                  <img src={user}/>
                </div>

                <div className={"profile_name_container"}>
                   <p style={{fontSize:21 , fontWeight:"bold"}} id={"cv_name"}>Raj Patel</p>
                   <p style={{fontSize:12}} id={"position"}>Web Developer</p>
                </div>
            </div>

            <div className={"cv_category_container"}>
                <div className={"cv_contact_category"}>
                    <div className={"header_contact_container"}>
                       <p style={{marginLeft:10 , fontSize:14}}>Contact</p>
                    </div>

                    <div className={"contact_container"}>
                        <div className={"contact"}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="#6A7CFF" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="lucide lucide-mail-icon lucide-mail"><path
                                   d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16"
                                                                                      rx="2"/></svg>
                            <p>johndoe123@gmail.com</p>
                        </div>

                        <div className={"contact"}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="#6A7CFF" stroke="#6A7CFF" stroke-width="0.5" stroke-linecap="round"
                                    stroke-linejoin="round" className="lucide lucide-phone-icon lucide-phone"><path
                                   d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                            <p>+232 865 8797</p>
                        </div>

                        <div className={"contact"}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="#6A7CFF" stroke-width="2"  stroke-linecap="round"
                                    stroke-linejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path
                                   d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle
                                   cx="12" cy="10" r="3"/></svg>
                            <p>New York , NY</p>
                        </div>
                    </div>
                </div>

                <div className={"cv_category"}>
                    <div className={"header_container"}>
                        <p style={{marginLeft:10 , fontSize:14}}>Experience</p>
                    </div>

                    <div className={"experience_title_container"}>
                       <p style={{fontWeight:"bold"}}>Front End Developer</p>
                       <p>ABC Company | 2020 - Present</p>
                    </div>

                    <div className={"experience_text_container"}>
                        <ul>
                         <li>Developed responsive web applications</li>
                         <li>Collaborated with design team</li>
                         <li>Implemented new features</li>
                        </ul>
                    </div>
                </div>

                <div className={"cv_category"}>
                    <div className={"header_container"}>
                        <p style={{marginLeft:10 , fontSize:14}}>Education</p>
                    </div>

                    <div className={"education_title_container"}>
                        <p style={{fontWeight:"bold"}}>B-Tech in CSE</p>
                        <p>State University | 2016 - 2020</p>
                    </div>

                    <div className={"education_text_container"}>
                        <ul>
                            <li>Developed responsive web applications</li>
                            <li>Collaborated with design team</li>
                            <li>Implemented new features</li>
                        </ul>
                    </div>
                </div>

                <div className={"cv_category"}>
                    <div className={"header_container"}>
                        <p style={{marginLeft:10 , fontSize:14}}>Skills</p>
                    </div>

                    <div className={"skills_title_container"}>
                        <p style={{fontWeight:"bold"}}>Problem Solving</p>
                        <p>Competitive Programming</p>
                    </div>

                    <div className={"skills_text_container"}>
                        <ul>
                            <li>Participated in multiple hackathons</li>
                            <li>Solved more than 500 problems on leetcode</li>
                            <li>Made more than 10 projects</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}