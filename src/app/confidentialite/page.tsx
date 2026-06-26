import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Politique de confidentialité | DND Conseils",
  description: "Politique de confidentialité et traitement des données personnelles de DND Conseils, conformément au RGPD.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    id: "responsable",
    title: "1. Responsable du traitement",
    text: "Le responsable du traitement des données personnelles collectées via ce site est :\n\nDND Conseils — Denis\nEmail : dndconseil75@gmail.com\nTéléphone : +33 6 04 52 24 05",
  },
  {
    id: "donnees",
    title: "2. Données collectées et finalités",
    rows: [
      ["Nom, prénom", "Identifier la personne et personnaliser la réponse", "Intérêt légitime / Exécution d'un contrat"],
      ["Email", "Répondre à la demande et assurer le suivi", "Intérêt légitime / Exécution d'un contrat"],
      ["Téléphone", "Prise de contact à la demande de l'utilisateur", "Consentement"],
      ["Description du projet", "Analyser le besoin et formuler une proposition", "Exécution d'un contrat"],
      ["Documents joints (photos, devis…)", "Analyse technique du projet", "Exécution d'un contrat"],
    ],
  },
  {
    id: "conservation",
    title: "3. Durée de conservation",
    text: "Les données sont conservées pendant 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL pour la gestion des prospects et clients. À l'issue de cette période, elles sont supprimées ou anonymisées. L'utilisateur peut demander leur suppression anticipée à tout moment.",
  },
  {
    id: "destinataires",
    title: "4. Destinataires des données",
    text: "Les données collectées sont traitées uniquement par DND Conseils et ne sont jamais vendues, louées ou cédées à des tiers à des fins commerciales. Elles peuvent être transmises à des prestataires techniques strictement nécessaires au fonctionnement du service (hébergement, messagerie) dans le cadre d'accords de confidentialité appropriés.",
  },
  {
    id: "transferts",
    title: "5. Transferts hors Union européenne",
    text: "Le site est hébergé par Vercel Inc. (États-Unis). Ces transferts sont encadrés par les Clauses Contractuelles Types de la Commission européenne, conformément à l'article 46 du RGPD. Aucune autre donnée n'est transférée hors de l'Union européenne.",
  },
  {
    id: "droits",
    title: "6. Vos droits",
    items: [
      ["Droit d'accès", "Obtenir une copie des données vous concernant (art. 15 RGPD)"],
      ["Droit de rectification", "Corriger des données inexactes ou incomplètes (art. 16)"],
      ["Droit à l'effacement", "Demander la suppression de vos données (art. 17)"],
      ["Droit d'opposition", "Vous opposer au traitement fondé sur l'intérêt légitime (art. 21)"],
      ["Droit à la limitation", "Suspendre temporairement un traitement (art. 18)"],
      ["Droit à la portabilité", "Recevoir vos données dans un format structuré (art. 20)"],
    ],
    footer: "Pour exercer ces droits : dndconseil75@gmail.com. Réponse sous 30 jours.",
  },
  {
    id: "cookies",
    title: "7. Cookies et traceurs",
    text: "Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement (session, sécurité). Aucun cookie publicitaire, de profilage ou de suivi tiers n'est déposé sans votre consentement. Si des outils d'analyse d'audience venaient à être ajoutés, une demande de consentement explicite vous serait présentée conformément à la délibération CNIL n° 2020-091.",
  },
  {
    id: "securite",
    title: "8. Sécurité",
    text: "DND Conseils met en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation. Les données transmises via le formulaire de contact sont acheminées via des connexions sécurisées (HTTPS/TLS).",
  },
  {
    id: "cnil",
    title: "9. Réclamation auprès de la CNIL",
    text: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) : www.cnil.fr — 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.",
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <Navbar variant="minimal" />

      <main className="min-h-screen bg-[#f8f5f2] px-4 pb-20 pt-32 text-[#161616] sm:px-6">
        <div className="mx-auto max-w-3xl">

          {/* Header */}
          <div className="mb-10 border-b border-[#e5dfd8] pb-8">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9a8065]">
              Données personnelles · RGPD
            </p>
            <h1 className="text-3xl font-semibold tracking-[-0.045em] text-[#111] sm:text-4xl">
              Politique de confidentialité
            </h1>
            <p className="mt-3 text-sm text-[#7a7068]">
              Dernière mise à jour : juin 2025 · Conforme au Règlement (UE) 2016/679
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="mb-3 text-base font-semibold text-[#17130f]">
                  {section.title}
                </h2>

                {/* Table layout for donnees */}
                {section.rows && (
                  <div className="overflow-x-auto rounded-2xl border border-[#e5dfd8] bg-white">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[#ede8e1] bg-[#faf8f5]">
                          <th className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a8065]">Donnée</th>
                          <th className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a8065]">Finalité</th>
                          <th className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a8065]">Base légale</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ede8e1]">
                        {section.rows.map(([donnee, finalite, base]) => (
                          <tr key={donnee}>
                            <td className="px-4 py-3 font-medium text-[#2c2520]">{donnee}</td>
                            <td className="px-4 py-3 text-[#5a534c]">{finalite}</td>
                            <td className="px-4 py-3 text-[#8a7060]">{base}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Key-value list for droits */}
                {section.items && (
                  <>
                    <dl className="divide-y divide-[#ede8e1] rounded-2xl border border-[#e5dfd8] bg-white overflow-hidden">
                      {section.items.map(([label, value]) => (
                        <div key={label} className="grid grid-cols-[160px_1fr] gap-3 px-4 py-3 sm:grid-cols-[200px_1fr]">
                          <dt className="text-xs font-medium text-[#9a8065]">{label}</dt>
                          <dd className="text-sm text-[#5a534c]">{value}</dd>
                        </div>
                      ))}
                    </dl>
                    {section.footer && (
                      <p className="mt-3 text-xs text-[#7a7068]">{section.footer}</p>
                    )}
                  </>
                )}

                {/* Plain text */}
                {section.text && (
                  <p className="whitespace-pre-line text-sm leading-7 text-[#5a534c]">
                    {section.text}
                  </p>
                )}
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-12 rounded-2xl border border-[#b49a7c]/25 bg-[#fff8f1] px-5 py-4 text-sm leading-7 text-[#6a5f54]">
            Pour toute demande relative à vos données :{" "}
            <a
              href="mailto:dndconseil75@gmail.com"
              className="font-semibold text-[#8f7358] underline-offset-3 hover:underline"
            >
              dndconseil75@gmail.com
            </a>
            {" "}· Retour à la{" "}
            <Link href="/" className="font-semibold text-[#8f7358] underline-offset-3 hover:underline">
              page d'accueil
            </Link>.
          </div>

        </div>
      </main>
    </>
  );
}
