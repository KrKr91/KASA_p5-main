import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <h1>Kasa</h1>
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </div>
        </nav>
    )
}
export default Header