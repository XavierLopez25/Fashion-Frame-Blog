import '../../styles/NavBar.css'
import PropTypes from 'prop-types'

const NavBar = ({ setCurrentSection }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <button onClick={() => setCurrentSection('HOME')}>Home</button>
        </li>
        <li>
          <button onClick={() => setCurrentSection('POSTS')}>Posts</button>
        </li>
        <li>
          <button onClick={() => setCurrentSection('ABOUT ME')}>About Me</button>
        </li>
        <li>
          <button onClick={() => setCurrentSection('WHERE TO FIND ME')}>Where to Find Me?</button>
        </li>
      </ul>
    </nav>
  )
}

NavBar.propTypes = {
  setCurrentSection: PropTypes.func.isRequired
}

export default NavBar
