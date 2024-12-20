import { useNavigate, useSearchParams } from 'react-router-dom';
import { getStringDate } from './../util/get-string-date';
import useDiary from './../hooks/useDiary';
import Header from '../components/Header';
import Viewer from '../components/Viewer';
import Button from '../components/Button';

const Diary = () => {
  const nav = useNavigate();
  const [params, setParams] = useSearchParams();

  const id = params.get('id');
  const diaryItem = useDiary(id);

  if (!diaryItem) {
    return <div>데이터 로딩중...!</div>;
  }
  const { createdDate, emotionId, content } = diaryItem;

  const title = getStringDate(new Date(createdDate));

  const goEditPage = () => {
    nav(`/edit?id=${id}`);
  };

  return (
    <div>
      <div>
        <Header
          title={`${title} 기록`}
          leftChild={
            <Button
              text={'< 뒤로 가기'}
              onClick={() => {
                nav(-1);
              }}
            />
          }
          rightChild={<Button text={'수정하기'} onClick={goEditPage} />}
        />
      </div>
      <div>
        <Viewer emotionId={emotionId} content={content} />
      </div>
    </div>
  );
};

export default Diary;
