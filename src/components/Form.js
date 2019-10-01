import React from 'react';
import styled from 'styled-components';

const StyledForm = styled`
  width: 500px;
  padding: 1em;
  position: relative;
  top: 10em;
  right: 50%;
  transform: translateX(-50%);
  background: white;

  input {
    display: block;
    padding: 4px;
    width: 100%;
  }
`

const Form = (props) => {
  const { handleChange, handleSubmit, member} = props;

  return (
    <StyledForm>
      <label htmlFor="name">Name</label>
      <input id="name" name='name' value={member.name} onChange={handleChange}/>
      <label htmlFor="email">Email</label>
      <input id="email" name='name' type='email' value={member.email} onChange={handleChange}/>
      <label htmlFor="role">Role</label>
      <input id="role" name='name' value={member.role} onChange={handleChange}/>

      <input type='submit' value='Submit'/>
    </StyledForm>
  );
}

export default Form;
