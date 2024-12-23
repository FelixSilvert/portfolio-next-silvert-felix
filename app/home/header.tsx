import Navbar from './navBar'
import '../globals.css'

export default function Header() {
  return (
    <header className='header center'>
      <h3>
        <a href='https://www.linkedin.com/in/felix-silvert/' target="_blank" className='link'>
          FS.
        </a>
      </h3>
      <Navbar />
    </header>
  )
}