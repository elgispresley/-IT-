'use client'

import Layout from "@/components/layout/Layout";
import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import styles from '../styles/profile/Profile.module.scss'

const Profile = () => {
    const [applications, setApplications] = useState<any>([]);
    const session = useSession();

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


    return (
      <Layout>
          <div className={styles.wrapperProfile}>
              {session?.data &&
                  <img className={styles.imgProfile}  src={session?.data?.user?.image ?? ''}  alt="image"/>
              }
              <h1 className={styles.nameProfile}>{session?.data?.user?.name}</h1>
          </div>
          <ul className={styles.blockList}>
              {applications.map((elem:any) => (
                  session?.data?.user?.name === elem.name && (
                      <li key={elem.id} className={styles.infoList}>
                          <div className={styles.blockInfo}>
                              <div className={styles.blockImages}>
                                  <img className={styles.image} src={`http://localhost:5000/${elem.Direction.img}`} alt={elem.title} />
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
                                          <div className={styles.textDescription}>{elem.Direction.form_of_studies === 'FULL_TIME' ? 'Заочный' : 'Очный'}</div>
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
  )
}

export default Profile