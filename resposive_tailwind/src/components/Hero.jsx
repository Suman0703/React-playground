
function Hero() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center ">
      <div className="font-primary font-extrabold text-6xl max-w-3xl text-center text-gray-400">
        Custom Web Development Services
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full ">
        <div className="h-32 w-32 rounded-3xl bg-red-300 flex items-center justify-center font-serif text-2xl "> <p>Smart </p> </div>
        <div className="h-32 w-32 rounded-3xl bg-neutral-400 flex items-center justify-center font-serif text-2xl">Unique</div>
        <div className="h-32 w-32 rounded-3xl bg-green-400 flex items-center justify-center font-serif text-2xl">Efficient</div>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center ">
        <p className="font-boldtext-xl max-w-3xl text-center text-white font-mono">
       At Mark-Digital, we specialize in delivering high-quality, custom web development services tailored to your specific goals. Whether you need a CMS-powered website or a fully bespoke non-CMS solution, we ensure your web presence stands out and performs seamlessly.
        </p>
        </div>

      </div>
      );
}

      export default Hero;
