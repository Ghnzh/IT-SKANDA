import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export function BlogForm() {
  const [blog, setBlog] = useState({
    judul: "",
    deskripsi: "",
    penulis: "",
    tanggal_dibuat: "",
  });
  const router = useRouter();

  useEffect(() => {
    const fetchBlog = async (id) => {
      try {
        const { data } = await axios.get("/api/blogs/" + id);
        setBlog(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (router.query?.id) {
      fetchBlog(router.query.id);
    }
    console.log("called");
  }, [router.query.id]);

  const handleChange = ({ target: { name, value } }) => setBlog({ ...blog, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (router.query?.id) {
        await axios.put("/api/blogs/" + router.query.id, {
          judul: blog.judul,
          desc: blog.desc,
          price: blog.price,
        });
        toast.success("Task Updated", {
          position: "bottom-center",
        });
      } else {
        await axios.post("/api/blogs", blog);
        toast.success("Task Saved", {
          position: "bottom-center",
        });
      }

      router.push("/dashboard/blogs");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="judul">
            Judul Blog
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            type="text"
            placeholder="judul"
            id="judul"
            name="judul"
            onChange={handleChange}
            value={blog.judul}
            autoComplete="off"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="desc" className="block text-gray-700 dark:text-white font-bold mb-2 text-sm">
            Write a Description
          </label>
          <textarea
            name="desc"
            id="desc"
            rows="2"
            placeholder="blog desc"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            onChange={handleChange}
            value={blog.desc}
          ></textarea>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{router.query?.id ? "Update blog" : "Save blog"}</button>
      </form>
    </div>
  );
}
