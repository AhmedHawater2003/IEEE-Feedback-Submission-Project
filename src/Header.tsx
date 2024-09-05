const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="Logo.webp" alt="Logo" className="w-60 h-16" />
        </div>
        <nav className="flex items-center justify-between p-4">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/AhmedHawater2003"
                className="text-gray-600 hover:text-gray-900"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/feed/"
                className="text-gray-600 hover:text-gray-900"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
