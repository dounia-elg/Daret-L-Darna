

import photo1 from "../assets/home/photo1.avif";
import photo2 from "../assets/home/photo2.avif";
import photo3 from "../assets/home/photo3.avif";
import photo4 from "../assets/home/photo4.avif";
import photo5 from "../assets/home/photo5.avif";
import photo6 from "../assets/home/photo6.avif";
import { Link } from "react-router-dom";

const heroImages = [photo1, photo2, photo3];

const highlightCards = [
  {
    title: "Visites augmentées",
    desc: "Streaming 4K, capture 3D et notifications live des agents.",
    img: photo4,
  },
  {
    title: "Lead scoring intelligent",
    desc: "Priorisez vos prises de contact selon l’abonnement vendeur.",
    img: photo5,
  },
  {
    title: "Gouvernance Daret",
    desc: "Contrôles KYC, calendrier et messagerie audio sécurisée.",
    img: photo6,
  },
];

const journeys = [
  {
    title: "Visiteur curieux",
    steps: ["Landing multilingue", "Recherche rapide", "Lead instantané"],
  },
  {
    title: "Vendeur premium",
    steps: ["Publication validée", "Score visibilité", "Chat + notifications"],
  },
  {
    title: "Organisateur Daret",
    steps: ["Création cercle", "Calendrier tours", "Gestion contributions"],
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#fff8ef] to-[#f2e7da] text-[#2d1e16]">
      {/* Top banner */}
      <header className="border-b border-[#d7c3b4] bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#9c6b5c]">
              Plateforme Daret L'Darna
            </p>
            
          </div>
          <div className="flex gap-3">
            <Link
              to="/register"
              className="rounded-full border border-[#c09a89] px-5 py-2 text-sm font-medium text-[#3c2a22] transition hover:bg-[#f3e5d8]"
            >
              Créer un compte
            </Link>
            <Link
              to="/login"
              className="rounded-full bg-[#9c6b87] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#9c6b87]/30 transition hover:opacity-90"
            >
              Se connecter
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-[#f5d5c4]/60 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#dbc3c5]/60 blur-3xl" />
        </div>
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center rounded-full bg-[#f6ebe0] px-4 py-1 text-xs uppercase tracking-[0.4em] text-[#9c6b87]">
            Immobilier + TireLire
          </div>
          <h2 className="text-4xl font-semibold leading-tight text-[#2d1e16] md:text-5xl">
            Centralisez la recherche immobilière et la confiance Daret dans une
            interface unifiée.
          </h2>
          <p className="text-lg text-[#5f4638]">
            Filtrez des annonces certifiées, pilotez vos groupes, suivez les
            contributions et échangez avec vos membres sans quitter la page.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="flex-1 rounded-xl bg-linear-to-r from-[#d9b08c] to-[#b4846c] px-6 py-3 text-center text-base font-semibold text-[#2d1e16] shadow-lg shadow-[#d9b08c]/40 transition hover:translate-y-0.5">
              Lancer une recherche
            </button>
            <button className="flex-1 rounded-xl border border-[#c09a89] px-6 py-3 text-center text-base font-semibold text-[#3c2a22] transition hover:bg-white/60">
              Créer un groupe Daret
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm text-[#6a4f42] md:grid-cols-4">
            {[
              { label: "Biens premium", value: "1 200+" },
              { label: "Groupes actifs", value: "340" },
              { label: "Tours financés", value: "4 700" },
              { label: "Temps de réponse", value: "12 min" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-[#2d1e16]">
                  {stat.value}
                </p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="relative grid grid-cols-2 gap-4">
            {heroImages.map((img, index) => (
              <div
                key={img}
                className={`h-48 rounded-3xl border border-white/70 bg-cover bg-center shadow-lg shadow-[#bda79a]/50 ${
                  index === 1 ? "translate-y-8" : ""
                } ${index === 2 ? "col-span-2 h-56" : ""}`}
                style={{
                  backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.15), rgba(0,0,0,0.05)), url(${img})`,
                }}
              />
            ))}
           
          </div>
          <div className="mt-6 rounded-3xl bg-white/80 p-6 shadow-xl shadow-[#c8b3a5]/60 backdrop-blur">
            <h3 className="text-xl font-semibold text-[#3c2a22]">
              Recherche express
            </h3>
            <p className="mt-2 text-sm text-[#6a4f42]">
              Trouvez un bien ou un groupe en quelques critères.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <div>
                <label className="text-[#7f5b4c]">Mot-clé</label>
                <input
                  type="text"
                  placeholder="Villa, coworking, rooftop..."
                  className="mt-1 w-full rounded-xl border border-[#e3d3c6] bg-white px-4 py-2 text-[#2d1e16] placeholder:text-[#b8a399]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[#7f5b4c]">Budget max (MAD)</label>
                  <input
                    type="number"
                    className="mt-1 w-full rounded-xl border border-[#e3d3c6] bg-white px-4 py-2 text-[#2d1e16]"
                  />
                </div>
                <div>
                  <label className="text-[#7f5b4c]">Type</label>
                  <select className="mt-1 w-full rounded-xl border border-[#e3d3c6] bg-white px-4 py-2 text-[#2d1e16]">
                    <option className="text-black">Location</option>
                    <option className="text-black">Vente</option>
                    <option className="text-black">Groupe</option>
                  </select>
                </div>
              </div>
              <button className="w-full rounded-xl bg-[#9c6b87] py-3 text-sm font-semibold text-white transition hover:opacity-90">
                Explorer les résultats
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program highlights */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-[4xl] bg-white/80 p-8 shadow-2xl shadow-[#d6c2b4]/60 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-[#9c6b5c]">
                Expériences Daret
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#2d1e16]">
                Approuvez les annonces prioritaires et sécurisez vos tours.
              </h3>
            </div>
            <button className="rounded-full border border-[#c09a89] px-6 py-2 text-sm font-semibold text-[#3c2a22] transition hover:bg-[#f6ebe0]">
              Voir la roadmap produit
            </button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {highlightCards.map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-3xl border border-[#f0e4d9] bg-white shadow-lg shadow-[#d6c2b4]/40"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#2d1e16]">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-sm text-[#6a4f42]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time & groups */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-2">
        <div className="rounded-3xl border border-[#f0e4d9] bg-white/90 p-8 shadow-xl shadow-[#d6c2b4]/40 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-[#9c6b5c]">
            Notifications & chat
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-[#2d1e16]">
            Flux temps réel synchronisé avec vos équipes.
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-[#5f4638]">
            {[
              "Alertes critiques push + centre de notifications",
              "Présence live, reçus de lecture et pièces jointes",
              "Automatisations GitHub / JIRA pour les équipes produit",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-[#f9efe3] px-4 py-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-[#9c6b87]"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-[#f0e4d9] bg-white/90 p-8 shadow-xl shadow-[#d6c2b4]/40 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-[#9c6b5c]">
            Groupes Daret
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-[#2d1e16]">
            Transparence sur les tours et la fiabilité des membres.
          </h3>
          <div className="mt-6 space-y-4 text-sm text-[#5f4638]">
            <div className="flex items-center justify-between rounded-2xl border border-[#f0e4d9] px-4 py-3">
              <span>Contributions synchronisées</span>
              <span className="text-base font-semibold text-[#9c6b87]">
                +95%
              </span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-[#f0e4d9] px-4 py-3">
              <span>Score fiabilité membres</span>
              <span className="text-base font-semibold text-[#9c6b87]">
                Instantané
              </span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-[#f0e4d9] px-4 py-3">
              <span>Messagerie audio & tickets</span>
              <span className="text-base font-semibold text-[#9c6b87]">
                Beta privée
              </span>
            </div>
          </div>
          <button className="mt-8 w-full rounded-2xl bg-[#b4846c] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Voir les groupes ouverts
          </button>
        </div>
      </section>

      {/* Parcours utilisateurs */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[4xl] border border-[#f0e4d9] bg-white/80 p-8 shadow-xl shadow-[#d6c2b4]/50 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-[#9c6b5c]">
                Parcours utilisateurs
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[#2d1e16]">
                Trois journeys, une même plateforme orchestrée.
              </h3>
            </div>
            <span className="rounded-full bg-[#f6ebe0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#a06f79]">
              i18n FR / AR / EN
            </span>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {journeys.map((journey) => (
              <div
                key={journey.title}
                className="rounded-3xl border border-[#f0e4d9] bg-white/90 p-6 shadow-inner shadow-[#eadacd]"
              >
                <h4 className="text-lg font-semibold text-[#3c2a22]">
                  {journey.title}
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-[#5f4638]">
                  {journey.steps.map((step) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#a06f79]" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-sm font-semibold text-[#a06f79] underline-offset-4 hover:underline">
                  Voir le flow complet
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
