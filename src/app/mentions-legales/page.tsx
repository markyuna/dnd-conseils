import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Mentions légales | DND Conseils",
  description: "Mentions légales du site DND Conseils — éditeur, hébergement, propriété intellectuelle et responsabilité.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    id: "editeur",
    title: "1. Éditeur du site",
    items: [
      ["Raison sociale", "DND Conseils"],
      ["Statut", "Auto-entrepreneur"],
      ["SIRET", "[À compléter]"],
      ["Responsable de publication", "Denis — DND Conseils"],
      ["Adresse", "[Adresse du siège social — À compléter]"],
      ["Téléphone", "+33 6 04 52 24 05"],
      ["Email", "dndconseil75@gmail.com"],
      ["Site", "www.dnd-conseils.fr"],
    ],
  },
  {
    id: "hebergement",
    title: "2. Hébergement",
    items: [
      ["Hébergeur", "Vercel Inc."],
      ["Adresse", "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis"],
      ["Site", "vercel.com"],
    ],
  },
  {
    id: "propriete",
    title: "3. Propriété intellectuelle",
    text: "L'ensemble des contenus diffusés sur ce site (textes, visuels, logos, structure, organisation) est protégé par le droit de la propriété intellectuelle et appartient à DND Conseils ou à ses ayants droit. Toute reproduction, représentation, adaptation ou exploitation partielle ou totale des contenus, par quelque procédé que ce soit, sans autorisation préalable et écrite de DND Conseils, est strictement interdite et constituerait une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.",
  },
  {
    id: "responsabilite",
    title: "4. Responsabilité",
    text: "Les informations publiées sur ce site sont fournies à titre indicatif et à des fins d'information générale. Elles ne constituent pas un conseil personnalisé et ne sauraient engager la responsabilité de DND Conseils en l'absence d'une mission formellement confiée. DND Conseils ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder, ni des erreurs ou omissions dans les contenus publiés.",
  },
  {
    id: "liens",
    title: "5. Liens hypertextes",
    text: "Le site peut contenir des liens vers des sites tiers. DND Conseils ne contrôle pas le contenu de ces sites et n'en assume aucune responsabilité. La création de liens hypertextes pointant vers le site www.dnd-conseils.fr est soumise à autorisation préalable.",
  },
  {
    id: "droit",
    title: "6. Droit applicable",
    text: "Le présent site et ses mentions légales sont régis par le droit français, notamment par la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN). En cas de litige, les juridictions françaises seront seules compétentes.",
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar variant="minimal" />

      <main className="min-h-screen bg-[#f8f5f2] px-4 pb-20 pt-32 text-[#161616] sm:px-6">
        <div className="mx-auto max-w-3xl">

          {/* Header */}
          <div className="mb-10 border-b border-[#e5dfd8] pb-8">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9a8065]">
              Informations légales
            </p>
            <h1 className="text-3xl font-semibold tracking-[-0.045em] text-[#111] sm:text-4xl">
              Mentions légales
            </h1>
            <p className="mt-3 text-sm text-[#7a7068]">
              Dernière mise à jour : juin 2025 · Site édité par DND Conseils
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="mb-3 text-base font-semibold text-[#17130f]">
                  {section.title}
                </h2>

                {section.items ? (
                  <dl className="divide-y divide-[#ede8e1] rounded-2xl border border-[#e5dfd8] bg-white overflow-hidden">
                    {section.items.map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[140px_1fr] gap-3 px-4 py-3 sm:grid-cols-[180px_1fr]">
                        <dt className="text-xs font-medium text-[#9a8065]">{label}</dt>
                        <dd className="text-sm text-[#2c2520]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-sm leading-7 text-[#5a534c]">{section.text}</p>
                )}
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-12 rounded-2xl border border-[#b49a7c]/25 bg-[#fff8f1] px-5 py-4 text-sm leading-7 text-[#6a5f54]">
            Pour toute question relative au site ou à son contenu :{" "}
            <a
              href="mailto:dndconseil75@gmail.com"
              className="font-semibold text-[#8f7358] underline-offset-3 hover:underline"
            >
              dndconseil75@gmail.com
            </a>{" "}
            ou via la page{" "}
            <Link href="/devis?type=contact" className="font-semibold text-[#8f7358] underline-offset-3 hover:underline">
              contact
            </Link>.
          </div>

        </div>
      </main>
    </>
  );
}
