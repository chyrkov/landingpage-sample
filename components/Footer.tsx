export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <p className="text-sm">
              Manhattan • Brooklyn • Queens • Bronx • Staten Island • NYC Metro
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <p className="text-sm">
              Web Design • Framer Development • No-Code • AI-assisted Builds • Landing Pages • SEO Foundations
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Web Design + Vibe Coding. All rights reserved.
          </p>
          <p className="text-gray-600 mt-2 text-xs">
            Serving NYC businesses with modern web design and development solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
