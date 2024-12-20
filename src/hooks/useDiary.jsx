import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

const useDiary = (id) => {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);

  const [diaryItem, setDiaryItem] = useState();
  useEffect(() => {
    const diaryItem = data.find((item) => String(item.id) === String(id));

    if (!diaryItem) {
      window.alert('유효하지 않은 접근입니다.');
      nav('/', { replace: true });
    }

    setDiaryItem(diaryItem);
  }, [id, data]);

  return diaryItem;
};

export default useDiary;
