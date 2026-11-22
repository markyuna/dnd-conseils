import Link from "next/link";

const links = [
  { key: "leads", href: "/admin/leads", label: "Leads" },
  { key: "trafic", href: "/admin/trafic", label: "Trafic" },
] as const;

export default function AdminNav({ active }: { active: "leads" | "trafic" }) {
  return (
    <nav className="flex gap-2" aria-label="Navigation admin">
      {links.map((l) => (
        <Link
          key={l.key}
          href={l.href}
          aria-current={l.key === active ? "page" : undefined}
          className={`rounded-full px-5 py-2.5 text-sm transition ${
            l.key === active
              ? "bg-[#17130f] text-white"
              : "bg-white text-[#17130f] hover:bg-[#17130f]/5"
          }`}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
