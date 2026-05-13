import Link from "next/link";
import Navbar from "@/components/Navbar";

const sections = [
  {
    title: "Éditeur du site",
    content: [
      "DND Conseils",
      "Responsable de publication : Denis — DND Conseils",
      "Email : dndconseils@gmail.com",
      "Site internet : www.dnd-conseils.fr",
    ],
  },
  {
    title: "Hébergement",
    content: [
      "Le site est hébergé par Vercel Inc.",
      "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
      "Site : vercel.com",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "L’ensemble des contenus présents sur ce site, incluant les textes, images, graphismes, logos, icônes et éléments visuels, est protégé par le droit de la propriété intellectuelle.",
      "Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable est interdite.",
    ],
  },
  {
    title: "Responsabilité",
    content: [
      "DND Conseils met tout en œuvre pour fournir des informations fiables et actualisées.",
      "Toutefois, les informations diffusées sur ce site sont données à titre indicatif et ne remplacent pas une analyse personnalisée du projet.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar variant="minimal" />

      <main className="min-h-screen bg-[#f8f5f2] px-4 pb-24 pt-32 text-[#161616] sm:px-6">
        <section className="mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8065]">
              Informations légales
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-[#111] sm:text-5xl md:text-6xl">
              Mentions légales
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/55">
              Retrouvez ici les informations relatives à l’éditeur du site, à
              son hébergement et à l’utilisation des contenus publiés.
            </p>
          </div>

          <div className="grid gap-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:p-8"
              >
                <h2 className="text-xl font-semibold tracking-[-0.035em] text-[#111]">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-3 text-sm leading-7 text-black/60 sm:text-base">
                  {section.content.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#b49a7c]/25 bg-[#fff8f1] p-6 text-sm leading-7 text-black/60 sm:p-8">
            Pour toute question concernant le site ou ses contenus, vous pouvez
            nous contacter via la page{" "}
            <Link
              href="/devis?type=contact"
              className="font-semibold text-[#8f7358] underline-offset-4 hover:underline"
            >
              contact
            </Link>
            .
          </div>
        </section>
      </main>
    </>
  );
}