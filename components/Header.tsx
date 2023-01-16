import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="flex items-center hover:opacity-90 space-x-3 md:space-x-5">
        <Link href="/">
          <img
            src="/home_logo.png"
            alt="anigirl"
            width={60}
            height={60}
            className="cursor-pointer object-contain float-left mix-blend-add rounded-full"
          />
        </Link>
        <Link href="/">
          <h6 className="text-2xl font-extrabold font-poppins p-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300">
            ANITARD
          </h6>
        </Link>
        <ul className="flex md:hidden space-x-4">
          <li className="cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]">
            <Link href="/Anime">Anime</Link>
          </li>
          <li className="cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]">
            <Link href="/Manga">Manga</Link>
          </li>
          <li className="cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]">
            <Link href="/Music">Music</Link>
          </li>
          <li className="cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]">
            <Link href="/About">About</Link>
          </li>
          {/* <li className="cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]">
            Favourites
          </li> */}
        </ul>
      </div>
      <div className="flex items-center font-light space-x-2 text-sm">
        <MenuOpenOutlinedIcon className="h-6 w-6 hover:bg-red-700" />
        <ManageAccountsIcon className="h-6 w-6 hover:bg-cyan-600 rounded-full" />
      </div>
    </header>
  );
}

export default Header;
