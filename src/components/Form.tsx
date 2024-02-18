"use client";

import { useRouter } from "next/router";
import { useState } from "react";

interface data {
  acessToken: string;
}

export default function Form() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      if (!res.ok) {
        throw new Error("Wrong credentials");
      }
      setUsername("");
      setPassword("");
      const data: data = (await res.json()) as data;
      console.log(data);
      localStorage.setItem("token", data.acessToken);
      await router.push("/posts");
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  return (
    <>
      <h1 className="text-5xl font-extrabold">Blog Admin</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="text-xl" htmlFor="username">
            Username:
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername((user) => (user = e.target.value))}
            required
            className="valid:border-2 valid:border-green-500 valid:shadow-green-700  transition-transform p-1 bg-white w-full shadow-inner text-black shadow-black focus:scale-110"
          />
        </div>
        <div className="form-control">
          <label className="text-xl" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword((pass) => (pass = e.target.value))}
            className="valid:border-2 valid:border-green-500 valid:shadow-green-700  transition-transform p-1 bg-white w-full shadow-inner text-black shadow-black focus:scale-110"
          />
        </div>
        <div className="mt-2 form-control">
          <input
            type="submit"
            className="transition:transform focus:translate-y-1 shadow-black font-bold text-base btn self-center"
            value="Submit"
          />
        </div>
      </form>
    </>
  );
}
