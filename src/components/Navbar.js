import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button, Text } from 'grommet';

function Navbar({ user }) {
  return(
    <Nav direction="row" background="brand" pad="medium">
      <Link to='/questions'><Button secondary label='Question Index' /></Link>
      <Link to='/questions/new'><Button secondary label='Create A Question'/></Link>
      {
        user ? <Text alignSelf='center'>{user.first_name} {user.last_name}</Text> : <Link to='/sign_in'><Button secondary label='Sign In' /></Link>
      }
    </Nav>
  )
}

export default Navbar
