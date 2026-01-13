export default function ValueProposition() {
  return (
    <section className="py-12 lg:py-20 bg-gray-50 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight text-balance">
            A modern website, built the way NYC teams work now
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold text-gray-200 mb-6 leading-none">01.</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Premium design that looks like you belong in the room
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Clean, confident visuals + messaging that matches your positioning.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold text-gray-200 mb-6 leading-none">02.</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Faster builds with Framer + AI (without cutting corners)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I use <strong className="text-gray-900 font-semibold">Framer and AI-assisted workflows</strong> to move quickly—while keeping quality high and the result fully custom.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold text-gray-200 mb-6 leading-none">03.</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Performance + SEO baked in
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fast load times, structured pages, and SEO foundations that support long-term demand generation.
            </p>
          </div>
        </div>
        
        <p className="text-center text-gray-600 mt-16 text-lg italic font-medium">
          No-code isn't 'cheap'—it's efficient when implemented strategically.
        </p>
      </div>
    </section>
  );
}
