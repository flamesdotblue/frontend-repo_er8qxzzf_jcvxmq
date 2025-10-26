import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Coimbatore Cabs</h3>
          <p className="mt-2 text-sm text-gray-600">Simple, reliable taxi service with two fixed packages. Serving Coimbatore and nearby destinations.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:+918220004199" className="hover:underline">+91 82200 04199</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> <a href="https://wa.me/+918220004199" target="_blank" rel="noreferrer" className="hover:underline">WhatsApp Chat</a></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> <span>support@coimbatorecabs.in</span></li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> <span>Coimbatore, Tamil Nadu</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Why Choose Us</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li>Safe and punctual drivers</li>
            <li>Transparent pricing</li>
            <li>Clean, comfortable cars</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="py-6 border-t border-black/5 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Coimbatore Cabs. All rights reserved.
      </div>
    </footer>
  );
}
