import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './userSlice'

const UserDisplay = () => {
  const store = useSelector(state => state.userSlice)
  const [userId, setUserId] = useState(0)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(fetchUser(userId))
  }

  const handleChange = (value) => {
    setUserId(value)
  }

  return (
    <div>
      <input data-testid='userId' type='text' value={userId} onChange={e => handleChange(e.target.value)} />
      {store.status !== 'error' &&
        <div>
          <div style={store.status !== 'complete' ? { color: 'red' } : { color: 'blue' }}>{store.user.name}</div>

        </div>
      }
      {store.status === 'error' && <label>wrong Id</label>}
      <button onClick={handleClick}>{store.status === 'loading' ? 'fetching...' : 'fetch'}</button>
    </div>
  )
}

export default UserDisplay