import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.scss";


const VerticalSlider = ({sections}) => {
    const [activeIndex] = useState(0);

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
                            <Section />
                        </section>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default VerticalSlider;
