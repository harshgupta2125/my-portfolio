const Footer = () => {
  return (
    <footer className="bg-surface dark:bg-surface-dark text-text-main dark:text-text-main-dark py-6 px-4 border-t border-text-main/10 dark:border-text-main-dark/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Harsh Gupta. All rights reserved.
        </p>

        <a
            href="https://drive.google.com/drive/folders/1ZjYYV0cVFb47ujMTiR4n6OXdWUgTSC-a?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary dark:hover:text-primary-dark transition"
          >Click</a>
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/harshgupta2125"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary dark:hover:text-primary-dark transition"
          >
            GitHub
          </a>
          <a
            href="mailto:harsh2125gupta@gmail.com"
            className="hover:text-primary dark:hover:text-primary-dark transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/guptaharsh000/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary dark:hover:text-primary-dark transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
