import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Packages />

        <section id="book" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why Choose Us</h2>
                <p className="mt-4 text-gray-600">We focus on clarity, comfort, and reliability. With two fixed packages, planning your day is effortless.</p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  <li className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <p className="font-medium">Punctual & Professional</p>
                    <p className="text-sm text-gray-600">Experienced local drivers who value your time.</p>
                  </li>
                  <li className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <p className="font-medium">Transparent Pricing</p>
                    <p className="text-sm text-gray-600">No hidden fees. Know your costs upfront.</p>
                  </li>
                  <li className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <p className="font-medium">Comfortable Fleet</p>
                    <p className="text-sm text-gray-600">Clean, well-maintained AC cars for every ride.</p>
                  </li>
                  <li className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <p className="font-medium">Support on WhatsApp</p>
                    <p className="text-sm text-gray-600">Quick assistance whenever you need it.</p>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://wa.me/+918220004199?text=Hi%20Coimbatore%20Cabs!%20I%20want%20to%20book%20a%20trip."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                  >
                    Send Booking Details on WhatsApp
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Guest-friendly booking</h3>
                <p className="mt-2 text-gray-600">No logins. No forms here yet. Just a quick WhatsApp chat to confirm your ride.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a href="https://wa.me/+918220004199?text=New%20Booking%20Request%3A%208%20Hours%20%2F%2080%20KM" target="_blank" rel="noreferrer" className="rounded-xl border border-gray-200 px-4 py-3 hover:bg-gray-50">Book 8h / 80km</a>
                  <a href="https://wa.me/+918220004199?text=New%20Booking%20Request%3A%2012%20Hours%20%2F%20120%20KM" target="_blank" rel="noreferrer" className="rounded-xl border border-gray-200 px-4 py-3 hover:bg-gray-50">Book 12h / 120km</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
