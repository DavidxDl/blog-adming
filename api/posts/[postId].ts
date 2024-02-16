/* eslint-disable */
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.body);
  try {
    const apiResponse = await fetch(
      `http://172.233.16.85/posts/${req.query.postId}`,
      {
        method: "PATCH",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      },
    );
    if (!apiResponse.ok)
      throw new Error(`error Patching /posts/${req.query.postId} body: ${req.body}`);
    res.status(200);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Failed to fetch data from API" });
  }
}
