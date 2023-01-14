

interface Props{
    anime:any;
}

function ThumbnailAnime({anime}:Props) {
  return (
    <div className="relative pb-6 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] hover:opacity-75 hover:scale-105">
        <img src={anime?.images.webp.large_image_url} className="w-64 rounded-2xl shadow-md"alt="animeData" />
        <div className="absolute flex items-center bg invisible hover-visible">
            <a href={anime?.url}>
                <button>
                    Link
                </button>
            </a>
        </div>
        
    
    </div>
  )
}

export default ThumbnailAnime