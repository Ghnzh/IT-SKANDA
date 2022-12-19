import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getHistory(req, res);
    case "POST":
      return await saveHistory(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getHistory = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM history");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveHistory = async (req, res) => {
  try {
    const { id, gambar, judul, subJudul, aksi, admin, tanggal } = req.body;

    const result = await pool.query("INSERT INTO history SET ?", {
      id,
      gambar,
      judul,
      subJudul,
      aksi,
      admin,
      tanggal,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
