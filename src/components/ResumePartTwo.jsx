import Education from "./Education";
import Hobbies from "./Hobbies";
import Interest from "./Interest";
import Language from "./Language";
import Projects from "./Projects";
import "./ResumePartTwo.css";

export default function ResumePartTwo() {
    return (
        <div className="other-container">
            <div className="skill-container">
                <h2>skills</h2>
                <hr />
                <div className="skill-list">
                    <ul className="list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Bootstrap 5</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React.js</li>
                        <li>Basic Node.js</li>
                        <li>Git & GitHub</li>
                        <li>Response Design</li>
                    </ul>
                </div>
            </div>
            <div className="pro-con">
                <Projects />
            </div>
            <div className="edu-con">
                <Education />
            </div>
            <div className="int-con">
                <Interest />
            </div>
            <div className="lng-con">
                <Language />
            </div>
            <div className="ho-con">
                <Hobbies />
            </div>
        </div>
    );
}