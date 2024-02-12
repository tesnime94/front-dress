
import axios from 'axios';
import './Dress.css';
import React, { useState, useEffect } from 'react';
import { DressModel } from '../../models/dressModel';
import { useNavigate } from 'react-router-dom';

const Dress = () => {

    const navigate = useNavigate();
    const naviguatetoAddDress = (() => {
        navigate('/addDress')
    })

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
        axios.get('http://localhost:8080/robe/all')
            .then((res) => {
                console.log(res);
                setDresses(res.data)

            })
            .catch((error) => console.log(error));
    })
    // @ts-ignore
    const addToCart = (id) => {
        const userId = localStorage.getItem('userId');
        axios.post('http://localhost:8080/purchase', null, {
            params: {
                userId: userId,
                robeId: id,
                quantity: 1 // Supposons que l'ajout au panier ajoute toujours 1 quantité
            }
        })
            .then((response) => {
                alert("Produit ajouté au panier avec succès !");

            })
            .catch((error) => {
                console.error("Erreur lors de l'ajout au panier :", error);
                alert("Une erreur est survenue lors de l'ajout au panier.");
            });
    };



    return (
        <>
            <div className="row mx-3">
                <div className="col">
                    <h1>Toutes les robes</h1>
                </div>
                <div className="col text-end ">
                    <button onClick={naviguatetoAddDress} > Ajouter une robe</button>
                </div>
            </div>




            <div className='row mx-3  ' >
                {dresses.map((dress) => (
                    <div className='col-3 my-2  text-center '>
                        <div className='border'>
                            <p>Nom : {dress.label}</p>
                            <p>Description : {dress.description}</p>
                            <p>Prix: {dress.price}</p>
                            <img src={`data:image/jpeg;base64,${dress.image}`} width={"200px"} alt={dress.label} />
                            <button onClick={() => addToCart(dress.id)}> Ajouter panier</button>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
};

export default Dress;
