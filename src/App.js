import React, { useState } from 'react';
import Form from './components/Form';

import './App.css';

function App() {
  const [member, setMember] = useState({name: '', email: '', role: ''});
  const [memberList, setMemberList] = useState([]);

  const handleChange = (event) => {
    setMember({...member, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setMemberList([...memberList, member]);
  }

  return (
    <div className='team-builder'>
      <Form handleSubmit={handleSubmit} handleChange={handleChange}/>
      <hr/>
      <ul>
        {memberList.map(member => {
          return <li>{member.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
