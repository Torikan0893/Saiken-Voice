import '../styles/index.css';

export const Index = () => {
  return (
    <>
      <div className="thumnail">
        <img src="./thumbnail.webp" alt="thumbnail" />
      </div>
      <div className="container">
        <div className="details">
          <div className="detail">
            <h4>DATE</h4>
            <p>2025.3.15(土)</p>
          </div>
          <div className="detail">
            <h4>PLACE</h4>
            <p>広島UP-WARD<br />(広島県広島市中区薬研堀 7-9 三和ビル 6F)</p>
          </div>
          <div className="detail">
            <h4>OPEN</h4>
            <p>13:50</p>
          </div>
          <div className="detail">
            <h4>START</h4>
            <p>14:00</p>
          </div>
          <div className="detail">
            <h4>PLICE</h4>
            <p>¥2,000(1ドリンク込)</p>
          </div>
          <div className="detail">
            <h4>イラスト</h4>
            <p>猫橋ねこ (@nekobasi_illust)</p>
          </div>
        </div>
      </div>
    </>
  );
};
