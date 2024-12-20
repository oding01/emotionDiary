import Button from './Button';
import './DiaryItem.css';
import { getEmotionImage } from '../util/get-emotion-image';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  const goDiaryPage = () => {
    nav(`/diary?id=${id}`);
  };

  const goEditPage = () => {
    nav(`/edit?id=${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDiaryPage}
        className={`emotion_section emotion_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div onClick={goDiaryPage} className="info_section">
        <div className="createdDate">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="contentInfo">{content}</div>
      </div>
      <div className="button_section" onClick={goEditPage}>
        <Button text={'수정'} />
      </div>
    </div>
  );
};

export default DiaryItem;
