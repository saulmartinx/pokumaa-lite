const stats = [
  { label: 'Külastajaid', value: '10k+' },
  { label: 'Mänge', value: '25' },
  { label: 'Merch tooteid', value: '50+' },
];

const PokumaaLanding = () => (
  <div className="flex flex-col items-center text-center">
    <section className="py-20 w-full bg-gradient-to-b from-green-100 to-white">
      <h1 className="text-4xl font-bold mb-4">Tere tulemast Pokumaale</h1>
      <p className="max-w-xl mx-auto mb-8">
        Avasta Pokumaa maagiline maailm, kus ootavad ees seiklused, sõbrad ja palju
        põnevaid mänge.
      </p>
      <div className="space-x-4">
        <a
          href="#"
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Liitu
        </a>
        <a
          href="#"
          className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50"
        >
          Vaata rohkem
        </a>
      </div>
    </section>

    <section className="py-12 w-full bg-white">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-3xl font-extrabold text-green-600">
              {stat.value}
            </span>
            <span className="mt-2 text-sm text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="py-12 w-full bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Meie Merch</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <img
          src="/merch1.svg"
          alt="T-särk"
          className="w-40 h-40 object-cover rounded shadow"
        />
        <img
          src="/merch2.svg"
          alt="Müts"
          className="w-40 h-40 object-cover rounded shadow"
        />
        <img
          src="/merch3.svg"
          alt="Kruus"
          className="w-40 h-40 object-cover rounded shadow"
        />
      </div>
    </section>

    <section className="py-20 w-full bg-green-600 text-white">
      <h2 className="text-3xl font-bold mb-4">Valmis seikluseks?</h2>
      <a
        href="#"
        className="px-8 py-3 bg-white text-green-600 font-semibold rounded-md hover:bg-gray-100"
      >
        Alusta kohe
      </a>
    </section>
  </div>
);

export default PokumaaLanding;
