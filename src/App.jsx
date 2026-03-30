import "./App.css";
import Header from "./components/Header";
import ObjectPart from "./components/ObjectPart";
import ResumePartTwo from "./components/ResumePartTwo";

export default function App() {
    return (
        <div className="resume">
            <Header />
            <ObjectPart />
            <ResumePartTwo />
        </div>
    );
}