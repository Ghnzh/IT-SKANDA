import Image from "next/image";
import Link from "next/link";

function CardGuru({ guru }) {
  return (
    <Link href={`/about-us/${guru.id}`}>
      <a className="p-6 mb-3" key={guru.id}>
        <div className="flex mx-auto">
          <Image src={`/guruImages/${guru.foto_guru}`} height={300} width={300} alt="fotoGuru" className="rounded-full bg-cover" />
        </div>
        <div className="text-center mt-2">
          <h1 className="text-2xl font-semibold ">{guru.nama_guru}</h1>
          <p className="text-sm text-gray-400 ">{guru.bidang_studi}</p>
          {/* <p className="text-gray-800 ">{guru.moto}</p> */}
        </div>
      </a>
    </Link>
  );
}

export default CardGuru;
