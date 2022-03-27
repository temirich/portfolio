import React from 'react'
import { UserList } from '../types/types'

type UserListProps = {
  users: UserList[]
}
const CardList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map(user => <div key={user.id}>{user.name} {user.username}</div>)}
    </div>
  )
}

export default CardList
