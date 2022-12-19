import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getPrestasi(req, res);
    case "POST":
      return await savePrestasi(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getPrestasi = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM prestasi");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const savePrestasi = async (req, res) => {
  try {
    const { id, nama_murid, kelas, prestasi, nama_lomba } = req.body;

    const result = await pool.query("INSERT INTO prestasi SET ?", {
      id,
      nama_murid,
      kelas,
      prestasi,
      nama_lomba,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
