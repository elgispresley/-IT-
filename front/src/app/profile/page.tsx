'use client';

import Layout from "@/components/layout/Layout";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import styles from '../styles/profile/Profile.module.scss';

const Profile = () => {
    const [applications, setApplications] = useState<any[]>([]);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/application/');
                if (!res.ok) {
                    throw new Error('Unable to fetch applications!');
                }
                const applicationsData = await res.json();
                setApplications(applicationsData.rows);
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/application/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setApplications((prevApplications) => prevApplications.filter((app) => app.id !== id));
                console.log('Application deleted');
            } else {
                console.error('Error deleting application:', response.statusText);
            }
        } catch (error) {
            console.error('Error making delete request:', error);
        }
    };

    return (
        <Layout>
            <div className={styles.wrapperProfile}>
                {session?.user?.image && (
                    <img className={styles.imgProfile} src={session.user.image} alt="Profile" />
                )}
                <h1 className={styles.nameProfile}>{session?.user?.name}</h1>
            </div>
            <ul className={styles.blockList}>
                {applications.map((elem) => (
                    session?.user?.name === elem.name && (
                        <li key={elem.id} className={styles.list}>
                            {elem.processed && !elem.approved ? (
                                <li className={styles.ok}>Ваша заявка принята</li>
                            ) : !elem.processed && elem.approved ? (
                                <li className={styles.not}>Ваша заявка отклонена</li>
                            ) : (
                                <li className={styles.wait}>Ваша заявка в обработке</li>
                            )}
                            <div className={styles.blockInfo}>
                                <div className={styles.blockImages}>
                                    <img className={styles.image} src={`http://localhost:5000/${elem.Direction.img}`} alt={elem.Direction.title} />
                                </div>
                                <div>
                                    <h2 className={styles.nameHeader}>{elem.Direction.title}</h2>
                                    <div className={styles.line}></div>
                                </div>
                                <div>
                                    <p className={styles.Description}>{elem.Direction.description}</p>
                                    <ul className={styles.blockInfo}>
                                        <li className={styles.infoDescription}>
                                            <div className={styles.nameDescription}>Форма обучения:</div>
                                            <div className={styles.textDescription}>{elem.Direction.form_of_studies === 'FULL_TIME' ? 'Очный' : 'Заочный'}</div>
                                        </li>
                                        <li className={styles.infoDescription}>
                                            <div className={styles.nameDescription}>Основа обучения:</div>
                                            <div className={styles.textDescription}>Контракт</div>
                                        </li>
                                        <li className={styles.infoDescription}>
                                            <div className={styles.nameDescription}>Контракт:</div>
                                            <div className={styles.textDescription}>{elem.Direction.price}</div>
                                        </li>
                                        <li className={styles.infoDescription}>
                                            <div className={styles.nameDescription}>На базе 9 класса:</div>
                                            <div className={styles.textDescription}>2 года 10 месяцев</div>
                                        </li>
                                        <li className={styles.infoDescription}>
                                            <div className={styles.nameDescription}>На базе 11 класса:</div>
                                            <div className={styles.textDescription}>1 год 10 месяцев</div>
                                        </li>
                                    </ul>
                                </div>
                                <button className={styles.delete} onClick={() => handleDelete(elem.id)}>Удалить</button>
                            </div>
                        </li>
                    )
                ))}
            </ul>
        </Layout>
    );
};

export default Profile;
