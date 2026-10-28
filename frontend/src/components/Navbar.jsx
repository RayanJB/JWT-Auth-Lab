import { Link } from 'react-router'

function Navbar({ user, handleLogout }) {
  return (
    <nav>
      <Link to='/'>Homepage</Link>
   
        <Link to="/entries">View Entries</Link>
      {user 
      ? 
      (<>
      <Link to='/entries/create'>Create Entry</Link>
        <Link to='/dashboard'>Dashboard</Link>
      <button onClick={handleLogout}>Sign Out</button>
      </>) : 
      (<>
        <Link to='/sign-up'>Sign Up</Link>
        <Link to='/sign-in'>Sign In</Link>
    
      </>)}
    </nav>
  )
}

export default Navbar