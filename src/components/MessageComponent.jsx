import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMessage } from '../redux/slices/messageSlice'

const MessageComponent = () => {
  const dispatch = useDispatch()
  const { message, loading } = useSelector((state) => state.message)

  useEffect(() => {
    dispatch(fetchMessage())
  }, [dispatch])

  if (loading) {
    return <p>Loading...</p>
  }

  return <p>{message}</p>
}

export default MessageComponent
