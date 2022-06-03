export default function Navbar() {
  return (
    <nav className="bg-neutral-50 shadow-lg">
      <div className="max-w-none mx-auto px-4 h-50 ">
        <div className="flex justify-between ">
          <div className="flex space-x-7 ">
            <div>
              <a
                href="http://localhost:3000/wallet"
                className="flex items-center py-4 px-2"
              >
                <img
                  src=".\src\assets\FLY. Logo.png"
                  alt="Logo"
                  className="h-20 w-20 mr-2"
                />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-10 justify-start">
              <a
                href="http://localhost:3000/wallet"
                className="py-4 px-2 text-red-500 border-b-4 border-red-500 font-semibold "
              >
                Wallet
              </a>
              <a
                href="http://localhost:3000/wallet"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-red-900 transition duration-300"
              >
                Project
              </a>
              <a
                href="http://localhost:3000/wallet"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-red-900 transition duration-300"
              >
                Top
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <p className="py-2 px-2 font-medium">Marc Hazime</p>
            <a
              href="http://localhost:3000/wallet"
              className="py-2 px-2 font-medium text-white bg-red-500 rounded hover:bg-red-900 transition duration-300 cursor-pointer"
            >
              Profil
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" type="button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-red-900 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active">
            <a
              href="index.html"
              className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3000/wallet"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3000/wallet"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3000/wallet"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
