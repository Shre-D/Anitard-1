import Header from "../components/Header"

function About() {
  return (
    <div>
      <Header/>
    <div className="flex items-start">
      <img
          src="/pfp.png"
          className="h-[70vh] w-[50vh] rounded-full shadow-md pl-5 pt-5"
          alt="animeData"
      />
        
        <div>
          <h6 className="pb-2 pt-10 pl-6 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300 " 
          >Hi, I'm ShreD. I like anime and manga.
          </h6> <br />
          <h3 className="pr-10 pl-6 text-xl">This website would one day like to have the ability to let the user stream and download anime, though I'm not sure
          if it is possible as of now. The backend also needs a lot more work. I'd like to be able to authenticate and add
          user specific features.
          </h3>
          <br /> <br />
          <h3 className="pl-6 pr-10 text-xl">
          However, for now I won't let you go empty handed. Here are some sites where you can stream and download anime, 
          read manga and light novels.
          </h3>
          <div className="flex items-center pt-12 pl-8 gap-5">
            <a href="https://zoro.to/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl hover:text-black hover:bg-green-600">
                Zoro
              </button>
            </a>
            <a href="https://9anime.vc/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl hover:text-black hover:bg-green-600">
                9anime
              </button>
            </a>
            <a href="https://mangadex.org/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-2xl hover:text-black hover:bg-green-600">
                MangaDex
              </button>
            </a>
            <a href="https://nyaa.si/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-2xl hover:text-black hover:bg-green-600">
                Nyaa
              </button>
            </a>
            <a href="https://animepahe.ru/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl hover:text-black hover:bg-green-600">
                Animepahe
              </button>
            </a>
          </div>
          <div className="flex pt-10 pl-8 gap-5">
          <a href="https://animelist.co/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl hover:text-black hover:bg-green-600">
                AniList
              </button>
          </a>
          <a href="https://myanimelist.net/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-yellow-700 to-orange-300 rounded-2xl hover:text-black hover:bg-green-600">
                MyAnimeList
              </button>
          </a>
            
          </div>
        </div>
    </div>
    <div className="pl-[22vh] pt-4">
    <a href="https://github.com/Shre-D ">                
          <img src="/github_logo.png" className="rounded-full h-20 w-16 pt-5 pl-15"  alt="ye" />
      </a>
    </div>
    </div>
  )
}

export default About