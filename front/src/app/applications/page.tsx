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

    const handleCheckboxChange = async (index: string, type: 'processed' | 'approved') => {
        try {
            const updatedApplications = applications.map((app: any) => {
                if (app.id === index) {
                    return { ...app, processed: type === 'processed', approved: type === 'approved' };
                }
                return app;
            });
            setApplications(updatedApplications);

            const formData = new FormData();
            formData.append('processed', (type === 'processed').toString());
            formData.append('approved', (type === 'approved').toString());

            const response = await fetch(`http://localhost:5000/api/application/${index}`, {
                method: 'PUT',
                body: formData,
            });

            if (!response.ok) {
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
                            <div className={styles.blockImages}>
                                <img className={styles.image} src={`http://localhost:5000/${elem.Direction.img}`} alt={elem.title}/>
                            </div>
                            <div>
                                <h2 className={styles.nameHeader}>{elem.Direction.title}</h2>
                                <div className={styles.line}></div>
                            </div>
                            <div>
                                <p className={styles.Desctiption}>{elem.Direction.description}</p>
                                <ul className={styles.blockInfo}>
                                    <li className={styles.infoDescrition}>
                                        <div className={styles.nameDescrition}>Форма обучения:</div>
                                        <div className={styles.textDescrition}>{elem.Direction.form_of_studies === 'FULL_TIME' ? 'Заочный' : 'Очный'}</div>
                                    </li>
                                    <li className={styles.infoDescrition}>
                                        <div className={styles.nameDescrition}>Основа обучения:</div>
                                        <div className={styles.textDescrition}>Контракт</div>
                                    </li>
                                    <li className={styles.infoDescrition}>
                                        <div className={styles.nameDescrition}>Контракт:</div>
                                        <div className={styles.textDescrition}>{elem.Direction.price}</div>
                                    </li>
                                    <li className={styles.infoDescrition}>
                                        <div className={styles.nameDescrition}>На базе 9 класса:</div>
                                        <div className={styles.textDescrition}>2 года 10 месяцев</div>
                                    </li>
                                    <li className={styles.infoDescrition}>
                                        <div className={styles.nameDescrition}>На базе 11 класса:</div>
                                        <div className={styles.textDescrition}>1 год 10 месяцев</div>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.checboxInfo}>
                                <div className={styles.checkboxBlock}>
                                    <button
                                        onClick={() => handleCheckboxChange(elem.id, 'processed')}
                                        className={`${styles.delete} ${elem.processed ? styles.active : ''}`}
                                    >
                                        Подтверждение заявки
                                    </button>
                                </div>
                                <div className={styles.checkboxBlock}>
                                    <button
                                        onClick={() => handleCheckboxChange(elem.id, 'approved')}
                                        className={`${styles.delete} ${elem.approved ? styles.active : ''}`}
                                    >
                                        Отклонение заявки
                                    </button>
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