import { skills } from "../../data/skillsData";
import { motion } from "framer-motion";
import { FaMobileAlt, FaTachometerAlt, FaCode, FaPaintBrush, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import {  Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const skillIcons = {
    "Responsive & Mobile-First Design": <FaMobileAlt />,
    "Performance Optimization": <FaTachometerAlt />,
    "Clean & Maintainable Code": <FaCode />,
    "UI/UX Principles": <FaPaintBrush />,
    "Version Control (Git/GitHub)": <FaGithub />,
    "HTML5": <FaHtml5 />,
    "CSS3": <FaCss3Alt />,
    "JavaScript": <FaJs />,
    "React": <FaReact />

};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.3 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

export default function TechStack() {
    return (
        <div className="mt-40 overflow-hidden">
            <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.9 }} className="mb-8 flex justify-center">
                <Link
                    to="/skills"
                    className="border border-[#00fd7a] text-white rounded-full px-6 py-2 hover:bg-[#00fd7a] hover:text-black transition-colors duration-300"
                >
                    Skills
                </Link>
            </motion.div>

            <motion.div variants={container} initial="hidden" animate="show">
                <Swiper
                   
                    modules={[ Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    slidesPerView={2}
                    loop={true}
                    centeredSlides={true}
                     speed={2000}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {skills.map((skill) => (
                        <SwiperSlide key={skill.name}>
                            <motion.div
                                variants={item}
                                className="flex flex-col items-center text-center p-4 bg-[#111111] rounded-lg shadow-lg hover:scale-105 transition-transform"
                            >
                                <div className="text-[#00fd7a] text-4xl mb-2">
                                    {skillIcons[skill.name as keyof typeof skillIcons]}
                                </div>
                                <span className="text-white text-sm font-semibold">{skill.name}</span>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
}
