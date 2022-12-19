import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getFAQS(req, res);
    case "POST":
      return await saveFAQ(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getFAQS = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM faq");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveFAQ = async (req, res) => {
  try {
    const { id, pertanyaan, jawaban } = req.body;

    const result = await pool.query("INSERT INTO faq SET ?", {
      id,
      pertanyaan,
      jawaban,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
