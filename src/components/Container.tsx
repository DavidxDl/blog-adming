import { type ReactNode } from "react";

export default function Container({children}: {children: ReactNode}) {
  return (

      <div className=" container flex  flex-col items-center justify-center gap-12 border px-4 py-16 ">
      {children}
      </div>
  )
}
