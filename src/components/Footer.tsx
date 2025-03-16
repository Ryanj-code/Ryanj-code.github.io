import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-400 text-center py-6">
      <div className="container mx-auto px-6">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="mailto:jiangr0421@gmail.com"
            aria-label="Email"
            className="hover:text-white transition"
          >
            <FaEnvelope className="text-xl" />
          </a>
          <a
            href="https://github.com/Ryanj-code"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-jiang-cs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ryan Jiang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
