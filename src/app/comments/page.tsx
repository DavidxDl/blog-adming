interface comment {
  email: string;
  message: string;
  timestamp: string;
  _id: string;
}
export default async function Comments() {
  const comments: comment[] = await getComments();
  return (
    <>
      <h1 className="text-5xl font-extrabold">Posts</h1>
      {comments ? (
        comments.map((c) => (
          <div className="min-w-80 max-w-80" key={c._id}>
            <h2>👤{c.email}</h2>
            <p>{c.message}</p>
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
    const res = await fetch("http://172.233.16.85/posts/comments");
    const data: comment[] = (await res.json()) as comment[];
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
