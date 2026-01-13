
export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Free Discovery Call (15–30 min)",
      description: "We talk goals, audience, what's working, what's not.",
    },
    {
      number: "2",
      title: "Strategy + Structure",
      description: "I map the pages, messaging, and conversion paths (what gets people to contact you).",
    },
    {
      number: "3",
      title: "Design Sprint",
      description: "High-end visual direction + key page designs.",
    },
    {
      number: "4",
      title: "Vibe Coding Build (Framer + smart automation)",
      description: "Fast, clean implementation—responsive, optimized, launch-ready.",
    },
    {
      number: "5",
      title: "Launch + Handoff",
      description: "Training + documentation so your team can edit confidently.",
    },
  ];

  return (
    <section id="process" className="py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            How it works
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Desktop: Horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200"></div>
              <div className="grid grid-cols-5 gap-6 relative">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6 relative z-10 shadow-xl">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile: Vertical stack */}
          <div className="md:hidden space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-5 flex-shrink-0 shadow-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
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
