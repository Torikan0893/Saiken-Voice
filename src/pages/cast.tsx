import { Header } from '../components/header'
import { Footer } from '../components/footer'

type Cast = {"name": string, "twitter_name": string};

const CASTS: Cast[] = [
  {
    "name": "G-1",
    "twitter_name": "nejishiki0221",
  },
  {
    "name": "G-2",
    "twitter_name": "rinx2musixxx",
  },
  
  {
    "name": "D-1",
    "twitter_name": "M_kakoichi",
  },
  {
    "name": "D-2",
    "twitter_name": "jagkazu",
  },
  {
    "name": "D-3",
    "twitter_name": "A2_Okita_Xalter",
  },
  {
    "name": "D-4",
    "twitter_name": "y2k2u1",
  },
  {
    "name": "D-5",
    "twitter_name": "owari_error",
  },
  {
    "name": "D-6",
    "twitter_name": "asikan3745",
  },
  {
    "name": "D-7",
    "twitter_name": "rokutii_3500",
  },
  {
    "name": "V-1",
    "twitter_name": "Torikan_0893",
  },
  {
    "name": "V-2",
    "twitter_name": "osouji_rapi",
  },
  {
    "name": "V-3",
    "twitter_name": "metameta194",
  },
]

const CasrtCard = (props: Cast) => {
  return (
    <div className="CastCard">
      <a href={"https://x.com/" + props.twitter_name} target="_blank">
        <img src={"/cast/" + props.name + ".webp"} alt={props.name} />
      </a>  
      <p>{"@"+props.twitter_name}</p>
    </div>
  );
}

export default function Cast() {
  return (
    <div id="CastPage">
      <Header />
      <div className="EyeCatch">
        <img src="/logo.webp" alt="thumbnail" />
      </div>
      <div className="details">
        <div className="detail">
          <h4>Guest</h4>
          <p>
          {/* <li>調整中...</li> */}
          </p>
          <div className="CastList">
            {CASTS.filter((cast) => cast.name[0]==="G").map((cast) => <CasrtCard key={cast.name} {...cast} />)}
          </div>
        </div>
        <div className="detail">
          <h4>DJ</h4>
          <p>
          {/* <li>調整中...</li> */}
          </p>
          <div className="CastList">
            {CASTS.filter((cast) => cast.name[0]==="D").map((cast) => <CasrtCard key={cast.name} {...cast} />)}
          </div>
        </div>
        <div className="detail">
          <h4>VJ</h4>
          <div className="CastList">
            {CASTS.filter((cast) => cast.name[0]==="V").map((cast) => <CasrtCard key={cast.name} {...cast} />)}
          </div>
          <p>
          {/* <li>らぴ</li> */}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
