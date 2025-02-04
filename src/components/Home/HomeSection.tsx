import astronaut from '../../assets/images/astronaut.svg';
import earth from '../../assets/images/earth.svg';
import arrow from '../../assets/images/arrow.svg';
import styles from './home.module.scss';
import { useEffect, useState } from "react";

const data = {
    "greeting": "Hey there!",
    "name": "Thomas",
    "title": "I'm a web developer",
    "subtitle": "& sometimes astronaut"
}


function HomeSection() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={styles.home}>
            <h2 className={styles["home__title"]}>{data.greeting}</h2>


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
            <img src={arrow} className="absolute size-20 md:right-1/2" alt=""/>
            <img src={earth} className={`${styles["home__earth"]} absolute hidden md:block size-4/5 -right-100`} alt=""/>
            <img src={astronaut} className={`${styles["home__astronaut--animated"]}`} alt=""/>
        </div>

    )
}

export default HomeSection;

