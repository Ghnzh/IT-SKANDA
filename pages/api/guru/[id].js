import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getGuru(req, res);
    case "DELETE":
      return await deleteGuru(req, res);
    case "PUT":
      return await updateGuru(req, res);
    default:
      return res.status(400).json({ message: "bad request" });
  }
}

const getGuru = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM guru WHERE id = ?", [req.query.id]);
    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteGuru = async (req, res) => {
  try {
    await pool.query("DELETE FROM guru WHERE id = ?", [req.query.id]);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateGuru = async (req, res) => {
  try {
    console.log(req.body);
    await pool.query("UPDATE guru SET ? WHERE id = ?", [req.body, req.query.id]);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
