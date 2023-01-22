interface Props {
  anime: any;
}

function ThumbnailAnime({ anime }: Props) {
  return (
    <div className="pb-6 hover:opacity-75  hover:scale-105 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] ">
      <a href={anime?.url} target="_blank" rel="noreferrer">
        <img
          src={anime?.images.webp.large_image_url}
          className="w-64 h-72 rounded-2xl shadow-md"
          alt="animeData"
        />
      </a>
    </div>
  );
}

export default ThumbnailAnime;
