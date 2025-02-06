import VerticalSlider from "./VerticalSlider";
import Header from "./components/Header/Header.tsx";
import HomeSection from "./components/Home/HomeSection.tsx";
import AboutSection from "./components/About/AboutSection.tsx";
import SkillsSection from "./components/Skills/SkillsSection.tsx";
import StarField from "./components/Background/background.tsx";
import ProjectsSection from "./components/Projects/ProjectsSection.tsx";
import ContactSection from "./components/Contact/ContactSection.tsx";
function App() {
    const sections = [HomeSection, SkillsSection, ProjectsSection,AboutSection, ContactSection];
    return (
        <div className="bg-cover h-screen bg-gray-900 text-white -z-3">
            <div className="absolute -z-3 inset-0">
                <StarField starCount={150}/>
                <Header/>
                <VerticalSlider sections={sections}/>
            </div>
        </div>
    );
}

export default App;
