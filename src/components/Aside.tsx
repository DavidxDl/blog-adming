import Link from "next/link";

export default function Aside() {

  return (
      <aside className="  w-[250px] shadow-2xl shadow-black min-h-full flex-grow border-2  p-4">
        <ul className="w-full font-bold text-lg">
          <span className="text-3xl font-bold">Routes</span>
          <li className="mt-4 ">
            <div className="flex align-center gap-2">
              <span>📝</span>
              <Link href="/posts/new"> New Post </Link>
            </div>
          </li>
          <li className="">
            <div className="flex align-center gap-2">
              <span>🧾</span>
              <Link href="/posts"> Posts</Link>
            </div>
          </li>
          <li>
            <div className="flex justify-start align-center gap-2">
              <span className="shadow-black">🗒️</span>
            <Link href="/comments">Comments</Link>
            </div>
          </li>
        </ul>
      </aside>
      )
}
