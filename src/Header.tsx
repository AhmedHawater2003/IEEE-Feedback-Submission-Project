import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src="Logo.webp" alt="Logo" className="w-32 h-12 mr-2" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/feedbacks"
                className="text-gray-600 hover:text-gray-900"
              >
                Feedbacks
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
