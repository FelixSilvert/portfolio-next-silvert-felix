import '../globals.css';

export default function Navbar() {
  return (
    <nav className='center nav'>
      <ul className='nav__list'> 
        <li className='nav__list-item'>
          <a
            href='#projects'
            className='link link--nav'
          >
            Projects
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href='#skills'
            className='link link--nav'
          >
            Skills
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href='#contact'
            className='link link--nav'
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}