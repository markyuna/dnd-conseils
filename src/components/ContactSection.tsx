"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-semibold mb-6">
          Parlons de votre projet
        </h2>

        <p className="text-neutral-600 mb-10">
          Expliquez-nous votre besoin, nous revenons vers vous rapidement.
        </p>

        <form className="space-y-4 text-left">
          <input placeholder="Nom" className="w-full p-3 border rounded-lg" />
          <input placeholder="Email" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Votre projet" className="w-full p-3 border rounded-lg" />

          <button className="w-full bg-black text-white py-3 rounded-lg">
            Demander une étude
          </button>
        </form>

      </div>
    </section>
  );
}