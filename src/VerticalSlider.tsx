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
        <div className=" bg-gray-900 text-white flex flex-col">
            <AnimatePresence mode="wait">
                <motion.div
                    animate={{translateY: -activeIndex * 100 + "vh"}}
                    transition={{type: "spring", stiffness: 100}}
                    className=""
                >
                    {sections.map((Section, index) => (
                        <section key={index} className={`mb-16 ml-5 lg:ml-20 min-h-screen flex-${index}`}>
                        <section key={index} className="mb-16">
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
