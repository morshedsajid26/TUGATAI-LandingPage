"use client";
import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Container from "../Container";

const navitems = [
  { name: "Home", href: "home", isRoute: false },
  { name: "Featured", href: "feature", isRoute: false },
  { name: "Pricing", href: "pricing", isRoute: false },
  { name: "FAQ", href: "faq", isRoute: false },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id, closeMenu = false) => {
    if (closeMenu) setOpen(false);

    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      // wait for mobile menu close animation before scrolling
      setTimeout(doScroll, closeMenu ? 350 : 0);
    }
  };

  return (
    <div className="border-b border-white   ">
      <Container>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className=" py-4 flex items-center justify-between "
        >

          <Link href="/" onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              scrollToSection("home");
            }
          }}>
            <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4"
            >

              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-12 w-auto object-contain"
              />

              <div>
                <p className="text-2xl font-bold text-[#EB232D] font-inter">
                    TUGATAI
                </p>

                <span className="text-xs font-marope text-[#1E8380]">
                    Cargo Logistics
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl cursor-pointer p-2 rounded-xl bg-[#AD46FF] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-end gap-1 ">
            {navitems.map((item, index) => (
              <motion.li key={index} whileHover={{ y: -2 }}>
                {item.isRoute ? (
                  <Link
                    href={item.href}
                    className="py-2 px-4 font-inter text-lg font-medium text-white hover:text-[#AD46FF] transition-colors rounded-lg"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="py-2 px-4 font-inter text-lg font-medium text-white hover:text-[#AD46FF] transition-colors rounded-lg cursor-pointer"
                  >
                    {item.name}
                  </button>
                )}
              </motion.li>
            ))}
          </ul>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block"
          >
            <Link href="/auth/login">
              <button className="bg-gradient-to-r from-[#9810FA] to-[#AD46FF] text-white font-bold text-base px-6 py-3 rounded-xl cursor-pointer shadow shadow-[#9810FA] hover:shadow-[#9810FA]/30 transition-shadow">
               Sign In
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Slide Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white mt-4 rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
            >
              <ul className="flex flex-col items-start gap-2 p-6">
                {navitems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="w-full"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.isRoute ? (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="py-3 px-4 font-inter text-lg font-medium text-slate-700 hover:bg-[#AD46FF]/20 hover:text-[#AD46FF] block rounded-xl transition-all"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.href, true)}
                        className="py-3 px-4 font-inter text-lg font-medium text-slate-700 hover:bg-[#AD46FF]/20 hover:text-[#AD46FF] block rounded-xl transition-all w-full text-left"
                      >
                        {item.name}
                      </button>
                    )}
                  </motion.li>
                ))}

                <motion.div
                  className="w-full pt-4 mt-2 border-t border-slate-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="/auth/login" onClick={() => setOpen(false)}>
                    <button className="bg-gradient-to-r from-[#9810FA] to-[#AD46FF] w-full text-white font-bold text-lg px-4 py-4 rounded-xl shadow shadow-[#9810FA] transition-shadow">
                      Sign In
                    </button>
                  </Link>
                </motion.div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default Navbar;
