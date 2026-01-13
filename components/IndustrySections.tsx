import Card from "@/ui/Card";

export default function IndustrySections() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Built for Real Estate, Legal, and Finance
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
              Real Estate Websites
            </h3>
            <div className="mb-5">
              <p className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">What we focus on:</p>
              <p className="text-gray-600 leading-relaxed">
                Projects/listings presentation, lead capture, neighborhood credibility, speed on mobile.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Common pages:</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Developments, Listings, Team, Press, Contact, Lead forms.
              </p>
            </div>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
              Law Firm Websites
            </h3>
            <div className="mb-5">
              <p className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">What we focus on:</p>
              <p className="text-gray-600 leading-relaxed">
                Authority, clarity, accessibility, practice-area structure, content hubs.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Common pages:</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Practice areas, Attorney bios, Case results (if applicable), Insights/blog, Intake.
              </p>
            </div>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
              Finance Websites
            </h3>
            <div className="mb-5">
              <p className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">What we focus on:</p>
              <p className="text-gray-600 leading-relaxed">
                Trust-first design, compliance-friendly UX, clear offers, performance.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Common pages:</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Services, Approach, Team, Resources, Contact/Consultation.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
