import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 2,
            staggerChildren: 0.9
        }
    }
};

const item = {
    hidden: { opacity: 0, x: -80, y: 20 },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 1.2,
            ease: "easeOut" as const
        }
    }
};

const buttonVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" as const },
    },
};

export default function ProfileSpotlight() {
    return (
        <div className="max-w-7xl mt-40 px-6 grid grid-cols-6 mx-auto gap-6 items-center">

            
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="col-span-6 md:col-span-4 space-y-3"
            >
                <motion.p
                    variants={item}
                    className="uppercase text-sm mb-2 tracking-widest text-[#ccc]"
                >
                    Welcome to my world
                </motion.p>

                <motion.div
                    variants={item}
                    className="flex gap-2 items-center flex-wrap"
                >
                    <h1 className="text-[#ffffff] text-5xl font-bold">Hi, I'm</h1>
                    <h1 className="text-[#00fd7a] font-bold text-5xl">
                        Ulvi Jalilov
                    </h1>
                </motion.div>

                <motion.p
                    variants={item}
                    className="text-[#ffffff] mb-6 text-5xl font-bold"
                >
                    a Frontend Developer
                </motion.p>

                <motion.span
                    variants={item}
                    className="text-white block leading-relaxed"
                >
                    Passionate about building modern, user-friendly, and high-performance web applications. <br />
                    I love combining clean design with strong functionality to deliver solutions that create real impact. <br />
                    
                </motion.span>

                <motion.a
                    variants={buttonVariant}
                    href="#contact"
                    className="border mt-10 text-sm border-solid bg-[#00fd7a] text-black rounded-full px-4 py-2 flex items-center gap-2 w-fit tracking-wide overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>Get in Touch</span>
                    <motion.span
                        className="inline-block"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <RxArrowTopRight />
                    </motion.span>
                </motion.a>
            </motion.div>

           
            <div className="col-span-6 md:col-span-2 flex justify-center items-center">
                <div className="relative flex justify-center items-end w-64 h-64 sm:w-72 sm:h-72 md:w-85 md:h-80">

                    
                    <div className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-50 md:h-50 bg-green-500/25 blur-[80px] rounded-full"></div>

                   
                    <div className="absolute w-44 h-60 sm:w-52 sm:h-64 md:w-60 md:h-75 border-4 border-green-400 rounded-full rotate-20 shadow-[0_0_30px_#22c55e]"></div>

                   
                    <motion.img
                        src="/Adobe Express - file.png"
                        alt="Profile"
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        className="relative z-10 w-96 object-cover"
                    />

                </div>
            </div>
        </div>
    );
}