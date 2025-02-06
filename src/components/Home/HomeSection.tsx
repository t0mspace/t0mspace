import astronaut from '../../assets/images/astronaut.svg';
import earth from '../../assets/images/earth.svg';
import arrow from '../../assets/images/arrow.svg';
import styles from './home.module.scss';

const data = {
    "greeting": "Hey there!",
    "name": "Thomas",
    "title": "I'm a web developer",
    "subtitle": "& sometimes astronaut"
}

function HomeSection() {
    return (
      <div className={`${styles["home"]} relative flex flex-col md:h-screen items-center justify-center mb-72`}>
        <div className="home__presentation">
          <h2 className={styles["home__title"]}>👋  {data.greeting}</h2>

          <h3 className={styles["home__title"]}>
                  <span className="text-teal-500 dark:text-teal-400">
                      It's me </span>
            <span
              className="text-yellow-500 dark:text-yellow-400"
            >{data.name}</span>.<br />{data.title}
          </h3>
          <p className={styles["home__subtitle"]}>
            {data.subtitle}
          </p>
        </div>
        <img src={arrow} className={`${styles["home__arrow"]} absolute hidden md:block size-20 right-1/2 lg:right-1/3`} alt="" />
        <img src={earth} className={`${styles["home__earth"]} absolute -z-0 hidden lg:block`} alt="" />
        <img src={astronaut} className={`${styles["home__astronaut--animated"]} hidden -z-0 md:block top-1/2 right-5 lg:bottom-1/2`} alt="" />
      </div>
    )
}

export default HomeSection;

