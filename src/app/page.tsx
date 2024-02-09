
export default async function Home() {
  return (
    <>
        <h1 className="text-5xl font-extrabold">Blog Admin</h1> <form>
          <div className="form-control">
            <label className="text-xl">Admin Code</label>
            <input
              type="password"
              required
              className=" valid:border-2 valid:border-green-500 valid:shadow-green-700  transition-transform p-1 bg-white w-full shadow-inner text-black shadow-black focus:scale-110  "
            />
          </div>
          <div className="mt-2 form-control">
            <input type="submit" className="transition:transform focus:translate-y-1 shadow-black font-bold text-base btn self-center" value="Submit"/>
          </div>
        </form>
        </>
  );
}
