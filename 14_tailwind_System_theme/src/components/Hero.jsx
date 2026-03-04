
import chatgpt from "../assets/chatgpt.png";
import tw from "../assets/tw.png";
import insta from "../assets/insta.png";
import github from "../assets/github.png";

function Hero() {

  return (
    <div className="flex flex-col gap-20 justify-center items-center md:flex-row">


      <div className="flex flex-col gap-10 items-center justify-center">

        <div className="font-primary font-extrabold text-6xl max-w-3xl text-center text-gray-800 dark:text-gray-300">
          Custom Web Development Services
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
          <div className="h-32 w-32 rounded-3xl bg-red-300 flex items-center justify-center font-serif text-2xl">
            Smart
          </div>
          <div className="h-32 w-32 rounded-3xl bg-neutral-400 flex items-center justify-center font-serif text-2xl">
            Unique
          </div>
          <div className="h-32 w-32 rounded-3xl bg-green-400 flex items-center justify-center font-serif text-2xl">
            Efficient
          </div>
        </div>

        <p className="text-xl max-w-3xl text-center text-black dark:text-white font-sans">
          At Mark-Digital, we specialize in delivering high-quality, custom web development services tailored to your specific goals. Whether you need a CMS-powered website or a fully bespoke non-CMS solution, we ensure your web presence stands out and performs seamlessly.
        </p>
      </div>


      {/*box  */}
      <div className="h-[500px] w-[400px] flex flex-col gap-6 rounded-2xl bg-gray-900 dark:bg-gradient-to-br from-gray-200 via-gray-600 to-gray-700 bg-white/20 dark:bg-white/20 backdrop-blur-lg border border-white/30 shadow-[0_20px_60px_rgba(255,255,255,0.25)] p-4  ">

        <div className="text-black dark:text-white text-center">
          <h2>Powered by the Tools You Love </h2>
        </div>


        <div className="h-fit w-[360px] rounded-xl bg-slate-300/80 dark:bg-slate-700/80 flex items-center justify-center p-4 overflow-hidden">

          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex space-x-12">
              <img src={chatgpt} className="h-12 w-12 bg-gray-300 p-2 rounded-full" />
              <img src={tw} className="h-12 w-12 bg-gray-300 p-2 rounded-full" />
              <img src={insta} className="h-12 w-12 bg-gray-300 p-2 rounded-full" />
              <img src={github} className="h-12 w-12 bg-gray-300 p-2 rounded-full" />

              {/* duplicate icons directly */}
              <img src={chatgpt} className="h-12 w-12 bg-gray-300 p-2 rounded-full" />
              <img src={tw} className="h-12 w-12 bg-gray-300 p-2 rounded-full" />
              <img src={insta} className="h-12 w-12 bg-gray-300 p-2 rounded-full" />
              <img src={github} className="h-12 w-12 bg-gray-300 p-2 rounded-full" />
            </div>
          </div>

        </div>
        <div className="h-fit w-[360px] rounded-xl bg-slate-300/80 dark:bg-slate-700/80 flex items-center justify-center p-4">
          <span className="text-black text-justify dark:text-white">
            Our app integrates with powerful platforms like ChatGPT, Twitter, Instagram, and GitHub to deliver a smarter, more connected experience. ChatGPT enhances productivity with intelligent assistance, Twitter enables real-time conversations and updates, Instagram brings visual storytelling and community engagement, and GitHub powers collaboration through seamless code sharing and version control—together creating a modern, efficient, and user-focused ecosystem.
          </span>
        </div>
      </div>
    </div >

  );
}

export default Hero;
