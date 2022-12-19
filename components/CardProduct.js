import Image from "next/image";
import Link from "next/link";

export default function CardProduct({ product }) {
  return (
    <div className="mb-3 text-ijo">
      <div className="bg-ijo rounded-2xl p-12 flex justify-center gap-x-6">
        <Image src={`/productImages/01.jpg`} height={375} width={180} className="rounded-[28px]" />
        <Image src={`/productImages/02.png`} height={375} width={180} className="rounded-2xl" />
      </div>
      <div className="p-4 space-y-0.5">
        <p className="font-medium text-[25px]">0{product.id}</p>
        <h5 className="text-[60px] font-semibold ">{product.name}</h5>
        <p className="text-[18px]">{product.desc}</p>
        {/* <p className="font-semibold text-2xl">{product.price} $</p> */}
        <button className="mt-6">
          <Link href={`/products/${product.id}`} className="mt-6">
            <a key={product.id} className="rounded-xl border border-ijo py-[15px] px-[30px]">
              View Project
            </a>
          </Link>
        </button>
      </div>
    </div>
  );
}
