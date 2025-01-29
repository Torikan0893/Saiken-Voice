type Cast = {"name": string, "twitter_name": string};

const CASTS: Cast[] = [
  {
    "name": "G-1",
    "twitter_name": "dtm_honey_music",
  },
  {
    "name": "G-2",
    "twitter_name": "@dtm_honey_music",
  },
  {
    "name": "G-3",
    "twitter_name": "@dtm_honey_music",
  },
  {
    "name": "D-1",
    "twitter_name": "@dtm_honey_music",
  },
  {
    "name": "D-2",
    "twitter_name": "@dtm_honey_music",
  },
  {
    "name": "D-3",
    "twitter_name": "@dtm_honey_music",
  },
  {
    "name": "D-4",
    "twitter_name": "@dtm_honey_music",
  },
  {
    "name": "D-5",
    "twitter_name": "@dtm_honey_music",
  },
  {
    "name": "D-6",
    "twitter_name": "@dtm_honey_music",
  },
  {
    "name": "D-7",
    "twitter_name": "@dtm_honey_music",
  },
  {
    "name": "V-1",
    "twitter_name": "Torikan_0893",
  },
]

export const Cast = () => {
  return (
    <>
      {CASTS.map((cast) => {
        return (
          <div className="cast">
            <img src={"./cast/" + cast.name + ".webp"} alt={cast.name} />
            <p>{cast.twitter_name}</p>
          </div>
        );
      })}
    </>
  );
};
