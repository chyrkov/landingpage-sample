export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Gradient Background - Purple-blue to Orange-pink */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 via-purple-600/30 to-orange-500/40 blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/30 via-pink-500/20 to-yellow-500/30 blur-2xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gray-800 rounded-lg px-4 py-2">
              <span className="text-lg font-semibold text-white">John Smith WebDesigner</span>
            </div>
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#services" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
              Services
            </a>
            <a href="#process" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
              Process
            </a>
            <a href="#pricing" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200"
          >
            Book a Call
          </a>
        </div>
      </header>



      {/* Main Content - Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 min-h-[calc(100vh-200px)] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 lg:space-y-8">
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Web Design + Vibe Coding for NYC Businesses That Need Results
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I help <strong className="text-white font-semibold">real estate, legal, and finance teams</strong> launch modern, high-performing websites fast—using a smart mix of <strong className="text-white font-semibold">custom design</strong>, <strong className="text-white font-semibold">Framer</strong>, and <strong className="text-white font-semibold">AI-assisted builds</strong> (without the "template" feel).
            </p>

            {/* Credibility line */}
            <p className="text-base md:text-lg text-gray-400 font-medium">
              13+ years of experience • NYC-focused • Built for speed, trust, and lead generation
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Primary CTA - Dark with white outline */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200"
              >
                Book a Free Discovery Call
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
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

              {/* Secondary CTA */}
              <a
                href="#process"
                className="text-white hover:text-gray-300 font-semibold text-base transition-colors inline-flex items-center gap-2 group"
              >
                See how it works
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Micro-trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 text-sm text-gray-300 justify-center sm:justify-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>SEO-ready structure (technical + on-page)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 justify-center sm:justify-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Mobile-first and lightning-fast</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 justify-center sm:justify-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Secure, compliant-friendly approach</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 justify-center sm:justify-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Easy updates for your team (no dev bottleneck)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
