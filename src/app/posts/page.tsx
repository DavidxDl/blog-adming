import Main from "~/components/Main";
import Container from "~/components/Container";
import Aside from "~/components/Aside";

interface post {
  title: string;
  published: boolean;
  _id: string;
  text: string;
  timestamp: string;
}

export default async function Posts() {
  const res = await fetch("http://localhost:3000/posts");
  const posts: post[] = await res.json();
  console.log(posts[5]?.published);
  return (
    <>
      <h1 className="text-5xl font-extrabold">Posts</h1>
      <table className="table ">
        <thead>
          <tr className="text-lg font-extrabold">
            <th>Title</th>
            <th>Date</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr className="text-center" key={post._id}>
              <td>{post.title}</td>
              <td>{post.timestamp}</td>
              <td>{post.published === true ? `🟢` : `🔴`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

async function getPosts() {
  try {
    const res = await fetch("http://localhost:3000/posts");
    if (res.status === 200) {
      const posts: post[] = await res.json();
      return posts;
    }
  } catch (err) {
    console.log(err);
  }
}
