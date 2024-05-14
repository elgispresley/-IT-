'use client'

import React, {useEffect, useState} from 'react';
import {NextResponse} from "next/server";

interface Direction {
    title: string;
    description: string;
    form_of_studies: string;
    price: string;
    img: string;
}


const PageAdmin = () => {
    const [directions, setDirections] = useState<Direction[]>([]);
    const [newDirection, setNewDirection] = useState<Direction>({
        title: '',
        img: '',
        description: '',
        form_of_studies: '',
        price: '',
    });

    console.log(newDirection)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/direction/');
            if (!response.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const jsonData = await response.json();
            setDirections(jsonData.rows);
        };

        fetchData();
    }, []);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name === 'img') {
            setNewDirection(prevState => ({
                ...prevState,
                [name]: e.target.files[0]
            }));
        } else {
            setNewDirection(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleDelete = async (index: number) => {
        try {
            const response = await fetch(`http://localhost:5000/api/direction/${index}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setDirections(prevDirections => prevDirections.filter((_, i) => i !== index));
            } else {
                console.error('Ошибка при удалении направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', newDirection.title);
            formData.append('description', newDirection.description);
            formData.append('form_of_studies', newDirection.form_of_studies);
            formData.append('price', newDirection.price);
            formData.append('img', newDirection.img); // Добавляем файл в FormData

            const response = await fetch('http://localhost:5000/api/direction/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('добавлен объект');
            } else {
                console.error('Ошибка при добавлении нового направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    return (
        <div>
            <h2>Создать новое направление</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={newDirection.title} onChange={handleChange} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={newDirection.description} onChange={handleChange} />
                </div>
                <div>
                    <label>Form:</label>
                    <select name="form_of_studies" value={newDirection.form_of_studies} onChange={handleChange}>
                        <option value="FULL_TIME">Очный</option>
                        <option value="DISTANCE_LEARNING">Заочный</option>
                    </select>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={newDirection.price} onChange={handleChange} />
                </div>
                <div>
                    <label>Img:</label>
                    <input type="file" name="img" accept='/image/*, .png, .jpg, .web' onChange={handleChange} />
                </div>
                <button type="submit">Отправить</button>
            </form>

            <h2>Направления</h2>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>form</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {directions.map((direction, index) => (
                    <tr key={index}>
                        <td>{direction.title}</td>
                        <td>{direction.description}</td>
                        <td>{direction.form_of_studies}</td>
                        <td>{direction.price}</td>
                        <td><button onClick={() => handleDelete(index)}>Удалить</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PageAdmin;
