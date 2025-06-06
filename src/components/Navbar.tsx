// Props type for Navbar
type NavbarProps = {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  homeRef: React.RefObject<HTMLElement>;
  projectRef: React.RefObject<HTMLElement>;
  skillRef: React.RefObject<HTMLElement>;
};

const Navbar = ({
  scrollToSection,
  homeRef,
  projectRef,
  skillRef,
}: NavbarProps) => {
  const handleOpenPDF = () => {
    window.open("/Ryan-Jiang-Resume.pdf", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 py-4 px-6 ">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold text-blue-500">Ryan Jiang</div>

        <div className="flex space-x-6 items-center">
          <button
            onClick={() => scrollToSection(homeRef)}
            className="text-white hover:text-blue-500 cursor-pointer transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(projectRef)}
            className="text-white hover:text-blue-500 cursor-pointer transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(skillRef)}
            className="text-white hover:text-blue-500 cursor-pointer transition"
          >
            Skills
          </button>
          <button
            onClick={handleOpenPDF}
            className="text-white hover:text-blue-500 cursor-pointer transition"
          >
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
