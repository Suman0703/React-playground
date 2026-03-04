import logo from "../assets/logo.png";

function Navbar() {
    return (
        <div className="bg-gray-400 h-12 w-full md:rounded-full flex justify-between items-center flex-row  p-4 border border-black">
            <div className="flex flex-row gap-2 items-center justify-center">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-10 h-10 object-contain  bg-gray-300 rounded-full border border-black"
                />
                <span className="font-primary font-bold">
                    Star-World
                </span>
              


            </div>

            <div className="hidden md:flex">
                <ul className="flex flex-row gap-16 p-2">
                    <li className="hover:border rounded-3xl border-black px-4 py-1">Home</li>
                    <li className="hover:border rounded-3xl border-black px-4 py-1">About</li>
                    <li className="hover:border rounded-3xl border-black px-4 py-1">Properties</li>
                    <li className="hover:border rounded-3xl border-black px-4 py-1">Contact</li>
                </ul>
            </div>

              <button className="md:hidden">
                    <i className="fa-solid fa-bars text-2xl"></i>
                </button>
        </div>

    )
}

export default Navbar;