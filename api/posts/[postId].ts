/* eslint-disable */
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.body);
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // Abort after 10 seconds

    const apiResponse = await fetch(
      `http://172.233.16.85/posts/${req.query.postId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
        signal: controller.signal,
      },
    );

    clearTimeout(timeoutId); // Clear the timeout if the request completes within the timeout duration

    if (!apiResponse.ok) {
      throw new Error(`Error Patching /posts/${req.query.postId}, Status: ${apiResponse.status}`);
    }

    res.status(200).json({ success: true }); // Send a response indicating success
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Failed to fetch data from API" });
  }
}
