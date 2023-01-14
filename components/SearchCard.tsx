import { Animetype } from "../types"

interface Props{
  anime:any
}

function SearchCard({anime}:Props) {
	return (
		<div className="">
			<a 
				href={anime?.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime?.images.jpg.large_image_url} 
						alt="Anime Image" 
            className="relative rounded-xl h-60 w-30 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] hover:opacity-75 hover:scale-105"
            />
				</figure>
				<h3>{ anime?.title }</h3>
			</a>
		</div>
	)
}

export default SearchCard