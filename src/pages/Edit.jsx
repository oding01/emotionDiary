import { useSearchParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import useDiary from './../hooks/useDiary';
import Button from '../components/Button';
import Header from '../components/Header';
import Editor from '../components/Editor';

const Edit = () => {
  const [params, setParams] = useSearchParams();
  const id = params.get('id');

  const nav = useNavigate();

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    let isConfirm = window.confirm(
      '정말로 삭제하시겠어요? 다시 복구되지 않아요!'
    );
    if (isConfirm) {
      onDelete(id);
      nav('/', { replace: true });
    }
  };

  const onClickSubmit = (input) => {
    if (window.confirm('저장하시겠어요?')) {
      onUpdate(id, input.createdDate.getTime(), input.emotionId, input.content);
      nav('/', { replace: true });
    }
  };

  const diaryItem = useDiary(id);

  return (
    <div>
      <div>
        <Header
          title={'수정하기'}
          leftChild={
            <Button
              text={'< 뒤로 가기'}
              onClick={() => {
                nav(-1);
              }}
            />
          }
          rightChild={
            <Button
              text={'삭제하기'}
              type={'NEGATIVE'}
              onClick={onClickDelete}
            />
          }
        />
      </div>
      <div>
        <Editor diaryItem={diaryItem} onSubmit={onClickSubmit} />
      </div>
    </div>
  );
};

export default Edit;
