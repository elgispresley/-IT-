'use client'

import React, { useEffect, useState } from 'react';
import styles from './DirectionsUniversity.module.scss';

const DirectionsUniversity = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/Direction/');
            if (!response.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const jsonData = await response.json();
            setData(jsonData.rows);
        };

        fetchData();
    }, []);

    const handleSearchChange = (event: any) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter((elem: any) =>
        elem.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={styles.contentDerections}>
            <div className={styles.blockBTN}>
                <p className={styles.textDescrition}>Вы можете скачать все направления по кнопке с право</p>
                <a
                    href="/Направления.pdf"
                    target="_blank"
                    className={styles.lineBlock}
                >
                    Посмотреть направления
                </a>
            </div>
            <input
                type="text"
                placeholder="Поиск по направлениям..."
                value={searchQuery}
                onChange={handleSearchChange}
                className={styles.searchInput}
            />
            <ul className={styles.blockList}>
                {Array.isArray(filteredData) && filteredData.map((elem: any) => (
                    <li key={elem.id} className={styles.infoList}>
                        <div className={styles.blockImages}>
                            <img className={styles.image} src={`http://localhost:5000/${elem.img}`} alt={elem.title}/>
                        </div>
                        <div>
                            <h2 className={styles.nameHeader}>{elem.title}</h2>
                            <div className={styles.line}></div>
                        </div>
                        <div>
                            <p className={styles.Desctiption}>{elem.description}</p>
                            <ul className={styles.blockInfo}>
                                <li className={styles.infoDescrition}>
                                    <div className={styles.nameDescrition}>Форма обучения:</div>
                                    <div className={styles.textDescrition}>{elem.form_of_studies === 'FULL_TIME' ? 'Заочный' : 'Очный'}</div>
                                </li>
                                <li className={styles.infoDescrition}>
                                    <div className={styles.nameDescrition}>Основа обучения:</div>
                                    <div className={styles.textDescrition}>Контракт</div>
                                </li>
                                <li className={styles.infoDescrition}>
                                    <div className={styles.nameDescrition}>Контракт:</div>
                                    <div className={styles.textDescrition}>{elem.price}</div>
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DirectionsUniversity;
