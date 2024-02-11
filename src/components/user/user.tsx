import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importer axios pour effectuer des requêtes HTTP
import './user.css';
import { DressModel } from '../../models/dressModel';

const UserPage = () => {
  const navigate = useNavigate();
  const [dresses, setDresses] = useState<DressModel[]>([]);

  // État pour stocker les informations de l'utilisateur
  const [userInfo, setUserInfo] = useState({ name: '', email: '', address: '', phoneNumber: '', password: '' });

  useEffect(() => {
    // Récupérer l'ID de l'utilisateur à partir du localStorage
    const userId = localStorage.getItem("userId")?.toString();
    // Faire une requête à votre backend pour récupérer les informations de l'utilisateur correspondant à cet ID
    axios.get(`http://localhost:8080/user/${userId}`)
      .then((res) => {
        // Mettre à jour l'état avec les informations de l'utilisateur récupérées depuis le backend
        setUserInfo(res.data);
        fetchDress();
      })
      .catch((error) => console.log(error));
  }, []);

  if (!userInfo.name || !userInfo.email) {
    // Afficher un message de chargement tant que les données de l'utilisateur ne sont pas disponibles
    return <div>Loading...</div>;
  }
  const fetchDress = (() => {
    const userId = localStorage.getItem('userId');
    axios.get(`http://localhost:8080/robe/${userId}`)
      .then((res) => {
        console.log(res);
        setDresses(res.data)

      })
      .catch((error) => console.log(error));
  })

  return (
    <div className=''>
      <h2>User Information</h2>
      <p><strong>Username :</strong>{userInfo.name}</p>
      <p><strong>Email :</strong> {userInfo.email}</p>
      <p><strong>adresse :</strong>{userInfo.address}</p>
      <p><strong>Phone Number :</strong> {userInfo.phoneNumber}</p>
      <p><strong> Password :</strong> {userInfo.password}</p>
      {/* Bouton pour rediriger vers la page de modification */}
      <Link to="/modify" className="modify-button">Modifier</Link>
      <h2> Mes robes </h2>
      <div className='row mx-3  ' >
        {dresses.map((dress) => (
          <div className='col-3 my-2  text-center '>
            <div className='border'>
              <p>{dress.label}</p>
              <p>{dress.description}</p>
              <p>{dress.price}</p>
              <img src={`data:image/jpeg;base64,${dress.image}`} alt={dress.label} />
              <button > Voir détail</button>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default UserPage;
