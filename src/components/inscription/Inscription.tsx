import React, { useState } from 'react';
import axios from 'axios';
import './inscription.css';
import { useNavigate } from 'react-router-dom';


const Inscription = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        name: '',
        surname: '',
        birth: '',
        address: '',
        phoneNumber: '',
        email: '',
        password: ''
    })

    //méthode qui va me permettre de modifier mon state

    // @ts-ignore afin de ne pas être obligé de spécifier le type
    const onChange = (e) => {
        console.log(e.target.value)
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    //ce qu'il va se passer quand je vais submit mon formulaire 
    // @ts-ignore
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(credentials)
        axios.post("http://localhost:8080/user", credentials)
            .then((res) => {
                console.log(res);
                // Inscription réussie, redirigez vers la page de connexion
                navigate('../login'); // Redirection vers la page de connexion
            })
            .catch((error) => console.log(error));
    };




    return (
        <>
            <div className='form-register'>

                <form onSubmit={onSubmit}>
                    <div className='group'>
                        <label htmlFor='name'> Nom </label>
                        <input type='text' name='name' value={credentials.name} onChange={onChange} />
                    </div>

                    <div className='group'>
                        <label htmlFor='surname'> Prenom </label>
                        <input type='text' name='surname' value={credentials.surname} onChange={onChange} />
                    </div>
                    <div className='group'>
                        <label htmlFor='birth'> Date de naissance </label>
                        <input type='date' name='birth' value={credentials.birth} onChange={onChange} />
                    </div>
                    <div className='group'>
                        <label htmlFor='address'> Adresse</label>
                        <input type='text' name='address' value={credentials.address} onChange={onChange} />
                    </div>

                    <div className='group'>
                        <label htmlFor='phoneNumber'>Numéro de téléphone</label>
                        <input type='text' name='phoneNumber' value={credentials.phoneNumber} onChange={onChange} />
                    </div>
                    <div className='group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' value={credentials.email} onChange={onChange} />
                    </div>

                    <div className='group'>
                        <label htmlFor='password'>Mot de passe</label>
                        <input type='password' name='password' value={credentials.password} onChange={onChange} />
                    </div>

                    <div className='group'>
                        <button type="submit">S'inscrire </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Inscription; 