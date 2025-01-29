import '../styles/about.css';

export const About = () => {
  return (
    <>
      <div className="logo" style={{height: '8vh', backgroundColor: 'blue'}}></div>
      <div className="details" style={{top: '10vh'}}>
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
          <p>あーだこーだ</p>
          <p>こ↑こ↓にmap</p>
        </div>

      </div>
    </>
  );
};
