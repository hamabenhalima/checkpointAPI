import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>List of Users :</h1>
      <ul>
        {listOfUsers.map(user => (
          
          <li key={user.id}>
           {user.name} ({user.email}) - {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </li>
          
        ))}
      
    
      </ul>
    </div>
  );
};

export default UserList;
