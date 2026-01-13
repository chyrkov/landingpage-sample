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
            Apply Now
          </a>
        </div>
      </header>

      {/* Social Icons - Left Side */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:flex flex-col gap-6">
        <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-2-10h4v2h-4v-2zm0 4h4v2h-4v-2z" fill="currentColor"/>
          </svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
          </svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
          </svg>
        </a>
      </div>

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

      {/* Bottom Section - Statistics & Security Info */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          {/* Security Info - Left */}
          <div className="max-w-md">
            <h3 className="text-white text-lg font-semibold mb-2">Safe Security</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We can guarding your payments with useful interface, empowering you with privacy everywhere.
            </p>
          </div>

          {/* Statistics - Center */}
          <div className="flex flex-wrap gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">65%+</div>
              <div className="text-sm text-gray-400">People Joined</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100K+</div>
              <div className="text-sm text-gray-400">Money Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">0.20%+</div>
              <div className="text-sm text-gray-400">Fraud Probability</div>
            </div>
          </div>

          {/* Light Mode Toggle - Right */}
          <div className="flex items-center gap-3">
            <span className="text-white text-sm">Light Mode</span>
            <div className="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-gray-500 rounded-full absolute left-0.5 top-0.5 transition-all"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
