import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './modify.css';

interface UserInfo {
  name?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
  password?: string;
}

const Modify = () => {
  const navigate = useNavigate();
  const [newUserInfo, setNewUserInfo] = useState<UserInfo>({});

  useEffect(() => {
    const userId = localStorage.getItem("userId")?.toString();
    axios.get(`http://localhost:8080/user/${userId}`)
      .then((res) => {
        setNewUserInfo(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
  
    fetch(`http://localhost:8080/user/update/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserInfo),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de l\'utilisateur');
      }
      return response.json();
    })
    .then(data => {
      console.log('Utilisateur mis à jour avec succès', data);
      navigate('/user');
    })
    .catch(error => {
      console.error('Erreur lors de la mise à jour de l\'utilisateur', error);
    });
  };

  const handleDelete = () => {
    const userId = localStorage.getItem("userId");
    fetch(`http://localhost:8080/user/delete/${userId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de l\'utilisateur');
      }
      localStorage.removeItem("userId");
      navigate('/login'); 
    })
    .catch(error => {
      console.error('Erreur lors de la suppression de l\'utilisateur', error);
    });
  };

  return (
    <div className='modify-container'>
      <h2>Modify User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newUserInfo.name || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newUserInfo.email || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={newUserInfo.address || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={newUserInfo.phoneNumber || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={newUserInfo.password || ''}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
        <button type="button" onClick={handleDelete} className="delete-button">Delete Account</button>
        <Link to="/user" className="cancel-button">Cancel</Link>
      </form>
    </div>
  );
};

export default Modify;
