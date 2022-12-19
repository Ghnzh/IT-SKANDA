import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getGuru(req, res);
    case "POST":
      return await saveGuru(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getGuru = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM guru");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveGuru = async (req, res) => {
  try {
    const { foto_guru, nama_guru, tempat_lahir, tanggal_lahir, bidang_studi, moto } = req.body;

    const result = await pool.query("INSERT INTO guru SET ?", {
      foto_guru,
      nama_guru,
      tempat_lahir,
      tanggal_lahir,
      bidang_studi,
      moto,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
