import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Dress.css';

const AddDress = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        price: '',
        label: '',
        description: '',
        size: ''
    });
    const [selectedFile, setSelectedFile] = useState(null);

    // méthode qui va me permettre de modifier mon state
    //@ts-ignore
    const onChange = (e) => {
        console.log(e.target.value);
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };
    //@ts-ignore
    const onFileChange = (e) => {
        console.log(e.target.files); // Pour voir si le fichier est bien là
        setSelectedFile(e.target.files[0]);
    };

    // ce qu'il va se passer quand je vais soumettre mon formulaire
    //@ts-ignore
    const onSubmit = (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        const formData = new FormData();
        formData.append("price", credentials.price);
        formData.append("label", credentials.label);
        formData.append("description", credentials.description);
        formData.append("size", credentials.size);
        if (userId) {
            formData.append('userId', userId);
        }
        if (selectedFile) {
            formData.append("image", selectedFile);
        }
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        axios.post("http://localhost:8080/robe/add", formData) //ici que ça a l'air de beuguer
            .then((res) => {
                console.log(res);
                navigate('/Dress');
            })
            .catch((error) => console.error(error));
    };



    return (
        <form onSubmit={onSubmit}>
            <div className='form_connexion'>
                <div className='groupLogin'>
                    <label htmlFor='label'>Nom</label>
                    <input type='text' name='label' value={credentials.label} onChange={onChange} />
                </div>

                <div className='groupLogin'>
                    <label htmlFor='description'>Description</label>
                    <input type='text' name='description' value={credentials.description} onChange={onChange} />
                </div>

                <div className='groupLogin'>
                    <label htmlFor='size'>Taille</label>
                    <input type='text' name='size' value={credentials.size} onChange={onChange} />
                </div>

                <div className='groupLogin'>
                    <label htmlFor='price'>Prix</label>
                    <input type='text' name='price' value={credentials.price} onChange={onChange} />
                </div>
                <div className='groupLogin'>
                    <label htmlFor='image'>Image</label>
                    <input type='file' name='image' onChange={onFileChange} />
                </div>
                <div className='groupLogin'>
                    <button type="submit">Ajouter robe</button>
                </div>

            </div>
        </form>
    );
};

export default AddDress;
