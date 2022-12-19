import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export function GuruForm() {
  const [guru, setGuru] = useState({
    foto_guru: "",
    nama_guru: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    bidang_studi: "",
    moto: "",
  });
  const router = useRouter();

  useEffect(() => {
    const fetchGuru = async (id) => {
      try {
        const { data } = await axios.get("/api/guru/" + id);
        setGuru(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (router.query?.id) {
      fetchGuru(router.query.id);
    }
    console.log("called");
  }, [router.query.id]);

  const handleChange = ({ target: { name, value } }) => setGuru({ ...guru, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (router.query?.id) {
        await axios.put("/api/guru/" + router.query.id, {
          foto_guru: guru.foto,
          nama_guru: guru.nama_guru,
          tempat_lahir: guru.tempat_lahir,
          tanggal_lahir: guru.tanggal_lahir,
          bidang_studi: guru.bidang_studi,
          moto: guru.moto,
        });
        toast.success("Task Updated", {
          position: "bottom-center",
        });
      } else {
        await axios.post("/api/guru", guru);
        toast.success("Task Saved", {
          position: "bottom-center",
        });
      }

      router.push("/dashboard/guru");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="foto" className="block text-gray-700 dark:text-white font-bold mb-2 text-sm">
            Foto Guru
          </label>
          <input
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            name="foto"
            onChange={handleChange}
            value={guru.foto}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="nama">
            Nama Guru
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            type="text"
            placeholder="nama"
            id="nama_guru"
            name="nama_guru"
            onChange={handleChange}
            value={guru.nama_guru}
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tempat_lahir" className="block text-gray-700 dark:text-white font-bold mb-2 text-sm">
            Tempat Lahir :
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            name="tempat_lahir"
            onChange={handleChange}
            value={guru.tempat_lahir}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tanggal_lahir" className="block text-gray-700 dark:text-white font-bold mb-2 text-sm">
            tanggal lahir:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            name="tanggal_lahir"
            onChange={handleChange}
            value={guru.tanggal_lahir}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bidang_studi" className="block text-gray-700 dark:text-white font-bold mb-2 text-sm">
            guru bidang_studi:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            name="bidang_studi"
            onChange={handleChange}
            value={guru.bidang_studi}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="moto" className="block text-gray-700 dark:text-white font-bold mb-2 text-sm">
            moto:
          </label>
          <input
            type="textarea"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            name="moto"
            onChange={handleChange}
            value={guru.moto}
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{router.query?.id ? "Update guru" : "Save guru"}</button>
      </form>
    </div>
  );
}
