import SearchCard from './SearchCard';
import { Animetype } from '../types';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

interface Props{
    HandleSearch:any
	search:string
	setSearch:any
	animeList:Animetype[]
}

function HomeDisplay({HandleSearch,search,setSearch,animeList}:Props) {
    console.log(animeList)
	return (
	<main>
        <div className="flex p-2 text-2xl gap-4">
                Search Results
                <SearchOutlinedIcon style={{ fontSize: 32 }}/>
        </div>
            
		<div className="flex gap-4 pl-2 pb-20 items-center space-x-0.5 overflow-x-scroll overflow-y-clip scrollbar-hide md:space-x-2.5 md:p-2">
            
				{animeList?.map(anime => (
					<SearchCard
						anime={anime}
						key={anime.mal_id} />
				))}
				
		</div>
	</main>
	)
}

export default HomeDisplay