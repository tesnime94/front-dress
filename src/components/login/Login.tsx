import React, { useState } from 'react';
import logo from '../image/logo.png';
import { Navigate, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

const Login = () => {

    const navigateInscription = useNavigate();
    const naviguateToInscription = (() => {
        navigateInscription('/inscription')
    })
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

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
        axios.get("http://localhost:8080/user/login?email=" + credentials.email + "&password=" + credentials.password)
            .then((res) => {
                console.log(res);
                if (res.data !== 0) {
                    localStorage.setItem("userId", res.data)

                    //localStorage.getItem("userId") //pour récup l'id 

                    // Authentification réussie
                    navigate('/Dress'); //quand on créera le composant robe 
                } else {
                    // Affichez un message d'erreur
                    console.log("Authentification échouée");
                    navigate('/Login');
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <div className='form_connexion'>
                <form onSubmit={onSubmit}>
                    <div className='groupLogin'>
                        <label htmlFor='email'> Email </label>
                        <input type='text' name='email' value={credentials.email} onChange={onChange} />
                    </div>

                    <div className='groupLogin'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' value={credentials.password} onChange={onChange} />
                    </div>

                    <div className='groupLogin'>
                        <button>Login </button>
                        <button onClick={naviguateToInscription} className='ins'>Inscription </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Login; 