import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './modify.css';

const Modify = () => {
  const navigate = useNavigate();

  const [newUserInfo, setNewUserInfo] = useState({ name: '', email: '', address: '', phoneNumber: '', password: '' });

  useEffect(() => {
    const userId = localStorage.getItem("userId")?.toString();
    axios.get(`http://localhost:8080/user/${userId}`)
      .then((res) => {
        setNewUserInfo(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setNewUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId")?.toString();
    const updatedUserInfo: { [key: string]: string } = {};

for (const key in newUserInfo) {
  if (Object.prototype.hasOwnProperty.call(newUserInfo, key)) {
    if (newUserInfo[key as keyof typeof newUserInfo] !== "") {
      updatedUserInfo[key] = newUserInfo[key as keyof typeof newUserInfo];
    }
  }
}


    if (Object.keys(updatedUserInfo).length === 0) {
      navigate('/user');
      return;
    }

    axios.put(`http://localhost:8080/user/${userId}`, updatedUserInfo)
      .then(() => {
        navigate('/user');
      })
      .catch((error) => console.log(error));
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
            value={newUserInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newUserInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={newUserInfo.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={newUserInfo.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={newUserInfo.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
        <Link to="/user" className="cancel-button">Cancel</Link>
      </form>
    </div>
  );
};

export default Modify;
