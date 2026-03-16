import { useState, useEffect } from "react"
import { ChevronUp, Github, Linkedin, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Footer = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0 }) 
  }

  return (
    <footer className="relative mt-24 border-t border-gray-800 backdrop-blur-md bg-black/40">

    
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 120 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50
                       w-14 h-14 rounded-full
                       bg-[#00fd7a] text-black
                       flex items-center justify-center
                       shadow-[0_0_20px_#00fd7a]
                       hover:scale-110 hover:shadow-[0_0_35px_#00fd7a]
                       transition"
          >
            <ChevronUp size={26} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 py-14 text-center">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Ulvi<span className="text-[#00fd7a]">.dev</span>
        </h2>

        <p className="text-gray-400 mt-3">
          Frontend Developer — React • TypeScript • Next.js
        </p>

        <div className="flex justify-center gap-8 mt-8">
          <a href="https://github.com" target="_blank" className="text-gray-400 hover:text-[#00fd7a] transition">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-[#00fd7a] transition">
            <Linkedin size={22} />
          </a>
          <a href="mailto:email@email.com" className="text-gray-400 hover:text-[#00fd7a] transition">
            <Mail size={22} />
          </a>
        </div>

        <div className="w-full h-1px bg-linear-to-r from-transparent via-[#00fd7a] to-transparent mt-10"></div>

        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Ulvi.dev — All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer