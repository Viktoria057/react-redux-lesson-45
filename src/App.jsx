import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMessage } from './redux/slices/messageSlice';
import MessageComponent from './components/MessageComponent';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return <MessageComponent />;
};

export default App;

