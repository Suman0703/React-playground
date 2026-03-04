import image from "../assets/image.png";

function Hero() {
  return (
    <section className="bg-white-50 pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-10 w-full">
        <div className="flex items-center justify-between">

          {/* LEFT: TEXT */}
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold text-green-900 leading-tight">
              Protect Nature,<br />
              Protect Our Future
            </h1>

            <p className="mt-6 text-lg text-green-800">
              We work towards a sustainable future by promoting environmental
              awareness, conservation, and eco-friendly initiatives that protect
              our planet.
            </p>

            <div className="mt-8 flex gap-6">
              <button className="bg-green-700 text-white px-8 py-3 rounded-lg
                             hover:bg-green-800 transition-colors duration-300">
                Get Involved
              </button>

              <button className="border border-green-700 text-green-700 px-8 py-3 rounded-lg
                             hover:bg-green-100 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="max-w-md">
            <img
              src={image}
              alt="Environment protection illustration"
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>

  );
}

export default Hero;
