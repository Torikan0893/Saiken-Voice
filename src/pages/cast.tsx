type Cast = {"name": string, "twitter_name": string, "image": string};

const CASTS: Cast[] = [
  {
    "name": "Kohei Asai",
    "twitter_name": "@koheiasai",
    "image": "https://pbs.twimg.com/profile_images/1410130000/kohei_asai_400x400.jpg"
  },
  {
    "name": "Kohei Asai",
    "twitter_name": "@koheiasai",
    "image": "https://pbs.twimg.com"
  }
]

export const Cast = () => {
  return (
    <>
      {CASTS.map((cast) => {
        return (
          <div className="cast">
            <img src={cast.image} alt={cast.name} />
            <h2>{cast.name}</h2>
            <p>{cast.twitter_name}</p>
          </div>
        );
      })}
      <h1>Cast</h1>
    </>
  );
};
