'use client'

import React, {useEffect, useState} from 'react';
import styles from "@/app/styles/admin/Admin.module.scss";

interface Props {
    processed: boolean;
}


const PageApplications = () => {
    const [applications, setApplications] = useState<any>([]);
    const [newDirection, setNewDirection] = useState<Props>({
        processed: true,
    });

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:5000/api/application/');
            if (!res.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const applicationsData = await res.json();
            setApplications(applicationsData.rows)
        };

        fetchData();
    }, []);

    const handleDelete = async (index: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/application/${index}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setApplications((prevApplications: any) => prevApplications.filter((app: any) => app.id !== index));
                console.log('Объект удален');
            } else {
                console.error('Ошибка при удалении направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };


    console.log(applications)
    const handleSubmit = async (index: string) => {
        try {
            const formData = new FormData();
            formData.append('processed', newDirection.processed.toString());

            const response = await fetch(`http://localhost:5000/api/application/${index}`, {
                method: 'PUT',
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
        <div className={styles.wrapperAdmin}>
            <h1 className={styles.nameAdmin}>Заявки пользователей</h1>
            <ul className={styles.blockList}>
                {applications.map((elem: any) => (
                    <li key={elem.id} className={styles.infoList}>
                        <div className={styles.blockInfo}>
                            <h2 className={styles.name}>{elem.name}</h2>
                            <p className={styles.email}>{elem.email}</p>
                            <div className={styles.checboxInfo}>
                                <div className={styles.checboxBlock}>
                                    <input type='checkbox' name='processed' checked={elem.processed}
                                           onClick={() => handleSubmit(elem.id)}
                                           className={styles.checkbox}/>
                                    <p className={styles.textInput}>
                                        Подтверждение заявки
                                    </p>
                                </div>
                            </div>
                            <button className={styles.delete} onClick={() => handleDelete(elem.id)}>Удалить</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PageApplications;