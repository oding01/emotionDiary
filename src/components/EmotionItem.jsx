import './EmotionItem.css';
import { getEmotionImage } from '../util/get-emotion-image';

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ''
      }`}
    >
      <img className="img_section" src={getEmotionImage(emotionId)} />
      <div className="name_section">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
