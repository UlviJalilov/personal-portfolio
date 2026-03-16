import { Link, } from "react-router-dom"
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { CiPhone } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";


const Introduction = () => {
    return (

        <div className="max-w-7xl mt-40 grid grid-cols-12 mx-auto">
            <div className="col-span-12 flex-col items-center flex justify-center">
                <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.9 }}
                >
                    <Link
                        to="/about"
                        className="border border-[#00fd7a] text-white rounded-full px-6 py-2 hover:bg-[#00fd7a] hover:text-black transition-colors duration-300"
                    >
                        About Me
                    </Link>
                </motion.div>

                <div>
                    <h1 className="text-4xl text-center font-bold tracking-widest text-[#ffffff] mt-8">Design Meets Code</h1>
                    <h1 className="text-4xl text-center font-bold tracking-wide text-[#00fd7a]">Frontend Developer</h1>
                    <div className="max-w-3xl mx-auto text-center mt-8">
                        <p className="text-[#ffffff] tracking-wide leading-relaxed text-lg">
                            Hi, I'm Ulvi, a Frontend Developer passionate about building modern,<br />
                            responsive, and user-friendly web applications.<br />
                            I specialize in working with <strong className="text-[#00fd7a]">React, Next.js, TypeScript, JavaScript,</strong><br />
                            and <strong className="text-[#00fd7a]">Tailwind CSS</strong> to create clean, scalable, and interactive interfaces.<br />

                        </p>
                    </div>
                    <div className="mt-12 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                      
                        <div className="bg-[#1c1c1c] cursor-pointer p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <h1 className="text-5xl font-bold text-[#00fd7a] mb-4">70+</h1>
                            <p className="text-white text-sm leading-relaxed">
                                Completed high-quality web projects.<br />
                            </p>
                        </div>

                        
                        <div className="bg-[#1c1c1c] cursor-pointer p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <h1 className="text-5xl font-bold text-[#00fd7a] mb-4">50+</h1>
                            <p className="text-white text-sm leading-relaxed">
                                Learning and creating web components.<br />
                            </p>
                        </div>

                       
                        <div className="bg-[#1c1c1c] cursor-pointer p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <h1 className="text-5xl font-bold text-[#00fd7a] mb-4">10+</h1>
                            <p className="text-white text-sm leading-relaxed">
                                Built fun and creative web projects.<br />
                            </p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.9 }}
                        >
                            <Link
                                to="/learnmore"
                                className="border border-[#00fd7a] text-white text-sm rounded-full px-6 w-40 py-2 flex items-center gap-2 justify-center hover:bg-[#00fd7a] hover:text-black transition-colors duration-300"
                            >
                                Learn More <RxArrowTopRight className="w-5 text-[#00fd7a] h-5" />
                            </Link>
                        </motion.div>
                        <div className="flex items-center gap-3">
                        
                            <div className="border flex justify-center items-center w-7 h-7 rounded-full border-[#00fd7a]">
                                <CiPhone className="w-4 h-4 text-[#ffff]" />
                            </div>

                          
                            <span className="text-white">(099) 700 07 31</span>
                            <span></span>
                        </div>
                        <div className="flex items-center gap-3">
                          
                            <div className="border flex justify-center items-center w-7 h-7 rounded-full border-[#00fd7a]">
                                <HiOutlineMail  className="w-4 h-4 text-[#ffff]" />
                            </div>

                           
                            <span className="text-white">ulvijalil7@gmail.com</span>
                            <span></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Introduction
