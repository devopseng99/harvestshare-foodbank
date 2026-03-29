import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-harvest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-harvest-400 to-giving-400" />
              <span className="text-xl font-bold">HarvestShare</span>
            </div>
            <p className="text-harvest-200 text-sm">
              Connecting donors, warehouses, and distribution sites to reduce food insecurity across our region.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Programs</h3>
            <ul className="space-y-2 text-sm text-harvest-200">
              <li><Link href="/programs" className="hover:text-white transition-colors">All Programs</Link></li>
              <li><Link href="/impact" className="hover:text-white transition-colors">Impact Map</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Stories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Get Involved</h3>
            <ul className="space-y-2 text-sm text-harvest-200">
              <li><Link href="/get-involved" className="hover:text-white transition-colors">Donate</Link></li>
              <li><Link href="/get-involved" className="hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link href="/membership" className="hover:text-white transition-colors">Membership</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <ul className="space-y-2 text-sm text-harvest-200">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">My Dashboard</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-harvest-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-harvest-300">
          <p>&copy; 2026 HarvestShare Food Bank Network. All rights reserved.</p>
          <p className="mt-2 md:mt-0">EIN: 12-3456789 &middot; 501(c)(3) Nonprofit</p>
        </div>
      </div>
    </footer>
  );
}
