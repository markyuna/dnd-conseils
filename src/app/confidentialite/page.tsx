import Link from "next/link";
import Navbar from "@/components/Navbar";

const privacySections = [
  {
    title: "Données collectées",
    content: [
      "Lorsque vous remplissez un formulaire sur le site, DND Conseils peut collecter les informations suivantes : nom, prénom, adresse email, numéro de téléphone, type de projet, message et informations nécessaires à l’analyse de votre demande.",
      "Ces données sont transmises volontairement par l’utilisateur.",
    ],
  },
  {
    title: "Finalité de la collecte",
    content: [
      "Les données collectées sont utilisées uniquement pour répondre aux demandes envoyées via le site, recontacter l’utilisateur et assurer le suivi commercial ou administratif lié au projet.",
      "Aucune donnée personnelle n’est vendue à des tiers.",
    ],
  },
  {
    title: "Durée de conservation",
    content: [
      "Les données sont conservées pendant une durée raisonnable nécessaire au traitement de la demande et au suivi de la relation commerciale.",
      "L’utilisateur peut demander la suppression de ses données à tout moment.",
    ],
  },
  {
    title: "Droits de l’utilisateur",
    content: [
      "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’opposition, de suppression et de limitation du traitement de vos données personnelles.",
      "Pour exercer vos droits, vous pouvez nous contacter à l’adresse suivante : dndconseils@gmail.com.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement.",
      "Si des outils de mesure d’audience ou de suivi sont ajoutés ultérieurement, une information claire sera affichée à l’utilisateur.",
    ],
  },
  {
    title: "Sécurité",
    content: [
      "DND Conseils met en œuvre des mesures raisonnables pour protéger les données transmises via le site.",
      "Toutefois, aucun système de transmission ou de stockage électronique ne peut garantir une sécurité absolue.",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <Navbar variant="minimal" />

      <main className="min-h-screen bg-[#f8f5f2] px-4 pb-24 pt-32 text-[#161616] sm:px-6">
        <section className="mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8065]">
              Données personnelles
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-[#111] sm:text-5xl md:text-6xl">
              Politique de confidentialité
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/55">
              Cette page explique comment DND Conseils collecte, utilise et
              protège les données personnelles transmises via le site.
            </p>
          </div>

          <div className="grid gap-5">
            {privacySections.map((section) => (
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
            Pour toute demande relative à vos données personnelles, contactez
            DND Conseils à{" "}
            <a
              href="mailto:dndconseils@gmail.com"
              className="font-semibold text-[#8f7358] underline-offset-4 hover:underline"
            >
              dndconseils@gmail.com
            </a>
            . Vous pouvez également revenir à la{" "}
            <Link
              href="/"
              className="font-semibold text-[#8f7358] underline-offset-4 hover:underline"
            >
              page d’accueil
            </Link>
            .
          </div>
        </section>
      </main>
    </>
  );
}