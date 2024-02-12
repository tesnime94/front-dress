
import axios from 'axios';
import './Dress.css';
import React, { useState, useEffect } from 'react';
import { DressModel } from '../../models/dressModel';
import { useNavigate } from 'react-router-dom';

const MyDress = () => {

    const navigate = useNavigate();

    const [dresses, setDresses] = useState<DressModel[]>([]);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId === null || userId == 'false') {
            navigate('/Login');
        }
        else {
            fetchDress();
        }
    }, []);

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
        <>
            <h1>Mes robes</h1>

            <div className='row mx-3 ' >
                {dresses.map((dress) => (
                    <div className='col-3 my-2  text-center '>
                        <div className='border'>
                            <p>{dress.label}</p>
                            <p>{dress.description}</p>
                            <p>{dress.price}</p>
                            <img src={`data:image/jpeg;base64,${dress.image}`} alt={dress.label} />
                            <button > Supprimer</button>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
};

export default MyDress;