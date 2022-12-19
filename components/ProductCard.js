import Link from "next/link";

export function ProductCard({ product }) {
  return (
    <Link href={`/dashboard/products/${product.id}`}>
      <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 mb-3" key={product.id}>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">{product.name}</h5>
        <p className="font-normal text-gray-700 ">{product.desc}</p>
        <p className="font-semibold text-gray-800 text-2xl">{product.price} $</p>
      </a>
    </Link>
  );
}
