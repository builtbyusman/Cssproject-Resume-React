import pic  from "../assets/profileimage.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

import "./Header.css";

export default function Header() {
     return (
        <header>
            <ProfileImage />
            <HeaderInformation />
        </header>
     );
}

function ProfileImage() {
    return (
          <div className="profile-image-container">
             <img src={pic} alt="Profile-Image" className="profile-image" />
          </div>
    );
}

function HeaderInformation() {
    return (
        <div className="resume-info">
          <h1>muhammad <span>usman</span></h1>
          <p className="Profession">frontend-Developer</p>
          <p className="addres"><CiLocationOn className="icon" />Nishter colony, Lahore</p>
          <div className="contact-info">
            <div><HiOutlineMail className="icon" />usmandeveloper13@gmail.com</div>
            <div><MdLocalPhone className="icon" />+92-324-8040630</div>
            <div><FaGithub className="icon" />builtbyusman</div>
            <div><FaLinkedin className="icon" />linkdin</div>
          </div>
        </div>
    );
}