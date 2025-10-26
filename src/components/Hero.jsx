import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[560px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-200">Reliable • Safe • On-time</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Reliable Cabs in Coimbatore
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Fixed Trips for Your Convenience</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Two simple packages. Transparent pricing. Hassle-free rides for local and outstation trips.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              View Packages <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/+918220004199?text=Hi%20Coimbatore%20Cabs!%20I%27d%20like%20to%20book%20a%20cab."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-white font-semibold shadow-lg hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
