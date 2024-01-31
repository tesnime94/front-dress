import { useNavigate } from 'react-router-dom';

import './Accueil.css';

const Accueil = () => {

    return (
        <>
            <section className='text'>
                <h1> Bienvenue dans Rent Dress !</h1>
                <p>
                    Un mariage, une soirée, cherchez vous la robe de vos rêves ?
                    Pour une seule journée, des bons petits prix
                    Vous êtes au bon endroit !
                </p>
                <a href="Login" className="robe">Nos robes</a>
            </section>

            <div className="overlay"></div>
        </>
    )
}
export default Accueil;