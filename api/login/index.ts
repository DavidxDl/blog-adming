/* eslint-disable */

import { NextApiRequest, NextApiResponse } from "next";

interface data {
  acessToken: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const apiRes = await fetch("http://172.233.16.85/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: req.body.username, password: req.body.password }),
    });
    if (!apiRes.ok) {
      throw new Error("Wrong credentials");
    }
    const data: data = (await apiRes.json()) as data;
    res.status(200).json({acessToken: data.acessToken})
  } catch (error) {
    console.error(error);
    throw error;
  }
}
