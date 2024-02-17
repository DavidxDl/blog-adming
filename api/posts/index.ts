/* eslint-disable */

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    if (req.method === "GET") {
      const apiResponse = await fetch("http://172.233.16.85/posts", {
        cache: "no-cache",
      });
      const data = await apiResponse.json();
      res.status(200).json(data);
      return;
    } else {
      const apiResponse = await fetch("http://172.233.16.85/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
        signal: controller.signal
      });
      if (!apiResponse.ok) {
        throw new Error(`couldnt POST to the api`);
      }
      clearTimeout(timeoutId);
      res.statusCode = 200;
    }
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Failed to fetch data from API" });
    throw error;
  }
}
