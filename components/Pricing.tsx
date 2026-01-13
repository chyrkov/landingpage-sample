import Card from "@/ui/Card";

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 lg:py-20 bg-gray-50 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Packages & Pricing
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Transparent ranges (final quote after the free discovery call). Pricing reflects <strong className="text-gray-900">NYC agency-market reality</strong> for 2024–2025: most mid-size business websites land in the <strong className="text-gray-900">$10k–$25k range</strong>, with simpler builds starting around <strong className="text-gray-900">$5k</strong> and complex builds pushing <strong className="text-gray-900">$25k–$50k+</strong>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Launch Package */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Launch</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">
                $5,000–$9,000
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Best for: focused offerings, smaller teams, "we need a clean, credible site fast"
              </p>
            </div>
            
            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-3">Includes</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Strategy + sitemap for a conversion-focused site</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Custom design direction (not a template look)</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><strong>Up to 5 core pages</strong> (e.g., Home, Services, About, Contact, 1 extra)</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Framer build + responsive setup</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Basic SEO foundation (titles/meta, indexing basics, performance checks)</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Lead capture setup (forms + routing)</span>
                </li>
              </ul>
            </div>
            
            <p className="text-sm text-gray-600 mb-6">
              <strong>Typical timeline:</strong> ~2–4 weeks (depending on content readiness)
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800 w-full px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
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
          </Card>
          
          {/* Growth Package - Featured */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all border-2 border-purple-400">
            <div className="mb-6">
              <div className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">
                $10,000–$25,000
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Best for: <strong>medium-size NYC businesses</strong> in real estate, legal, finance that need performance + lead gen
              </p>
            </div>
            
            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-3">Includes</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Messaging + conversion structure (what to say, where, and why)</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Custom UX/UI design for key pages</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><strong>10–15 pages</strong> (or fewer pages with deeper sections)</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>CMS setup (blog / listings / case studies / resources)</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Stronger SEO foundation (keyword-aligned structure + technical essentials)</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Analytics + conversion tracking setup</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Integrations (CRM, email marketing, scheduling, etc.)</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Launch QA + handoff training</span>
                </li>
              </ul>
            </div>
            
            <p className="text-sm text-gray-600 mb-6">
              <strong>Typical timeline:</strong> ~3–6 weeks
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800 w-full px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
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
          </Card>
          
          {/* Scale Package */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">
                $25,000–$50,000+
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Best for: multi-service firms, multi-location, heavy content, advanced integrations, higher compliance expectations
              </p>
            </div>
            
            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-3">Includes</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Deeper content architecture (multiple service lines / practice areas)</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Advanced UX flows (segmentation by audience, conversion paths)</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><strong>15–30+ pages</strong> (often CMS-driven)</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Higher-end interaction / motion design where it supports clarity</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Advanced integrations (complex CRM routing, gated content, automation)</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Optional AI add-ons (see below) where appropriate</span>
                </li>
                <li className="flex items-start">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Rollout plan (phased launch if needed)</span>
                </li>
              </ul>
            </div>
            
            <p className="text-sm text-gray-600 mb-6">
              <strong>Typical timeline:</strong> ~6–10+ weeks
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800 w-full px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
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
          </Card>
        </div>
        
        {/* Add-ons Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Add-ons (optional, priced separately)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                AI Chat / Lead Triage
              </h4>
              <p className="text-purple-600 font-bold text-lg mb-3">
                $750–$3,500 setup + any third-party tool fees
              </p>
              <p className="text-gray-700 text-sm mb-2">
                Configure chatbot flows, FAQs, lead capture, routing
              </p>
              <p className="text-gray-600 text-sm italic">
                Best when it reduces staff time or increases booked calls
              </p>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Landing Page Sprint
              </h4>
              <p className="text-purple-600 font-bold text-lg mb-3">
                $1,500–$4,000
              </p>
              <p className="text-gray-700 text-sm">
                One high-converting landing page + tracking-ready setup
              </p>
            </Card>
          </div>
        </div>
        
        {/* Ongoing Support Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ongoing Support (monthly)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Essential Care
              </h4>
              <p className="text-purple-600 font-bold text-lg mb-3">
                $350–$750 / month
              </p>
              <p className="text-gray-600 text-sm mb-3">
                Good for: updates, peace of mind, small ongoing improvements
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Minor content updates</li>
                <li>• Performance checks</li>
                <li>• Basic analytics review</li>
              </ul>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Growth Support
              </h4>
              <p className="text-purple-600 font-bold text-lg mb-3">
                $750–$1,500 / month
              </p>
              <p className="text-gray-600 text-sm">
                Good for: teams actively marketing and publishing
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
