import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function Header() {
  return (
    <header>
        <div className="flex items-center space-x-3 md:space-x-5">
        <img src="/home_logo.png"
         alt="anigirl" 
         width={60}
         height={60}
         className="cursor-pointer object-contain float-left mix-blend-add rounded-full"
         />
         <h6 className='text-2xl font-extrabold font-poppins p-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300' >
          ANITARD
         </h6>
         <ul className="hidden space-x-3 md:flex">
            <li className="cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]">Home</li>
            <li className="cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]">Popular</li>
            <li className="cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]">Anime</li>
            <li className="cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]">Manga</li>
            <li className="cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]">LN</li>
            <li className="cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]">Favourites</li>
         </ul>
        </div>
        <div className='flex items-center font-light space-x-2 text-sm'>
            <SearchOutlinedIcon className='hidden h-6 w-6 sm:inline hover:bg-red-400'/>
            <MenuOpenOutlinedIcon className='h-6 w-6 hover:bg-red-700'/>
            <ManageAccountsIcon className='h-6 w-6 hover:bg-cyan-600 rounded-full'/>

        </div>
    </header>
  )
}

export default Header
