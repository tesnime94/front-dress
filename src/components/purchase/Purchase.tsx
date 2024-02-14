import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PurchaseModel } from '../../models/purchaseModel';
import './purchase.css';


const Purchase = () => {
    const [purchases, setPurchases] = useState<PurchaseModel[]>([]);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const loadPurchases = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/purchase/${userId}`);
                const purchasesData: PurchaseModel[] = response.data;

                const purchasesWithSellerInfo = await Promise.all(purchasesData.map(async (purchase) => {
                    const userResponse = await axios.get(`http://localhost:8080/user/${purchase.robe.id}`);
                    return { ...purchase, sellerEmail: userResponse.data.email };
                }));

                setPurchases(purchasesWithSellerInfo);
            } catch (error) {
                console.error('Erreur lors de la récupération des achats:', error);
            }
        };

        loadPurchases();
    }, [userId]);

    // @ts-ignore
    const handleDeletePurchase = async (purchaseId) => {
        try {
            await axios.delete(`http://localhost:8080/purchase/delete/${purchaseId}`);
            setPurchases(purchases.filter(purchase => purchase.id !== purchaseId));
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'achat:', error);
        }
    };

    return (
        <div className="cart-container">
            <h2 className="cart-title">Mon Panier</h2>
            <ul className="cart-list">
                {purchases.map((purchase, index) => (
                    <li key={index} className="cart-item">
                        <div className="cart-item-details">
                            <span className="cart-item-label">Robe: </span>{purchase.robe.label}
                            <br />
                            <span className="cart-item-label">Prix Total: </span>{purchase.totalPrice}€
                        </div>
                        <div className="cart-item-seller">
                            <span className="seller-email">{purchase.sellerEmail ?? 'Email non disponible'}</span>
                        </div>
                        {/* Bouton pour supprimer un achat */}
                        <button onClick={() => handleDeletePurchase(purchase.id)} className="delete-btn">Rendre la robe</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Purchase;
