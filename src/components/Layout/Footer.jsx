import Link from "next/link";
import Image from "next/image";
import { socialMediaIcons } from "../GlobalConstants/Constants";

export default function Footer() {
  return (
    <footer className="h-[8vh] w-full bg-white dark:bg-gray-800 text-black dark:text-white flex items-center justify-center fixed bottom-0 z-50">
      {/* Empty */}
      <div className="flex-1"></div>

      {/* Copyright */}
      <div className="flex-1 flex items-center justify-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Dakota Johnson. All rights reserved.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex space-x-4">
          {socialMediaIcons.map((social, index) => (
            <Link
              key={index}
              href={social.href} // Use social.href here
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={30}
                height={30}
                className="hover:opacity-75 dark:bg-white/30 "
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
