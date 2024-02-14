
import axios from 'axios';
import './Dress.css';
import React, { useState, useEffect } from 'react';
import { DressModel } from '../../models/dressModel';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                    <h3> NOS ROBES</h3>
                </div>
                <div className="col text-end ">
                <Link to="#" onClick={naviguatetoAddDress}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon" height="32" width="36" >
    <path fill="#fff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
  </svg>
</Link>
                </div>
            </div>
            <div className='row mx-3  ' style={{ maxHeight: '500px', overflowY: 'auto' }} >
                
                {dresses.map((dress) => (
                    <div className='col-3 my-2  text-center '>
                        <div className='border' >
                            <p style={{ marginBottom: '-15px' }}>Nom : {dress.label}</p>
                            <p style={{ marginBottom: '-15px' }}>Description : {dress.description}</p>
                            <p style={{ marginBottom: '-10px' }}>Prix: {dress.price}</p>
                            <img style={{ marginBottom: '5px' }} src={`data:image/jpeg;base64,${dress.image}`} width={"200px"} height={"300px"} alt={dress.label} />
                            <button onClick={() => addToCart(dress.id)}> Ajouter panier</button>
                        </div>
                    </div>

                ))}
              
            </div>
        </>
    );
};

export default Dress;