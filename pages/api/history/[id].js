import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getHistory(req, res);
    case "DELETE":
      return await deleteHistory(req, res);
    case "PUT":
      return await updateHistory(req, res);
    default:
      return res.status(400).json({ message: "bad request" });
  }
}

const getHistory = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM history WHERE id = ?", [req.query.id]);
    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteHistory = async (req, res) => {
  try {
    await pool.query("DELETE FROM history WHERE id = ?", [req.query.id]);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateHistory = async (req, res) => {
  try {
    console.log(req.body);
    await pool.query("UPDATE history SET ? WHERE id = ?", [req.body, req.query.id]);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
