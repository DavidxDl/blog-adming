/* eslint-disable */

export default async function handler(req, res) {
  try {
    const apiResponse = await fetch("http://172.233.16.85/posts", {
      cache: "no-cache",
    });
    const data = await apiResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Failed to fetch data from API" });
  }
}
