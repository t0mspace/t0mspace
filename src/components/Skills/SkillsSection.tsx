import html from "../../assets/images/skills/icons8-html.svg";
import css from "../../assets/images/skills/icons8-css3.svg";
import javascript from "../../assets/images/skills/icons8-javascript.svg";
import angular from "../../assets/images/skills/angular.svg";
import php from "../../assets/images/skills/icons8-php.svg";
import symfony from "../../assets/images/skills/icons8-symfony.svg";
import linux from "../../assets/images/skills/linux.svg";
import java from "../../assets/images/skills/icons8-java.svg";
import docker from "../../assets/images/skills/icons8-docker.svg";
import spring from "../../assets/images/skills/icons8-spring.svg";
import react from "../../assets/images/skills/react.svg";
import python from "../../assets/images/skills/python.svg";

function SkillsSection() {
    const skills = [
        { name: "HTML", src: html },
        { name: "CSS", src: css },
        { name: "JavaScript", src: javascript },
        { name: "PHP", src: php },
        { name: "Java", src: java },
        { name: "Angular", src: angular },
        { name: "Symfony", src: symfony },
        { name: "Linux", src: linux },
        { name: "Docker", src: docker },
        { name: "Spring boot", src: spring },
        { name: "React", src: react },
        { name: "Python", src: python },
    ];

    return (
        <div className="skills-section flex flex-col">
            <h2 className="text-4xl mb-3">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
                <div key={index} className="skill-item items-center justify-center bg-gray-800 p-4 rounded-lg">
                    <img src={skill.src} alt={skill.name} className="w-auto h-20" />
                    <p className="text-center m-1">{skill.name}</p>
                    <img src={skill.src} alt={skill.name} className="w-20 h-auto" />
                </div>
            ))}
            </div>

        </div>

    )
}

export default SkillsSection;

