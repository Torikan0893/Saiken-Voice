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
          <p>合成音声オンリー即売会</p>
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
            <a style={{color: "blue", textDecoration: "underline"}} href='https://docs.google.com/forms/d/e/1FAIpQLSck661J0K3kI7stpEwin4_l1oyGk4BI15A83F_Nhercp9lyXw/viewform?pli=1'>
              こちら
            </a>
          </p>
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
