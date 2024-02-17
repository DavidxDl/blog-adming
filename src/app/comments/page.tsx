interface comment {
  email: string;
  text: string;
  timestamp: string;
  id: string;
}
export default async function Comments() {
  const comments: comment[] = await getComments();
  return (
    <>
      <h1 className="text-5xl font-extrabold">Posts</h1>
      {comments ? (
        comments.map((c) => (
          <div key={c.id}>
            <h2>{c.email}</h2>
            <p>{c.text}</p>
          </div>
        ))
      ) : (
        <p>no comments</p>
      )}
    </>
  );
}

async function getComments(): Promise<comment[]> {
  try {
    const res = await fetch("/api/comments");
    if (!res.ok) throw new Error("couldnt fetch comments");
    const data: comment[] = (await res.json()) as comment[];
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}