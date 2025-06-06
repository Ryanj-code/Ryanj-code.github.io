import { forwardRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>(
  (props, ref) => {
    return (
      <footer
        ref={ref}
        {...props}
        className={`text-gray-400 text-center py-6 ${props.className ?? ""}`}
      >
        <div className="container mx-auto px-6">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-4 text-2xl">
            <a
              href="mailto:jiangr0421@gmail.com"
              aria-label="Email"
              className="transition transform hover:text-red-500 hover:scale-110"
            >
              <SiGmail />
            </a>

            <a
              href="https://github.com/Ryanj-code"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition transform hover:text-black hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ryan-jiang-cs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition transform hover:text-blue-500 hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ryan Jiang. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export default Footer;
