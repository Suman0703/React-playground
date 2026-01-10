import image from "../assets/image.png";

function Hero() {
  return (

    <div className="flex justify-center my-40 w-full flex-col items-center">
      <h1 className="text-white mt-30 text-7xl font-bold tracking-tight max-w-xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600">Unleash the power of intuitive finance</h1>
      <p className="text-neutral-400 text-xl max-w-2xl text-center mt-6 selection:bg-neutral-200">Say goodbye to the outdated financial tools. Every small <span className="text-primary"> business </span>owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.</p>
      <div className="flex justify-center w-full max-w-xl">
        <input type="text" placeholder="Enter your email"
         className=" mr-4 bg-transparent rounded-xl border border-neutral-600 px-4 py-2 mt-4 placeholder:text-neutral-50 text-white text-center flex-1 focus:outline-none focus:ring-1 focus: ring-sky-500 transition duration-200"  />
        <button className="relative px-4 py-2 rounded-2xl border border-neutral-300 mt-4 text-white cursor-pointer overflow-hidden ">
          <div className="absolute -bottom-px inset-x-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-600 to-transparent"></div>
          Join the waitlist</button>
      </div>
    </div>
  );
}

export default Hero;
