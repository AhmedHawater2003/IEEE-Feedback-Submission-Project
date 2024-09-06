const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.svg" alt="Logo" className="h-10 mr-2" />
        </div>
        <nav className="flex items-center justify-between p-4">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://edu.ieee.org/eg-guc/"
                className="text-gray-600 hover:text-gray-900"
              >
                Official Page
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/IEEE.GUC.SB/"
                className="text-gray-600 hover:text-gray-900"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ieeegucsb/?hl=en"
                className="text-gray-600 hover:text-gray-900"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
