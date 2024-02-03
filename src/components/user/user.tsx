import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './user.css';

const UserPage = () => {
  const navigate = useNavigate();
  // État pour stocker les informations de l'utilisateur
  const [userInfo, setUserInfo] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    // Autres informations de l'utilisateur
  });

  const handleLogout = () => {
    // Logique de déconnexion de l'utilisateur
    // Redirection vers la page de connexion
    navigate('/login');
  };

  const handleEdit = () => {
    // Logique pour permettre à l'utilisateur de modifier ses informations
    // Redirection vers la page d'édition du profil
    navigate('/edit-profile');
  };

  return (
    <div className='form_connexion'>
                <form >
                <div className=''>
                        <label >Nom :</label>
                        
                    </div>
                    <div className=''>
                        <label >Prenom : </label>
                        
                    </div>
                    <div className=''>
                        <label htmlFor='email'> Email : </label>
                        
                    </div>


                    <div className=''>
                        <button >Modifier </button>
                    </div>
                </form>
            </div>
  );
};

export default UserPage;
