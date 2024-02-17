/* eslint-disable */

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const apiRes = await fetch("172.233.16.85/comments");
    if (!apiRes.ok) throw new Error("couldnt fetch comments from api");
    const data = await apiRes.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error});
    throw error;
  }
}
