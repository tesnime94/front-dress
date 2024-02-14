import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './user.css'; // Assurez-vous que le chemin d'accès est correct
import { DressModel } from '../../models/dressModel';

const UserPage = () => {
  const navigate = useNavigate();
  const [dresses, setDresses] = useState<DressModel[]>([]);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', address: '', phoneNumber: '', password: '' });

  const fetchDress = (() => {
    const userId = localStorage.getItem('userId');
    axios.get(`http://localhost:8080/robe/${userId}`)
      .then((res) => {
        setDresses(res.data);
      })
      .catch((error) => console.log(error));
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId")?.toString();
    axios.get(`http://localhost:8080/user/${userId}`)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((error) => console.log(error));

    fetchDress();
  }, []);

  const handleDelete = (dressId) => {
    axios.delete(`http://localhost:8080/robe/delete/${dressId}`)
      .then(() => {
        setDresses(dresses.filter(dress => dress.id !== dressId));
      })
      .catch((error) => console.log(error));
  };

  if (!userInfo.name || !userInfo.email) {
    return <div>Loading... Aucune informations disponibles, veuillez vérifier d'être connecté</div>;
  }

  return (
    <div className="d-flex">
      <div className="user-info">
        {/* Informations utilisateur ici */}
        <h2>User Information</h2>
        <p><strong>Username : </strong>{userInfo.name}</p>
        <p><strong>Email : </strong> {userInfo.email}</p>
        <p><strong>Address : </strong>{userInfo.address}</p>
        <p><strong>Phone Number : </strong> {userInfo.phoneNumber}</p>
        <p><strong> Password : </strong> {userInfo.password}</p>
        <Link to="/modify" className="btn btn-modify">Modifier</Link>
      </div>
      <div className="dresses-list">
        <h2>Mes robes : </h2>
        {dresses.map((dress) => (
          <div className='dress-card text-center' key={dress.id}>
            <div className='border'>
              <p>{dress.label}</p>
              <p>{dress.description}</p>
              <p>{dress.price}</p>
              <img src={`data:image/jpeg;base64,${dress.image}`} alt={dress.label} />
              <button onClick={() => handleDelete(dress.id)} className="btn btn-danger">Supprimer robe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
