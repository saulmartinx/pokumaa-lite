import React from "react";
import { motion } from "framer-motion";
import { BRONEERI_URL, EPOOD_URL } from "../config";

const fadeParent = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeChild = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function PokumaaLanding() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[90vh] relative overflow-hidden flex items-center">
        {/* taust + overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/252853-forest-light-and-mother.jpg')" }} // kohanda rada kui pilt public/ juurel
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30" />

        {/* sisu */}
        <motion.div
          className="relative z-10 container mx-auto px-6 max-w-5xl"
          variants={fadeParent}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-cream drop-shadow-md"
            variants={fadeChild}
          >
            Tule Pokumaale!
          </motion.h1>

          <motion.p
            className="font-heading mt-4 text-cream/90 text-lg sm:text-xl max-w-2xl"
            variants={fadeChild}
          >
            Seiklus kogu perele – loodus, mäng ja maagia.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-4" variants={fadeChild}>
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
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
