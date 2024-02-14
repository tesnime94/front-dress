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
                        <li className='link'><Link to="/">ACCUEIL</Link></li>
                        <li className='link'><Link to="/dress">NOS ROBES</Link></li>
                        <li className='link'><Link to="/inscription">INSCRIPTION</Link></li>
                    </ul>
                    <ul className='iconlinks'>
                        <li><Link to="/purchase"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 448 512"><path fill="#fff" d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg></Link></li>
                        <li><Link to="/user"><FontAwesomeIcon icon={faUser} size='2x' color='white' /></Link></li>
                        <li onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} size='2x' color='white' /></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;