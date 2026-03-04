import logo1 from '../assets/logo1.webp';

function Navbar() {
    return (
        <nav className="bg-green-950 shadow-md w-full m-0 p-0 sticky top-0">
            <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">
                <div className='flex gap-4'>
                <img
                    src={logo1}
                    alt="EcoCare Logo"
                    className="h-10 w-auto rounded-full"
                />
                <h1 className="text-2xl font-bold text-white text-start">
                    EcoCare
                </h1>
                </div>


                <ul className="flex gap-8 text-white">
                    <li className="cursor-pointer text-green-300 font-semibold transition-colors duration-300 ease-in-out">Home</li>
                    <li className="cursor-pointer hover:text-green-300 transition-colors duration-300 ease-in-out">About</li>
                    <li className="cursor-pointer hover:text-green-300 transition-colors duration-300 ease-in-out">Projects</li>
                    <li className="cursor-pointer hover:text-green-300 transition-colors duration-300 ease-in-out">Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
