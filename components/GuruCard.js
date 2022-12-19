import Link from "next/link";

function GuruCard({ guru }) {
  return (
    <Link href={`/dashboard/guru/${guru.id}`}>
      <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 mb-3" key={guru.id}>
        <h5 className="text-2xl font-semibold tracking-tight text-gray-900">{guru.nama_guru}</h5>
        <p className="text-sm text-gray-400 ">{guru.bidang_studi}</p>
        <p className="text-gray-800 ">{guru.moto}</p>
      </a>
    </Link>
  );
}

export default GuruCard;
