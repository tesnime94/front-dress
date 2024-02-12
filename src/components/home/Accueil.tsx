import { useNavigate } from 'react-router-dom';

import './Accueil.css';

const Accueil = () => {
    const navigate = useNavigate();
    const naviguatetoDress = (() => {
        navigate('/Dress')
    })

    return (
        <>
            <section className='text home-page'>
                <h1> Bienvenue dans Rent Dress !</h1>
                <p> Découvrez une collection exquise de robes pour toutes les occasions avec notre service de location de robes.
                    Un mariage, une soirée, cherchez vous la robe de vos rêves ?
                    Pour une seule journée, des bons petits prix
                    Vous êtes au bon endroit !
                    Offrez-vous la possibilité de briller à tout vos événements de manière responsable
                </p>
                <button type="submit" onClick={naviguatetoDress} className="robe">Nos robes</button>
            </section>

            <div className="overlay"></div>
        </>
    )
}
export default Accueil;
