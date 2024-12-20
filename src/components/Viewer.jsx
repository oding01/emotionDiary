import './Viewer.css';
import { getEmotionImage } from '../util/get-emotion-image';
import { emotionList } from '../util/constants';

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  if (!content) {
    content = '일기 내용이 없어요.';
  }

  return (
    <div className="Viewer">
      <section className="emotion_section">
        <h4>그 날의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>그 날의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
