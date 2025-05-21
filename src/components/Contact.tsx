import { forwardRef } from "react";

const Contact = forwardRef<HTMLElement, {}>((_props, ref) => {
  return (
    <section ref={ref} className="py-16 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white">Get In Touch</h2>

        <div className="flex flex-col mt-8 space-y-6">
          {/* Email */}
          <div className="flex items-center justify-center space-x-4">
            <i className="fas fa-envelope text-white text-3xl"></i>
            <a
              href="mailto:jiangr0421@gmail.com"
              className="text-white text-lg hover:text-blue-500"
            >
              jiangr0421@gmail.com
            </a>
          </div>

          {/* Phone Number */}
          <div className="flex items-center justify-center space-x-4">
            <i className="fas fa-phone-alt text-white text-3xl"></i>
            <span className="text-white text-lg">+1 646-673-2245</span>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-center space-x-4">
            <i className="fab fa-github text-white text-3xl"></i>
            <a
              href="https://github.com/Ryanj-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:text-blue-500"
            >
              github.com/Ryanj-code
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-center space-x-4">
            <i className="fab fa-linkedin text-white text-3xl"></i>
            <a
              href="https://www.linkedin.com/in/ryan-jiang-cs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:text-blue-500"
            >
              linkedin.com/in/ryan-jiang-cs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
