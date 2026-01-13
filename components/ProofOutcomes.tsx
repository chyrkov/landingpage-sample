export default function ProofOutcomes() {
  return (
    <section className="py-12 lg:py-20 bg-gray-50 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 text-center leading-[1.1] tracking-tight">
            What you can expect
          </h2>
          
          <div className="space-y-4 mb-16">
            <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg">
              <span className="text-purple-500 text-2xl mr-5 mt-1 font-light">→</span>
              <p className="text-lg text-gray-700 leading-relaxed pt-1">
                A site that <strong className="text-gray-900 font-semibold">looks credible</strong> the second it loads
              </p>
            </div>
            
            <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg">
              <span className="text-purple-500 text-2xl mr-5 mt-1 font-light">→</span>
              <p className="text-lg text-gray-700 leading-relaxed pt-1">
                A clearer path to your main action: <strong className="text-gray-900 font-semibold">inquiries + booked calls</strong>
              </p>
            </div>
            
            <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg">
              <span className="text-purple-500 text-2xl mr-5 mt-1 font-light">→</span>
              <p className="text-lg text-gray-700 leading-relaxed pt-1">
                Faster updates (so marketing doesn't stall)
              </p>
            </div>
            
            <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg">
              <span className="text-purple-500 text-2xl mr-5 mt-1 font-light">→</span>
              <p className="text-lg text-gray-700 leading-relaxed pt-1">
                A foundation you can build on—new pages, campaigns, content
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 bg-white rounded-2xl border-l-4 border-purple-400 shadow-lg">
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "From outdated to modern in 3–5 weeks."
              </p>
            </div>
            
            <div className="p-7 bg-white rounded-2xl border-l-4 border-purple-400 shadow-lg">
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "Rebuilt homepage + service pages → stronger conversion flow."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
