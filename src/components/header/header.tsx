import { useNavigate } from 'react-router-dom';
import logo from './../../image/logo.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const naviguateToDress = (() => {
        navigate('/Dress')
    })
    const navigateAccueil = useNavigate();
    const naviguateToAccueil = (() => {
        navigateAccueil('/')
    })
    const navigateToInscription = useNavigate();
    const naviguateToInscription = (() => {
        navigateToInscription('/Inscription')
    })
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
                    <ul className='boutonAccueil'>
                        <li><button onClick={naviguateToAccueil} className='boutonHeader'>ACCUEIL</button></li>
                        <li>< button onClick={naviguateToDress} className='boutonHeader'>NOS ROBES</button></li>
                        <li><button onClick={naviguateToInscription} className='boutonHeader'>INSCRIPTION</button></li>
                        <li><Link to="/user"><svg xmlns="http://www.w3.org/2000/svg" height="42" width="28" viewBox="0 0 448 512"><path fill="#fff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg></Link></li>
                        <li onClick={handleLogout}><svg xmlns="http://www.w3.org/2000/svg" height="42" width="28" viewBox="0 0 512 512"><path fill="#fff" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" /></svg></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;