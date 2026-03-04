import React from 'react';

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-green-950 text-white font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: Brand & Socials */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#d99d3d] rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 border border-[#0d2e27] rotate-45"></div>
            </div>
            <span className="text-white font-bold uppercase tracking-tighter text-sm">EcoCare</span>
          </div>
          <div className="hidden md:block h-4 w-px bg-white/10"></div>
          <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors underline decoration-[#d99d3d] underline-offset-4">Home</a>
            <a href="#" className="hover:text-white transition-colors">Tech</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>

        {/* Right: Actions & Copyright */}
        <div className="flex items-center gap-8">
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white opacity-60 hover:opacity-100">𝕏</a>
            <a href="#" className="hover:text-white opacity-60 hover:opacity-100">in</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="text-[10px] uppercase tracking-widest border border-white/20 px-3 py-1 hover:bg-white/5 transition-all"
          >
            ↑ Top
          </button>
          <span className="text-[10px] uppercase tracking-widest opacity-40">© 2025</span>
        </div>
      </div>

      {/* Ultra-thin accent bar */}
      <div className="h-1 bg-[#d99d3d]"></div>
    </footer>
  );
}

export default Footer;