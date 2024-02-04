import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './user.css';

const UserPage = () => {
  const navigate = useNavigate();

  // État pour stocker les informations de l'utilisateur
  const [userInfo, setUserInfo] = useState({ username: '', email: '',adresse: '',phoneNumber: '',password: ''});

  useEffect(() => {
    // Récupérer l'ID de l'utilisateur à partir du localStorage
    const userId = localStorage.getItem("userId");
    // Faire une requête à votre backend pour récupérer les informations de l'utilisateur correspondant à cet ID
    // Ici, je simule simplement une requête avec un délai de 1 seconde
    setTimeout(() => {
      // Remplacer cet exemple par votre logique de requête réelle
      const userData = {
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        adresse: '90 rue des roses 75013 Paris',
        phoneNumber: '0658753510',
        password: '*******',
        
      };
      // Mettre à jour l'état avec les informations de l'utilisateur récupérées
      setUserInfo(userData);
    }, 1000);
  }, []);

  if (!userInfo.username || !userInfo.email) {
    // Afficher un message de chargement tant que les données de l'utilisateur ne sont pas disponibles
    return <div>Loading...</div>;
  }

  return (
    <div className=''>
      {/* Afficher les informations de l'utilisateur */}
      <h2>User Information</h2>
      <p><strong>Username :</strong>{userInfo.username}</p>
      <p><strong>Email :</strong> {userInfo.email}</p>
      <p><strong>adresse :</strong>{userInfo.adresse}</p>
      <p><strong>Phone Number :</strong> {userInfo.phoneNumber}</p>
      <p><strong> Password :</strong> {userInfo.password}</p>
      {/* Bouton pour rediriger vers la page de modification */}
      <Link to="/modify" className="modify-button">Modifier</Link>
    </div>
  );
};

export default UserPage;
