'use client'

import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import styles from './TheAddAplication.module.scss';


interface Props {
    name: string;
    email: string;
    phone: string;
    age: string;
    DirectionId: string;
}

interface PropsActive {
    onActive: (value: boolean) => void;
    active: boolean;
    idAplication: number;
}

const TheAddAplication = ({onActive, active, idAplication}: PropsActive) => {
    const [data, setData] = useState([]);
    const session = useSession();
    const [newDirection, setNewDirection] = useState<Props>({
        name: '',
        email: '',
        phone: '',
        age: '',
        DirectionId: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/direction/');
            if (!response.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const jsonData = await response.json();
            setData(jsonData.rows);
        };

        fetchData();
    }, []);


    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setNewDirection(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleChangeActive = () => {
        onActive(!active);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', newDirection.name);
            formData.append('email', newDirection.email);
            formData.append('phone', newDirection.phone);
            formData.append('age', newDirection.age);
            formData.append('DirectionId', newDirection.DirectionId);

            const response = await fetch('http://localhost:5000/api/application/', {
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
        <div className={styles.componentApplication}>
            <form className={styles.headerInput} onSubmit={handleSubmit}>
                <h2 className={styles.nameApplication}>Оформите заявку</h2>
                <div className={styles.inputsAdds}>
                    <div className={styles.inputForm}>
                        <label className={styles.textInput}>ФИО:</label>
                        <input type='text' name='name' value={newDirection.name} className={styles.inputs}
                               placeholder='Имя' onChange={handleChange}/>
                    </div>
                    <div className={styles.inputForm}>
                        <label className={styles.textInput}>Email:</label>
                        <input type='email' name='email' value={newDirection.email} className={styles.inputs}
                               placeholder='Email' onChange={handleChange}/>
                    </div>
                    <div className={styles.inputForm}>
                        <label className={styles.textInput}>Телефон:</label>
                        <input type='tel' name='phone' value={newDirection.phone} className={styles.inputs}
                               placeholder='телефон' onChange={handleChange}/>
                    </div>
                    <div className={styles.inputForm}>
                        <label className={styles.textInput}>Возраст:</label>
                        <input type='number' name='age' value={newDirection.age} className={styles.inputs}
                               placeholder='age' onChange={handleChange}/>
                    </div>
                    <div className={styles.inputOption}>
                        <label className={styles.textInput}>Название:</label>
                        <select name='DirectionId' value={newDirection.DirectionId} onChange={handleChange} className={styles.inputs}>
                            {data.map((elem: any) => (
                                <option value={elem.id} key={elem.id} className={styles.textGendr}>
                                    {elem.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.checboxInfo}>
                        <div>
                            <input type='checkbox' name='processed' value={'false'} required
                                   onChange={handleChange} className={styles.checkbox}/>
                        </div>
                        <p className={styles.textInput}>
                            Подтвердить направление
                        </p>
                    </div>
                </div>
                {
                    session?.data ? <button onClick={handleChangeActive} className={styles.submit}>Отправить</button> :
                        <div className={styles.warning}>Для того что бы пройти анкетирование вы должны авторизоваться</div>
                }
            </form>
        </div>
    )
};

export default TheAddAplication;