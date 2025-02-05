import { useEffect, useState } from "react";

const starColors = [
    "text-yellow-300 dark:text-yellow-200",
    "text-orange-300 dark:text-orange-200",
    "text-pink-300 dark:text-pink-200",
    "text-purple-300 dark:text-purple-200",
];

const starShapes = ["•", "✦", "✧", "+", "×", "★", "✸"];

const StarField = ({ starCount = 100 }) => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = Array.from({ length: starCount }, (_, index) => ({
                id: index,
                color: starColors[Math.floor(Math.random() * starColors.length)],
                shape: starShapes[Math.floor(Math.random() * starShapes.length)],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                duration: 2 + Math.random() * 3,
                size: `${Math.random() * 0.3 + 0.2}rem`,
                delay: `${Math.random() * 2}s`,
            }));
            setStars(newStars);
        };

        generateStars();
    }, [starCount]);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
            {stars.map((star) => (
                <span
                    key={star.id}
                    className={`absolute ${star.color} text-xl {styles.twinkleStar}`}
                    style={{
                        left: star.left,
                        top: star.top,
                        fontSize: star.size,
                        animation: `{styles.twinkleStar} ${star.duration}s infinite alternate ease-in-out`,
                        animationDelay: star.delay,
                    }}
                >
                    {star.shape}
                </span>
            ))}
        </div>
    );
};

export default StarField;
