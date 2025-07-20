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
          <h4>開場</h4>
          <p>12:50</p>
        </div>
        <div className="detail">
          <h4>開始</h4>
          <p>13:00</p>
        </div>
        <div className="detail">
          <h4>サークル参加費</h4>
          <p>¥2,000</p>
        </div>
        <div className="detail">
          <h4>参加フォーム</h4>
          <p>申込みは
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdd5g9XoHqyodjm-7KT1YTgjT1MMrt_M8w51_H2ImrID-BB1Q/viewform'>
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
