import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getBlogs(req, res);
    case "POST":
      return await saveBlog(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getBlogs = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM blog");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveBlog = async (req, res) => {
  try {
    const { id, judul, desc, penulis, tanggal_dibuat } = req.body;

    const result = await pool.query("INSERT INTO blog SET ?", {
      id,
      judul,
      desc,
      penulis,
      tanggal_dibuat,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
