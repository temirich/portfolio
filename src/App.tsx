import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/card/card'
import CardList from './components/card/cardList'
import { UserList } from './components/types/types'

function App() {
  const [users, setUsers] = useState<UserList[]>([])
  useEffect(() => {
    fetchUsers()
  }, [])
  async function fetchUsers() {
    try {
      const response = await axios.get<UserList[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div className="App">
      <Card width='200px' height='200px' onClick={(num) => console.log('Click', num)} />
      <CardList users={users} />
    </div>
  )
}

export default App
