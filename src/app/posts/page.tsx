import PostTr from "~/components/PostTr";

export interface post {
  title: string;
  published: boolean;
  _id?: string;
  text: string;
  timestamp?: string;
}

export default async function Posts() {
  const posts: post[] = await getPosts();
  return (
    <>
      <h1 className="text-5xl font-extrabold">Posts</h1>
      <table className="table ">
        <thead>
          <tr className="text-lg font-extrabold">
            <th>Title</th>
            <th>Date</th>
            <th className="text-center">Published</th>
          </tr>
        </thead>
        <tbody>
          {posts ? (
            posts.map((post) => <PostTr key={post._id} post={post} />)
          ) : (
            <p>no posts...</p>
          )}
        </tbody>
      </table>
    </>
  );
}

async function getPosts(): Promise<post[]> {
  try {
    const res = await fetch("http://172.233.16.85/posts", {
      cache: "no-cache",
    });
    if (!res.ok) throw new Error("Failed to fetched data");

    const data: post[] = await res.json() as post[];
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
