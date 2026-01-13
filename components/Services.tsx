import Button from "@/ui/Button";
import Card from "@/ui/Card";

export default function Services() {
  return (
    <section id="services" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
              Website Design & Build (Framer / no-code)
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-3 mt-1 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="leading-relaxed">Custom design + Framer development</span>
              </li>
              <li className="flex items-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-3 mt-1 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="leading-relaxed">Responsive + accessible-first</span>
              </li>
              <li className="flex items-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-3 mt-1 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="leading-relaxed">CMS setup (so your team can update pages)</span>
              </li>
            </ul>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
              Conversion-Focused Landing Pages
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-3 mt-1 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="leading-relaxed">Campaign landing pages for key services / properties / practice areas</span>
              </li>
              <li className="flex items-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-3 mt-1 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="leading-relaxed">Clear CTA paths + tracking-ready</span>
              </li>
            </ul>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
              SEO Foundations (Launch-Ready)
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-3 mt-1 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="leading-relaxed">Keyword-aligned page structure</span>
              </li>
              <li className="flex items-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-3 mt-1 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="leading-relaxed">Technical setup (indexing, sitemap, meta, schema basics)</span>
              </li>
              <li className="flex items-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-3 mt-1 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="leading-relaxed">Local SEO essentials for NYC visibility</span>
              </li>
            </ul>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
              Smart Add-ons (when they actually help)
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-3 mt-1 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="leading-relaxed">AI chat or lead triage (especially useful for real estate intake)</span>
              </li>
              <li className="flex items-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-3 mt-1 flex-shrink-0">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="leading-relaxed">Integrations: CRM, scheduling, forms, analytics dashboards</span>
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
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
        </div>
      </div>
    </section>
  );
}
