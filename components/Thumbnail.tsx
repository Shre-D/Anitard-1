
import { Animetype } from "../types"

interface Props{
    anime:any;
}

function Thumbnail({anime}:Props) {
  return (
    <div className="relative pb-6 h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
        <img src={anime?.images.webp.image_url} className="h-40 w-64 rounded-2xl shadow-md"alt="animeData" />
        <div className="absolute flex items-center invisible">
            <a href="">
                <button>
                    click
                </button>
            </a>
        </div>
        
    
    </div>
  )
}

export default Thumbnail