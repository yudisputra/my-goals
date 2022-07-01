import React,{ useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, age) => {
    setUsersList((prevState) => {
      return [...prevState, {name: userName, age: age, id: Math.random()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
