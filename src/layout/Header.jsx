import './Header.css'
import logo from '../movie-logo.svg'

function Header() {
    return (
        <nav>
            <div className="nav-wrapper  light-blue accent-4">
            <a href="/movies-react" className="brand-logo">
                <img src={logo} alt="Movies" />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">More</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Header