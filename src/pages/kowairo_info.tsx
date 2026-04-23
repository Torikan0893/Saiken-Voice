import { useEffect } from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/kowairo_info.scss';

export const KowairoInfo = () => {
  useEffect(() => {
    const backgroundElement = document.querySelector('.background') as HTMLElement;
    if (backgroundElement) {
      backgroundElement.style.backgroundImage = 'url(https://saiken-voice.vercel.app/kowairo/kowairo.webp)';
    }
    
    return () => {
      if (backgroundElement) {
        backgroundElement.style.backgroundImage = 'url(https://saiken-voice.vercel.app/thumbnail.webp)';
      }
    };
  }, []);

  return (
    <div id="KowairoInfoPage">
      <Header />
      <div className="EyeCatch">
        <img src="kowairo/logo_kowairo.webp" alt="thumbnail" />
      </div>
      <div className="details">
      <div className="detail">
          <h4>イベント内容</h4>
          <p>合成音声オンリー即売会 (#再見ボイスとの併催)</p>
        </div>
        <div className="detail">
          <h4>開催日</h4>
          <p>2026.9.20(日)</p>
        </div>
        <div className="detail">
          <h4>開場・開始</h4>
          <p>13:50</p>
        </div>
        <div className="detail">
          <h4>サークル参加費</h4>
          <p>¥2,000</p>
        </div>
        <div className="detail">
          <h4>参加フォーム</h4>
          {/*<p>準備中...</p>*/}
          <p>申込みは
            <a style={{color: "blue", textDecoration: "underline"}} href='https://docs.google.com/forms/d/e/1FAIpQLSePAob5heQM2gAH9m9jzXcEk5A-87YwnYxNQx4i1HCBikNI-g/viewform'>
              こちら
            </a>
          </p>
        </div>
        <div className="detail">
          <h4>場所</h4>
          <p>広島UP-WARD<br />(広島県広島市中区薬研堀 7-9 三和ビル 6F)</p>
        </div>
        <div className="detail">
          <h4>イラスト</h4>
          <p>猫橋ねこ (@nekobasi_illust)</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
