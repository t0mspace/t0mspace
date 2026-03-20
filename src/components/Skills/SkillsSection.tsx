import styles from './skills.module.scss';
//import php from "../../assets/images/skills/icons8-php.svg";
import php from "../../assets/images/skills/php.svg";
import linux from "../../assets/images/skills/linux.svg";
import git from "../../assets/images/skills/icons8-git.svg";
import sql from "../../assets/images/skills/icons8-sql.svg";
import security from "../../assets/images/skills/security.svg";
import entra from "../../assets/images/skills/entra-connect.svg";
import intune from "../../assets/images/skills/microsoft-intune.svg";
import mac from "../../assets/images/skills/Icon-Mac.svg";
import win11 from "../../assets/images/skills/Windows_11_logo.svg";
import hardware from "../../assets/images/skills/hardware.svg";

function SkillsSection() {
  const skills = [
    { name: "PHP", src: php },
    { name: "Linux", src: linux },
    { name: "Windows", src: win11 },
    { name: "Mac", src: mac },
    { name: "Git", src: git },
    { name: "SQL", src: sql },
    { name: "Entra", src: entra },
    { name: "Intune", src: intune },
    { name: "Security", src: security },
    { name: "Hardware", src: hardware },
  ];
  const languages = [
    { name: 'Français', fill: 6, color: '#0F6E56', label: 'natif' },
    { name: 'Anglais', fill: 4, color: '#185FA5', label: 'courant' },
    { name: 'Néerlandais', fill: 2, color: '#BA7517', label: 'notions' },
  ];

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  return (
    <div id={"skills"} className="justify-center skills-section max-w-3xl mx-auto">
      <h2 className="text-4xl mb-12 font-bold text-center">Skills</h2>
      <h3 className="text-3xl mb-8 mt-16">IT</h3>
      <div className="flex">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-black/.9 backdrop-blur-xl">
              <div className="skill-item dark:bg-slate-700/30 bg-opacity-100 p-4 rounded-lg">
                <img src={skill.src} alt={skill.name} className="w-auto h-20 mx-auto rounded-full" />
                <p className="text-center m-1">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 className="text-3xl mb-8 mt-16">Languages</h3>
      <div className="bg-black/.9 backdrop-blur-xl p-8 text-gray-200 custom-background bg-opacity-100 dark:bg-slate-700/30 rounded-2xl transform duration-300 cursor-pointer flex flex-col justify-between">

        <div className={styles.cecrl}>
          {languages.map(({ name, fill, color, label }) => (
            <div key={name} className={styles.cecrl__row}>
              <div className={styles.cecrl__lang}>
                {name} <span>{label}</span>
              </div>
              <div className={styles.cecrl__bar}>
                {levels.map((level, i) => (
                  <div
                    key={level}
                    className={styles.cecrl__segment}
                    style={i < fill ? { backgroundColor: color } : {}}
                  >
                    {level}{i + 1 === fill ? ' ✦' : ''}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 className="text-3xl mb-8 mt-16">Soft skills</h3>
      <div className="bg-black/.9 backdrop-blur-xl p-8 text-gray-200 custom-background bg-opacity-100 dark:bg-slate-700/30 rounded-2xl transform duration-300 cursor-pointer flex flex-col justify-between">
        <p>Versatile, Sociable, empathic, creative and critical thinking</p>
      </div>
    </div>

  )
}

export default SkillsSection;

