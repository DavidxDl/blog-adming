/* eslint-disable */

export default async function handler(req, res) {
  try {
    const apiResponse = await fetch(
      `http://172.233.16.85/posts/${req.params.postId}`,
      {
        method: "PATCH",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: req.body,
      },
    );
    if (!apiResponse.ok)
      throw new Error(`error Patching /posts/${req.params.postId}`);
    res.status(200);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Failed to fetch data from API" });
  }
}
