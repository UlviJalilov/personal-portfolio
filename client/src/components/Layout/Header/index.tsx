import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import { HiMenu, HiX } from "react-icons/hi"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { useSearch } from "../../../hooks/useSearch"
const Header = () => {
    const [open, setOpen] = useState(false)
    const { search, setSearch } = useSearch()


    return (
        <nav className="max-w-7xl my-15 border bg-[#0c0c0c] border-[#00fd7a] px-6 py-3 rounded-full md:grid md:grid-cols-3 flex items-center justify-between mx-auto animate-pulse">


            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-center md:text-left"
            >
                <div className="flex items-center gap-2 text-2xl font-bold">

                    <h1 className="text-[#00fd7a] font-bold animate-pulse">
                        &lt;/&gt;
                    </h1>


                    <h1 className="text-[#00fd7a] font-extrabold animate-pulse">
                        UJ
                    </h1>

                </div>
            </motion.div>


            <ul className="hidden md:flex text-white justify-center gap-7">
                <li>
                    <NavLink to="/" className="uppercase transition-colors duration-300 hover:text-[#00fd7a]">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/aboutpage" className="uppercase transition-colors duration-300 hover:text-[#00fd7a]">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skillspage" className="uppercase transition-colors duration-300 hover:text-[#00fd7a]">
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projectspage" className="uppercase transition-colors duration-300 hover:text-[#00fd7a]">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="#" className="uppercase transition-colors duration-300 hover:text-[#00fd7a]">
                        Portfolio
                    </NavLink>
                </li>
            </ul>


            <div className="hidden md:flex items-center justify-end ml-auto">
                <div className="flex items-center gap-3 border border-white focus-within:border-[#00fd7a] rounded-full px-5 py-1">
                    <CiSearch className="text-white text-lg" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search project..."
                        className="bg-transparent outline-none text-sm text-white placeholder-gray-400"
                    />
                </div>
            </div>


            <div
                className="md:hidden text-white text-2xl cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                {open ? <HiX /> : <HiMenu />}
            </div>


            {open && (
                <div className="absolute top-28 left-0 w-full bg-[#0c0c0c] border-t border-[#00fd7a] flex flex-col items-center gap-6 py-6 md:hidden">

                    <ul className="flex flex-col text-white gap-6 items-center">
                        <li className="uppercase">Home</li>
                        <li className="uppercase">About</li>
                        <li className="uppercase">Skills</li>
                        <li className="uppercase">Projects</li>
                        <li className="uppercase">Portfolio</li>
                    </ul>


                    <div className="flex items-center gap-3 border border-white rounded-full px-5 py-1">
                        <CiSearch className="text-white text-lg" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search project..."
                            className="bg-transparent outline-none text-sm text-white placeholder-gray-400"
                        />
                    </div>

                </div>
            )}

        </nav>
    )
}

export default Header
