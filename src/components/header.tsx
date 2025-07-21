import Link from 'next/link';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger-button"
      >
        {isOpen ? <X size={48} /> : <Menu size={48} />}
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="hamburger-menu"
        >
          <ul>
            <li><Link href="/">Top</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/cast">Cast</Link></li>
            <li><Link href="/kowairo">声色十色</Link></li>
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
