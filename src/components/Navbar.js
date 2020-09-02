import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button, Text } from 'grommet';

function Navbar({ user }) {
  return(
    <Nav background='brand' direction="row" pad="medium">
      <Link to='/questions'><Button label="Question Index Page" /></Link>
      <Link to='/questions/new'><Button label="Create A Question" /></Link>
      {
        user ? <Text alignSelf='center'>{user.first_name} {user.last_name}</Text> : <Link to='/sign_in'>Sign In</Link>
      }
    </Nav>
  )
}

export default Navbar
