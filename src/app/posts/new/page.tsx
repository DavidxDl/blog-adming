"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { type post } from "../page";

export default function NewPost() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [published, setPublished] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const post: post = {
      title: title,
      text: text,
      published: published,
    };
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (res.status === 200) router.push("/posts");
  }

  return (
    <>
      <h1 className="text-5xl font-extrabold">New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title" className="label-text">
            Title:{" "}
          </label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle((t) => (t = e.target.value))}
            required
            minLength={5}
            className=" valid:border-2 valid:border-green-500 valid:shadow-green-700  transition-transform p-1 bg-white w-full shadow-inner text-black shadow-black focus:scale-110  "
          />
        </div>
        <div className="form-control">
          <label htmlFor="text" className="label-text">
            Text:{" "}
          </label>
          <textarea
            value={text}
            onChange={(e) => setText((t) => (t = e.target.value))}
            name="text"
            id="text"
            className="textarea-md bg-white text-black shadow-black shadow-inner p-1 resize-y"
          ></textarea>
        </div>
        <div className="form-control flex-row gap-2 mt-2">
          <label htmlFor="published" className="label-text">
            Published
          </label>
          <input
            id="published"
            checked={published}
            onChange={(e) => {
              console.log(
                `the published state is ${published} and the value of the input is ${e.target.value}`,
              );
              setPublished((p) => (p = e.target.checked));
            }}
            name="published"
            type="checkbox"
            className="checkbox-md"
          />
        </div>
        <input
          type="submit"
          className="mt-2 transition:transform focus:translate-y-1 shadow-black font-bold text-base btn self-center"
          value="Submit"
        />
      </form>
    </>
  );
}
