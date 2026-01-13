export default function FinalCTA() {
  return (
    <section id="contact" className="py-12 lg:py-20 bg-gray-900 relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight text-balance">
          Ready for a website that feels premium—and performs?
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          If you want a site that looks credible in NYC, loads fast, and turns visits into conversations—let's talk.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book a Free Discovery Call
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-900"
            >
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        
        <p className="text-gray-400 text-base">
          Prefer email? Drop me a note at:{" "}
          <a
            href="mailto:you@yourdomain.com"
            className="text-white underline hover:text-gray-300 transition-colors"
          >
            you@yourdomain.com
          </a>
        </p>
      </div>
    </section>
  );
}
