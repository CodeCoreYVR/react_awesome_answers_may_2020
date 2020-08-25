import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user }) {
  return(
    <nav>
      <Link to='/questions'>Question Index Page</Link>
      |
      <Link to='/questions/new'>Create A Question</Link>
      |
      {
        user ? <span>{user.first_name} {user.last_name}</span> : <Link to='/sign_in'>Sign In</Link>
      }
    </nav>
  )
}

export default Navbar
