import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useReducer, useCallback, useRef, createContext } from 'react';
import New from './pages/New';
import Diary from './pages/Diary';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Button from './components/Button';
import Header from './components/Header';
import Edit from './pages/Edit';

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(6);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/diary" element={<Diary />}></Route>
            <Route path="/edit" element={<Edit />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
