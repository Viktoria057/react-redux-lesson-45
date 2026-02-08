import { useSelector } from 'react-redux';

const MessageComponent = () => {
  const { message, loading } = useSelector((state) => state.message);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <p>{message}</p>;
};

export default MessageComponent;
