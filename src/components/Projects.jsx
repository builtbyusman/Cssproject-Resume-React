import "./Projects.css";

export default function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <hr />
            <div className="project-one">
                <h4>Amazon Clone</h4>
                <ul className="project-list">
                    <li>Using HTML, CSS && Bootstrap</li>
                    <li>Deployed online</li>
                </ul>
            </div>
            <div className="project-two">
                <h4>Personal Portfolio Website</h4>
                <ul className="project-list">
                    <li>Designed and developed using Bootstrap</li>
                    <li>showcases projects and skills</li>
                    <li>Deployed onlins</li>
                </ul>
            </div>
            <div className="project-three">
                <h4>Expense Tracker</h4>
                <ul className="project-list">
                     <li>Developed using Js</li>
                     <li>Responsive on all devices</li>
                     <li>Deployed online</li>
                </ul>
            </div>
            <div className="project-fourth">
                <h4>Typing Test</h4>
                <ul className="project-list">
                   <li>Developed using Js</li>
                   <li>Check Tpying speed WPM</li>
                   <li>Deployed online</li>
                </ul>
            </div>
        </div>
    );
}