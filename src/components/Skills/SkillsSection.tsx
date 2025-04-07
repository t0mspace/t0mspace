import html from "../../assets/images/skills/icons8-html.svg";
import css from "../../assets/images/skills/icons8-css3.svg";
import javascript from "../../assets/images/skills/icons8-javascript.svg";
import angular from "../../assets/images/skills/angular.svg";
//import php from "../../assets/images/skills/icons8-php.svg";
import php from "../../assets/images/skills/php.svg";
import symfony from "../../assets/images/skills/icons8-symfony.svg";
import linux from "../../assets/images/skills/linux.svg";
import java from "../../assets/images/skills/icons8-java.svg";
import docker from "../../assets/images/skills/icons8-docker.svg";
import spring from "../../assets/images/skills/icons8-spring.svg";
import react from "../../assets/images/skills/react.svg";
import python from "../../assets/images/skills/python.svg";
import gitlab from "../../assets/images/skills/icons8-gitlab.svg";
import git from "../../assets/images/skills/icons8-git.svg";
import sql from "../../assets/images/skills/icons8-sql.svg";

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
        { name: "Spring", src: spring },
        { name: "React", src: react },
        { name: "Python", src: python },
        { name: "Gitlab", src: gitlab },
        { name: "Git", src: git },
        { name: "SQL", src: sql },
    ];

    return (
        <div id={"skills"} className="justify-center skills-section max-w-3xl mx-auto">
          <h2 className="text-4xl mb-16 font-bold text-center">Skills</h2>
          <div className="flex">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-auto">
              {skills.map((skill, index) => (
                <div className="bg-black/.9 backdrop-blur-xl">
                  <div key={index} className="skill-item dark:bg-slate-700/30 bg-opacity-100 p-4 rounded-lg">
                      <img src={skill.src} alt={skill.name} className="w-auto h-20 mx-auto rounded-full" />
                      <p className="text-center m-1">{skill.name}</p>
                  </div>
                </div>
              ))}
              </div>
          </div>
        </div>

    )
}

export default SkillsSection;

