import { useNavigate } from 'react-router-dom';
import logo from './../../image/logo.png';
import './header.css';
import { Link } from 'react-router-dom';
import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        // Mettre à jour le localStorage pour déconnecter l'utilisateur
        localStorage.setItem('userId', 'false');
        // Rediriger vers la page de connexion
        navigate('/login');
    };

    return (
        <>
            <header>
                <nav>
                    <a href="#"><img src={logo} alt="" className='logo' /></a>
                    <ul className='navlinks'>
                        <li  className='link'><Link to="/">ACCUEIL</Link></li>
                        <li  className='link'><Link to="/dress">NOS ROBES</Link></li>
                        <li  className='link'><Link to="/inscription">INSCRIPTION</Link></li>
                    </ul>
                    <ul className='iconlinks'>
                        <li><Link to="/user"><FontAwesomeIcon icon={faUser} size='2x' color='white' /></Link></li>
                        <li onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} size='2x' color='white' /></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;