import Link from "next/link";

export function PrestasiCard({ prestasi }) {
  return (
    <Link href={`/dashboard/prestasi/${prestasi.id}`}>
      <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 mb-3" key={prestasi.id}>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">{prestasi.nama_murid}</h5>
        <p className="font-normal text-gray-700 ">{prestasi.kelas}</p>
        <p className="font-semibold text-gray-800 text-2xl">{prestasi.prestasi}</p>
      </a>
    </Link>
  );
}
