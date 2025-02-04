import {useState, useCallback, Children} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWheel } from "@use-gesture/react";
import "./index.scss";


const VerticalSlider = ({sections}) => {
    const sectionsArrayLength = sections.length;
    const [activeIndex, setIndex] = useState(0);
    const scrollHandler = useCallback(({ deltaY }) => {
        setIndex((prev) => Math.max(0, Math.min(sectionsArrayLength - 1, prev + Math.sign(deltaY))));
    }, [sectionsArrayLength]);

    useWheel(scrollHandler);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white">
            <AnimatePresence mode="wait">
                <motion.div
                    animate={{translateY: -activeIndex * 100 + "vh"}}
                    transition={{type: "spring", stiffness: 100}}
                    className="flex flex-col"
                >
                    {sections.map((Section, index) => (
                        <section key={index} className="w-screen h-screen flex items-center justify-center">
                        <section key={index} className="w-screen h-screen flex justify-center">
                            <Section />
                        </section>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default VerticalSlider;
