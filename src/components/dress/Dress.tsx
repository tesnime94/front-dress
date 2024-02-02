
import axios from 'axios';
import './Dress.css';

import React, { useState, useEffect } from 'react';
import { DressModel } from '../../models/dressModel';

const Dress = () => {
    const [dresses, setDresses] = useState<DressModel[]>([]);

    useEffect(() => {
        fetchDress();
    }, []);

    const fetchDress = (() => {
        axios.get('http://localhost:8080/robe/all')
            .then((res) => {
                console.log(res);
                setDresses(res.data)

            })
            .catch((error) => console.log(error));
    })

    return (
        <>
            <h1>Toutes les robes</h1>

            <div className='row mx-3'>
                {dresses.map((dress) => (
                    <div className='col-3 my-2  text-center '>
                        <div className='border'>
                            <p>{dress.label}</p>
                            <p>{dress.description}</p>
                            <p>{dress.price}</p>
                        </div>



                    </div>

                ))}
            </div>
        </>
    );
};

export default Dress;