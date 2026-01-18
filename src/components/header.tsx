import '../styles/header.css';


import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-5 right-5 margin-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-800 text-white"
      >
        {isOpen ? <X size={48} /> : <Menu size={48} />}
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-lg p-4"
        >
          <ul className="space-y-2">
            <li><a href="/" className="block p-2 hover:bg-gray-100 rounded">Top</a></li>
            <li><a href="/about" className="block p-2 hover:bg-gray-100 rounded">About</a></li>
            {/*<li><a href="/cast" className="block p-2 hover:bg-gray-100 rounded">Cast</a></li>*/}
            <li><a href="/kowairo" className="block p-2 hover:bg-gray-100 rounded">声色十色</a></li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}


export const Header = () => {
  return (
    <>
      <header>
        <HamburgerMenu />
      </header>
    </>
  );
};
