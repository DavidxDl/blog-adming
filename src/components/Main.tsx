import { type ReactNode } from "react";

export default function Main({children}: {children: ReactNode}){
  return (
    <main className="flex min-h-screen   justify-center bg-gradient-to-b from-blue-800 to-blue-950 text-white">
      {children}
    </main>
  )
}
