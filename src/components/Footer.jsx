const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Harsh Gupta. All rights reserved.
        </p>

        <a
            href="https://drive.google.com/drive/folders/1ZjYYV0cVFb47ujMTiR4n6OXdWUgTSC-a?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >Click</a>
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/harshgupta2125"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:harsh2125gupta@gmail.com"
            className="hover:text-teal-400 transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/guptaharsh000/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
