import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Clock3,
  FileCheck2,
  ShieldCheck,
  Truck,
  Weight,
  Ruler,
  Package,
  Navigation,
  PhoneCall,
} from "lucide-react";

import { EQUIPMENT_DETAILS } from "../data/dispatchData";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cleanText = (value) => {
  if (!value) return "";

  if (Array.isArray(value)) {
    return value
      .filter(Boolean)
      .map((item) => {
        const text = String(item).trim();
        return text.endsWith(".") ? text : `${text}.`;
      })
      .join(" ");
  }

  return String(value).trim();
};

const paragraphFrom = (...values) => {
  return values
    .flat()
    .filter(Boolean)
    .map((value) => cleanText(value))
    .filter(Boolean)
    .join(" ");
};

const SpecCard = ({ icon: Icon, label, value }) => {
  if (!value) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-navy/[0.07] text-primary-navy">
        <Icon size={19} strokeWidth={1.8} />
      </div>

      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
        {value}
      </p>
    </div>
  );
};

const ContentSection = ({ eyebrow, title, children }) => {
  return (
    <motion.section
      variants={fadeUp}
      className="border-t border-slate-300 mb-8 pt-16"
    >
      <div className="">
        <div>

          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              {eyebrow}
            </p>
          )}
        </div>

        <div>
          <h2 className="max-w-3xl text-2xl font-extrabold tracking-tight text-[#06213D] sm:text-3xl">
            {title}
          </h2>

          <div className="mt-2 space-y-4 text-[15px] leading-8 text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const InfoParagraph = ({ children }) => {
  if (!children) return null;

  return <p>{children}</p>;
};

export default function ServiceDetailPage({ onOpenQuote }) {
  const { slug } = useParams();

  const service = EQUIPMENT_DETAILS.find((item) => item.id === slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-navy text-white">
            <Truck size={28} />
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-[#06213D]">
            Equipment Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            The equipment or dispatch service you are looking for could not be
            found. Please return to our equipment section and select another
            service.
          </p>

          <Link
            to="/equipment"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#06213D]"
          >
            <ArrowLeft size={17} />
            Back to Equipment
          </Link>
        </div>
      </main>
    );
  }

  const dispatchFee =
    service.badge ||
    `${Number(service.commissionRate || 0) * 100}% Dispatch Fee`;

  const overview = service.detailedDescription || service.description || "";

  const bestForText = paragraphFrom(service.bestFor);

  const commonFreightText = paragraphFrom(
    service.commonFreight,
    service.topCommodities,
  );

  const dispatchFocusText = paragraphFrom(service.dispatchFocus);

  const dispatchSupportText = paragraphFrom(service.dispatchSupport);

  const requirementsText = paragraphFrom(service.requirements);

  const operationalText = paragraphFrom(service.rateFactors);

  const useCasesText = paragraphFrom(service.useCases);

  return (
    <main className="overflow-hidden bg-[#F7F9FC] text-slate-900">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-primary-navy">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.name}
            className="h-full w-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-primary-navy/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 sm:pb-10 sm:pt-20 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/60"
          >
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>

            <ChevronRight size={14} />

            <Link to="/services" className="transition hover:text-white">
              Services
            </Link>

            <ChevronRight size={14} />

            <span className="text-white/90">{service.name}</span>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Hero content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-3xl"
            >

              <motion.h1
                variants={fadeUp}
                className="mt-6 max-w-3xl text-2xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl"
              >
                {service.name}
                <span className="mt-2 block text-[#F5C002]">
                  Dispatch Services
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-[16px]"
              >
                {service.description}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center gap-3"
              >

                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/6 px-5 py-3.5 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Request a Quote
                </button>
              </motion.div>

              {/* Hero fee */}
              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-6"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                    Dispatch Fee
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-white">
                    {dispatchFee}
                  </p>
                </div>

                <div className="hidden h-9 w-px bg-white/10 sm:block" />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                    Service Type
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Carrier Dispatch
                  </p>
                </div>

                <div className="hidden h-9 w-px bg-white/10 sm:block" />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                    Availability
                  </p>

                  <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-white">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Active Support
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative lg:justify-self-end"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-2 shadow-2xl">
                <div className="relative aspect-4/3 overflow-hidden rounded-[22px]">
                  <img
                    src={service.image}
                    alt={`${service.name} dispatch`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK EQUIPMENT FACTS
      ====================================================== */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="my-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div variants={fadeUp}>
              <SpecCard
                icon={Weight}
                label="Payload"
                value={service.specs?.payload}
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <SpecCard
                icon={Ruler}
                label="Dimensions"
                value={service.specs?.dimensions}
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <SpecCard
                icon={Package}
                label="Capacity"
                value={service.specs?.capacity}
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <SpecCard
                icon={Navigation}
                label="Common Freight"
                value={service.specs?.topCommodities}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-28">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={stagger}
          >
            {/* OVERVIEW */}
            <ContentSection
              number="01"
              eyebrow="Service Overview"
              title={`A dispatch setup built around ${service.name}`}
            >
              <InfoParagraph>{overview}</InfoParagraph>

              <InfoParagraph>
                Our dispatch approach is built around keeping your equipment
                productive while reducing the amount of time you have to spend
                searching for freight, communicating with brokers, reviewing
                load details, and managing the day-to-day administrative side of
                your operation. We handle the coordination so you can stay
                focused on operating your truck safely and efficiently.
              </InfoParagraph>
            </ContentSection>

            {/* BEST FOR */}
            {(bestForText || commonFreightText) && (
              <ContentSection
                number="02"
                eyebrow="Equipment Fit"
                title="Where this equipment works best"
              >
                {bestForText && <InfoParagraph>{bestForText}</InfoParagraph>}

                {commonFreightText && (
                  <InfoParagraph>
                    This equipment is commonly used for{" "}
                    {commonFreightText.toLowerCase()}
                    Our team reviews the freight requirements, pickup and
                    delivery conditions, equipment specifications, and
                    operational details before presenting a load for
                    consideration.
                  </InfoParagraph>
                )}
              </ContentSection>
            )}

            {/* DISPATCH STRATEGY */}
            {(dispatchFocusText || dispatchSupportText) && (
              <ContentSection
                number="03"
                eyebrow="Dispatch Strategy"
                title="How we manage the dispatch process"
              >
                {dispatchFocusText && (
                  <InfoParagraph>{dispatchFocusText}</InfoParagraph>
                )}

                {dispatchSupportText && (
                  <InfoParagraph>{dispatchSupportText}</InfoParagraph>
                )}

                <InfoParagraph>
                  Communication remains central throughout the process. Load
                  information is reviewed before confirmation, important pickup
                  and delivery details are organized, and updates can be
                  coordinated as the shipment moves through its scheduled route.
                </InfoParagraph>
              </ContentSection>
            )}

            {/* FREIGHT */}
            {service.loadTypes && (
              <ContentSection
                number="04"
                eyebrow="Freight Profile"
                title="Freight and shipment considerations"
              >
                <InfoParagraph>
                  {paragraphFrom(service.loadTypes)}
                </InfoParagraph>

                <InfoParagraph>
                  Different freight types can require different loading methods,
                  appointment requirements, documentation, securement
                  procedures, or delivery expectations. Before a load is
                  accepted, these details are reviewed against the capabilities
                  of your equipment and the operating conditions of the
                  shipment.
                </InfoParagraph>
              </ContentSection>
            )}

            {/* REQUIREMENTS */}
            {requirementsText && (
              <ContentSection
                number="05"
                eyebrow="Carrier Readiness"
                title="What your operation should have ready"
              >
                <InfoParagraph>{requirementsText}</InfoParagraph>

                <InfoParagraph>
                  Having accurate carrier and equipment information available
                  helps the dispatch process move faster. Current operating
                  authority information, insurance documentation, equipment
                  details, and preferred operating areas should remain accurate
                  so that suitable opportunities can be evaluated without
                  unnecessary delays.
                </InfoParagraph>
              </ContentSection>
            )}

            {/* OPERATIONAL */}
            {operationalText && (
              <ContentSection
                number="06"
                eyebrow="Operational Details"
                title="Important factors we review before dispatch"
              >
                <InfoParagraph>{operationalText}</InfoParagraph>

                <InfoParagraph>
                  We also consider practical details such as pickup
                  appointments, delivery windows, equipment compatibility,
                  loading requirements, distance between available freight,
                  deadhead considerations, and the driver's preferred operating
                  area. The objective is to make each dispatch decision with the
                  actual operation in mind rather than treating every load the
                  same way.
                </InfoParagraph>
              </ContentSection>
            )}

            {/* USE CASES */}
            {useCasesText && (
              <ContentSection
                number="07"
                eyebrow="Real-World Use"
                title="Common ways carriers use this equipment"
              >
                <InfoParagraph>{useCasesText}</InfoParagraph>

                <InfoParagraph>
                  Whether the operation is focused on regional freight, longer
                  interstate runs, dedicated corridors, specialized shipments,
                  or a combination of different lanes, the dispatch process can
                  be adjusted around the carrier's equipment and preferred
                  operating style.
                </InfoParagraph>
              </ContentSection>
            )}
          </motion.div>

          {/* =================================================
              RIGHT SIDEBAR
          ================================================== */}
          <aside className="lg:sticky lg:top-24">
            {/* Dispatch fee card */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.07)]">

              <div className="p-6">
                {/* Fee */}
                <div className="rounded-2xl border border-[#F5C002]/30 bg-[#FFF9DF] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-500">
                    Dispatch Fee
                  </p>

                  <p className="mt-2 text-3xl font-black tracking-tight text-[#06213D]">
                    {dispatchFee}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Simple dispatch pricing for this equipment category.
                  </p>
                </div>

                {/* Service points */}
                <div className="mt-6 space-y-4">
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-navy/[0.07] text-primary-navy">
                      <ShieldCheck size={16} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Carrier-focused dispatch
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Dispatch decisions are based around your equipment and
                        operating preferences.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-navy/[0.07] text-primary-navy">
                      <Clock3 size={16} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Ongoing coordination
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Load communication and dispatch coordination throughout
                        the process.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-navy/[0.07] text-primary-navy">
                      <FileCheck2 size={16} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Load detail review
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Important shipment and equipment details are reviewed
                        before confirmation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-7 space-y-2.5">

                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-bold text-[#06213D] transition hover:border-primary-navy hover:bg-slate-50"
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Contact mini card */}
            <div className="mt-5 rounded-3xl border border-primary-navy/10 bg-primary-navy/[0.035] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-navy text-white">
                <PhoneCall size={17} />
              </div>

              <h3 className="mt-4 text-base font-extrabold text-[#06213D]">
                Need help choosing equipment?
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                If you are not sure which dispatch service fits your operation,
                contact our team and we can discuss your equipment and operating
                needs.
              </p>

              <button
                type="button"
                onClick={onOpenQuote}
                className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-primary-navy transition hover:text-[#06213D]"
              >
                Talk to our team
                <ArrowRight size={16} />
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
