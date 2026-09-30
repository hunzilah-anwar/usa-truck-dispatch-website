import ContactSection from '../components/ContactSection';
import { IconMapPin, IconPhone, IconWhatsApp, } from '../components/Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function ContactPage() {

  return (
    <div className="contact-page bg-white">

      {/* Main Contact Section (Form + Direct Details) */}
      <ContactSection />

      {/* Interactive Map & Direct Actions */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container-custom max-w-7xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md text-center space-y-4">
            <div className="w-14 h-14 bg-blue-50 text-primary-navy rounded-2xl flex items-center justify-center mx-auto">
              <IconMapPin className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {COMPANY_DETAILS.name} Headquarter
            </h2>

            <p className="text-slate-700 font-semibold text-base">
              {COMPANY_DETAILS.address}
            </p>

            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              Our centralized dispatch desk coordinates long-haul OTR, regional, and specialized freight across all 48 continental states.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="px-6 py-3.5 bg-primary-navy hover:bg-[#002244] text-white font-extrabold uppercase tracking-wider text-xs rounded-xl shadow flex items-center gap-2 transition-all"
              >
                <IconPhone className="w-4 h-4 text-amber-400" />
                <span>Call: {COMPANY_DETAILS.phone}</span>
              </a>

              <a
                href={COMPANY_DETAILS.whatsapplink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-extrabold uppercase tracking-wider text-xs rounded-xl shadow flex items-center gap-2 transition-all"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Live Chat on WhatsApp</span>
              </a>

              <a
                href={COMPANY_DETAILS.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold uppercase tracking-wider text-xs rounded-xl border border-slate-300 flex items-center gap-2 transition-all"
              >
                <IconMapPin className="w-4 h-4 text-primary-navy" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
