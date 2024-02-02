
import './Dress.css';

import React, { useState, useEffect } from 'react';

const AllDressesPage = () => {
    const [dresses, setDresses] = useState([]);

    useEffect(() => {
        const fetchDresses = async () => {
            try {
                const response = await fetch('http://localhost:8080/robe/all');
                const data = await response.json();
                setDresses(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des robes : ', error);
            }
        };

        fetchDresses();
    }, []);

    return (
        <div>
            <h1>Toutes les robes</h1>
            <ul>
                {dresses.map((dress) => (
                    <li key={dress.id}>{dress.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AllDressesPage;