"use client";

import { useState } from "react";
import { type post } from "~/app/posts/page";

interface Props {
  post: post;
}
export default function PostTr({ post }: Props) {
  const [published, setPublished] = useState(post.published);
  async function handleClick() {
    console.log("updating data base");
    const response = await fetch(`/api/posts/${post._id}`, {
      method: "PATCH",
      cache: "no-cache",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ published: !published }),
    });
    console.log(response);
    if (response.ok) setPublished((p) => (p = !p));
  }
  return (
    <tr className="" key={post._id}>
      <td>{post.title}</td>
      <td>{post.timestamp}</td>
      <td
        className="text-center hover:cursor-pointer"
        onClick={handleClick}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        tabIndex={0}
      >
        {published === true ? `🟢` : `🔴`}
      </td>
    </tr>
  );
}
