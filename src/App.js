import { useState, useEffect } from 'react'
import ReactTable from 'react-table-v6'
import axios from 'axios'
import 'react-table-v6/react-table.css'

const App = () => {
  const [userState, setUserState] = useState({
    users: [],
    columns: [
      {
        Header: 'name',
        accessor: 'name',
        filterable: true
      },
      {
        Header: 'email',
        accessor: 'email',
        filterable: true
      },
      {
        Header: 'phone',
        accessor: 'phone',
        filterable: true
      },
      {
        Header: 'gender',
        accessor: 'gender',
        filterable: true
      }
    ]
  })

  useEffect(() => {
    axios.get('https://randomuser.me/api?results=50')
    .then(({ data: { results } }) => {
      console.log(results)
      const users = results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
        gender: user.gender
      }))
      setUserState({ ...userState, users })
      })
    .catch(err => console.log(err))
    }, [])
    
    return (
      <ReactTable
        data={userState.users}
        columns={userState.columns}
      />
  )  
}

export default App
