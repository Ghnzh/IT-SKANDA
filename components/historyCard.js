import Link from "next/link";

export function HistoryCard({ history }) {
  return (
    <Link href={`/about-us/${history.id}`}>
      <a key={history.id}>
        <div className="flex items-center border-l-[6px] border-l-green-500 border-[#666] border rounded-lg p-6 w-full justify-between hover:scale-95 duration-500 bg-white">
          <img src={`/public/${history.gambar}`} className="rounded-lg p-4" />
          <div>
            <p className="font-semibold text-gray-600 text-lg">{history.judul}</p>
            <p className="font-medium text-gray-400 max-w-prose">{history.subJudul}</p>
          </div>
          <div className="grid justify-items-end space-y-4">
            <p className="font-medium text-white bg-green-500 rounded-lg px-4 py-2 capitalize">{history.aksi}</p>
            <div className="grid justify-items-end">
              <p className="font-medium text-gray-600">{history.admin}</p>
              <p className="text-sm text-gray-600">{history.tanggal}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
