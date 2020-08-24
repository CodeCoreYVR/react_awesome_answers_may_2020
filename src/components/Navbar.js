import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <nav>
      <Link to='/questions'>Question Index Page</Link>
      |
      <Link to='/questions/new'>Create A Question</Link>
    </nav>
  )
}

export default Navbar
