import { useNavigate } from 'react-router-dom';
import logo from './../../image/logo.png';
import './header.css';

const Header = () => {

    const navigate = useNavigate();
    const naviguateToLogin = (() => {
        navigate('/Login')
    })
    const navigateAccueil = useNavigate();
    const naviguateToAccueil = (() => {
        navigateAccueil('/')
    })
    const navigateToInscription = useNavigate();
    const naviguateToInscription = (() => {
        navigateToInscription('/Inscription')
    })

    return (
        <>
            <header>
                <nav>
                    <a href="#"><img src={logo} alt="" className='logo' /></a>
                    <ul className='boutonAccueil'>
                        <li><button onClick={naviguateToAccueil} className='boutonHeader'>Accueil</button></li>
                        <li>< button onClick={naviguateToLogin} className='boutonHeader'>Connexion</button></li>
                        <li><button onClick={naviguateToInscription} className='boutonHeader'>Inscription</button></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;