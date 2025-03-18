"use client";

import Link from "next/link";
import Image from "next/image";
import { menuItems } from "../GlobalConstants/Constants";
import { useState, useRef, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkMode";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const controlHeader = () => {
      if (isHomePage) {
        // On home page, show header only after scrolling past hero section
        // Adjust 100vh to match your hero section height
        if (window.scrollY > window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Optional: Add scroll behavior for other pages
        // For example, hide on scroll down, show on scroll up
        if (window.scrollY > lastScrollY) {
          // scroll down
          setIsVisible(false);
        } else {
          // scroll up
          setIsVisible(true);
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY, isHomePage]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`h-[10vh] w-full bg-white dark:bg-gray-800 text-black dark:text-white 
      flex flex-row items-center justify-between px-4 fixed top-0 z-50 
      transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }
      ${isHomePage ? "bg-opacity-90 backdrop-blur-sm" : ""}`}
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={90}
            height={90}
            className="rounded-full"
          />
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-black dark:text-white">
        Dakota Johnson
      </h1>

      <div className="relative flex items-center gap-4" ref={menuRef}>
        <DarkModeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black dark:text-white"
        >
          <Bars3Icon className="h-8 w-8" />
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 top-full bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg">
            <ul className="max-h-[300px] overflow-y-auto">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
