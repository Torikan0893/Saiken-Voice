import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/about.scss';

export const About = () => {
  return (
    <div id="AboutPage">
      <Header />
      <div className="EyeCatch">
        <img src="./logo.webp" alt="thumbnail" />
      </div>
      <div className="details">
        <div className="detail">
          <h4>コンセプト</h4>
          <p>
            GUMIやIAをはじめ、重音テト、音街ウナ、可不、歌愛ユキ等 <br />
            話題のずんだもんや琴葉姉妹も！ <br />
            CeVIO・SynthesizerVや各種トークソフトのキャラクター <br />
            を用いた楽曲・作品に焦点を当てたDJイベントです！ <br />
            <br />
            ⚠当イベントはVOCALOID(初音ミク、鏡音リン・レン、巡音ルカ、KAITO、MEIKO)のソロ楽曲は流れません <br />
            <br />
            ですがデュエットやグループ、コーラス等で一緒に歌唱しているケースもめちゃくちゃ多いので <br />
            「あ、この曲はミクちゃんだけじゃ無いんだ！」 <br />
            みたいな楽しみ方もぜひ！！ <br />
          </p>
        </div>
        <div className="detail">
          <h4>主催</h4>
          <p>鳥缶 (@Torikan_0893)</p>
        </div>
        <div className="detail">
          <h4>アクセス</h4>
          <p>広島UP-WARD (広島県広島市中区薬研堀 7-9 三和ビル 6F)</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.1099475114013!2d132.46386336964605!3d34.39016599831447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa20507d3aaab%3A0x5896f3790ec1ac49!2z5bqD5bO2VVAtV0FSRA!5e0!3m2!1sja!2sjp!4v1738861216512!5m2!1sja!2sjp" width="100%" height="450" style={{"border": "0", "margin": "0 auto"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};
