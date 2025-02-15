// Props type for Navbar
type NavbarProps = {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  homeRef: React.RefObject<HTMLElement>;
  projectRef: React.RefObject<HTMLElement>;
  skillRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
};

const Navbar = ({
  scrollToSection,
  homeRef,
  projectRef,
  skillRef,
  contactRef,
}: NavbarProps) => {
  const handleOpenPDF = () => {
    window.open("/Ryan_Jiang_Resume.pdf", "_blank");
  };

  return (
    <header className="bg-gradient-to-r from-indigo-900 via-blue-400 to-indigo-900 py-5 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold text-white">Ryan Jiang</div>

        <div className="flex space-x-6 items-center">
          <button
            onClick={() => scrollToSection(homeRef)}
            className="text-white hover:text-purple-500 cursor-pointer transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(projectRef)}
            className="text-white hover:text-purple-500 cursor-pointer transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(skillRef)}
            className="text-white hover:text-purple-500 cursor-pointer transition"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="text-white hover:text-purple-500 cursor-pointer transition"
          >
            Contact
          </button>
          <button
            onClick={handleOpenPDF}
            className="text-white hover:text-purple-500 cursor-pointer transition"
          >
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
