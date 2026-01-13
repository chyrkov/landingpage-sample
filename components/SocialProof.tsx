export default function SocialProof() {
  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-base md:text-lg font-medium text-gray-600 mb-8 tracking-wide">
            Trusted by teams in: <span className="text-gray-900 font-semibold">Real Estate</span> • <span className="text-gray-900 font-semibold">Law</span> • <span className="text-gray-900 font-semibold">Finance</span> • <span className="text-gray-900 font-semibold">Professional Services</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "Cut our launch timeline in half."
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "More qualified inquiries within 30 days."
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "Finally a site that matches our reputation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
