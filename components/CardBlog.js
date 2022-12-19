import Image from "next/image";
import Link from "next/link";

export default function CardBlog({ blog }) {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <a>
        <div className="text-ijo select-none">
          <div className="rounded-2xl">
            <Image src={`/blogImages/gurun.jpg`} height={250} width={400} className="bg-white rounded-2xl hover:scale-105 duration-500" />
          </div>
          <div className="p-2">
            <h2 className="mb-2 text-[22px] font-semibold tracking-tight">{blog.judul}</h2>
          </div>
        </div>
      </a>
    </Link>
  );
}
