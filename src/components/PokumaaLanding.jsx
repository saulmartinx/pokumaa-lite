import { BRONEERI_URL, EPOOD_URL } from "../config"; // kohanda rada kui vaja

{/* HERO */}
<section className="min-h-[90vh] relative overflow-hidden flex items-center">
  {/* taust + overlay */}
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/hero-forest.jpg')" }}  /* pane oma loodusfoto siia */
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30" />

  {/* sisu */}
  <div className="relative z-10 container mx-auto px-6 max-w-5xl">
    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-cream drop-shadow-md">
      Tule Pokumaale!
    </h1>
    <p className="font-heading mt-4 text-cream/90 text-lg sm:text-xl max-w-2xl">
      Seiklus kogu perele – loodus, mäng ja maagia.
    </p>

    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href={BRONEERI_URL}
        aria-label="Broneeri külastus"
        className="inline-block px-6 py-3 bg-[linear-gradient(90deg,#3A5A40,#FFD166)] text-forest rounded-xl hover:scale-[1.02] transition focus:outline-none focus:ring-2 focus:ring-honey"
      >
        Broneeri külastus
      </a>
      <a
        href={EPOOD_URL}
        aria-label="Osta Poku koju"
        className="inline-block px-6 py-3 bg-[linear-gradient(90deg,#3A5A40,#FFD166)] text-forest rounded-xl hover:scale-[1.02] transition focus:outline-none focus:ring-2 focus:ring-honey"
      >
        Osta Poku koju
      </a>
    </div>
  </div>
</section>
