import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full mx-auto">
      <div className="dark:bg-gray-900 text-white shadow-xl p-[20px_20px] flex justify-between items-center">
        <span>
        <Link href={'/'}>Recipe App</Link>
        </span>
        <ul className="flex justify-center items-center gap-6">
          <li>
            <Link href={"/recipes"} className="text-blue-200 text-lg hover:underline font-bold">Recipes</Link>
          </li>
          <li>
            <Link href={"/restorant/login"}>
            <button className="bg-blue-600 px-5 py-2 rounded-s-xl hover:bg-blue-800 text-md font-bold">Login</button>
            </Link>
          </li>
        </ul>{" "}
      </div>
    </div>
  );
}
