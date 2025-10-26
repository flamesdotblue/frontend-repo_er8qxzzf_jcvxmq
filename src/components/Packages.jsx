import { Car, Clock, Gauge, Shield, ArrowRight } from 'lucide-react';

const packages = [
  {
    id: '8h80',
    title: '8 Hours / 80 KM',
    price: 1500,
    desc: 'Perfect for city tours, errands, and quick day plans in Coimbatore.',
    inclusions: ['Driver & fuel included', 'Clean AC cars', 'GST extra as applicable'],
    extras: 'Extra km: ₹12/km • Extra hour: ₹200/hr',
  },
  {
    id: '12h120',
    title: '12 Hours / 120 KM',
    price: 2200,
    desc: 'Ideal for full-day plans and outstation day trips around Coimbatore.',
    inclusions: ['Driver & fuel included', 'Quick support', 'GST extra as applicable'],
    extras: 'Extra km: ₹12/km • Extra hour: ₹200/hr',
  },
];

function whatsAppLink(pkgTitle) {
  const message = `New Booking Request: Trip: ${pkgTitle} | Date/Time: [Preferred Date/Time] | Pickup: [Location] | Drop-off: [Location] | Name: [Your Name] | Phone: [Your Phone] | Email: [Your Email] | Requests: [Any special requests]`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/+918220004199?text=${encoded}`;
}

export default function Packages() {
  return (
    <section id="packages" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Two Packages. Zero Confusion.</h2>
          <p className="mt-3 text-gray-600">Choose what fits your day. Simple pricing, great experience.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {packages.map((p) => (
            <div key={p.id} className="group rounded-3xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.desc}</p>
                </div>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-3xl font-extrabold text-gray-900">₹{p.price}</span>
                <span className="text-gray-500">/ trip</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.inclusions.map((i) => (
                  <li key={i} className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-600" /> {i}</li>
                ))}
                <li className="flex items-center gap-2 text-gray-600"><Clock className="w-4 h-4" /> <span>{p.extras}</span></li>
                <li className="flex items-center gap-2 text-gray-600"><Gauge className="w-4 h-4" /> <span>After limit charges apply</span></li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                  href={whatsAppLink(p.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-white font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label={`Book ${p.title} on WhatsApp`}
                >
                  Book via WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#book"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
